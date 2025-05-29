import { addMinutes, format } from "date-fns";
import { BookingStatus, BookingMethod } from "../generated/prisma";
import { PrismaClient } from "../generated/prisma";
import { AppError } from "../utils/errors";
const prisma = new PrismaClient();

interface GetAvailableSlotsInput {
  shopId: number;
  employeeId: number;
  serviceId: number;
  date: string;
}

type CreateBookingByOwnerInput = {
  shopId: number;
  employeeId: number;
  serviceId: number;
  date: string;
  time: string;
  customer: {
    name: string;
    phone: string;
    email?: string;
  };
};

interface CreateCustomerBookingInput {
  shopId: number;
  employeeId: number;
  serviceId: number;
  date: string;
  time: string;
  customer: {
    name: string;
    phone: string;
    email?: string;
  };
}

export const getAvailableSlotsService = async ({
  shopId,
  employeeId,
  serviceId,
  date,
}: GetAvailableSlotsInput) => {
  const employee = await prisma.user.findUnique({
    where: { id: employeeId, shopId },
  });

  if (!employee || !employee.isActive || employee.role !== "EMPLOYEE") {
    throw new AppError("Invalid or inactive employee", 400);
  }

  const [year, month, day] = date.split("-").map(Number);
  const parsedDate = new Date(year, month - 1, day);
  if (isNaN(parsedDate.getTime())) {
    throw new AppError("Invalid date format", 400);
  }

  const service = await prisma.service.findUnique({
    where: { id: serviceId },
    select: { duration: true },
  });

  if (!service) {
    throw new AppError("Service not found", 404);
  }

  const duration = service.duration;

  const dayStart = new Date(parsedDate);
  dayStart.setHours(0, 0, 0, 0);

  const dayEnd = new Date(parsedDate);
  dayEnd.setHours(23, 59, 59, 999);

  const workingSlots = await prisma.workingSlot.findMany({
    where: {
      employeeId,
      shopId,
      date: {
        gte: dayStart,
        lte: dayEnd,
      },
      onlyInStore: false,
    },
    orderBy: { startTime: "asc" },
  });

  if (workingSlots.length === 0) {
    return {
      employeeId,
      date,
      serviceId,
      serviceDuration: duration,
      availableSlots: [],
    };
  }

  const bookings = await prisma.booking.findMany({
    where: {
      employeeId,
      date: {
        gte: dayStart,
        lte: dayEnd,
      },
      status: { in: ["CONFIRMED"] },
    },
    include: {
      service: true,
    },
  });

  const bookedTimes = bookings.map((b) => {
    const start = b.date;
    const end = addMinutes(start, b.service.duration);
    return { start, end };
  });

  const availableSlots: string[] = [];

  for (const slot of workingSlots) {
    const [startHour, startMin] = slot.startTime.split(":").map(Number);
    const [endHour, endMin] = slot.endTime.split(":").map(Number);

    const slotStart = new Date(year, month - 1, day, startHour, startMin);
    const slotEnd = new Date(year, month - 1, day, endHour, endMin);

    let pointer = new Date(slotStart);

    while (addMinutes(pointer, duration) <= slotEnd) {
      const proposedEnd = addMinutes(pointer, duration);

      const overlaps = bookedTimes.some(({ start, end }) => {
        return (
          (pointer >= start && pointer < end) ||
          (proposedEnd > start && proposedEnd <= end) ||
          (start >= pointer && start < proposedEnd)
        );
      });

      if (!overlaps) {
        availableSlots.push(format(pointer, "HH:mm"));
      }

      pointer = addMinutes(pointer, duration);
    }
  }

  return {
    employeeId,
    date,
    serviceId,
    serviceDuration: duration,
    availableSlots,
  };
};

export const createBookingByOwnerService = async ({
  shopId,
  employeeId,
  serviceId,
  date,
  time,
  customer,
}: CreateBookingByOwnerInput) => {
  const employee = await prisma.user.findUnique({
    where: { id: employeeId, shopId, isActive: true },
  });

  if (!employee) {
    throw new AppError("Invalid or inactive employee", 400 );
  }

  const service = await prisma.service.findUnique({
    where: { id: serviceId, shopId },
    select: { duration: true },
  });

  if (!service) {
    throw new AppError("Service not found", 404);
  }

  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const start = new Date(year, month - 1, day, hour, minute);
  const end = addMinutes(start, service.duration);

  const startOfDay = new Date(year, month - 1, day, 0, 0, 0);
  const endOfDay = new Date(year, month - 1, day, 23, 59, 59, 999);

  const workingSlots = await prisma.workingSlot.findMany({
    where: { employeeId, shopId, date: { gte: startOfDay, lte: endOfDay } },
  });

  const fitsInsideWorkingSlot = workingSlots.some((slot) => {
    const [sHour, sMin] = slot.startTime.split(":").map(Number);
    const [eHour, eMin] = slot.endTime.split(":").map(Number);
    const slotStart = new Date(year, month - 1, day, sHour, sMin);
    const slotEnd = new Date(year, month - 1, day, eHour, eMin);
    return start >= slotStart && end <= slotEnd;
  });

  if (!fitsInsideWorkingSlot) {
    throw new AppError("Requested time is outside working hours", 400);
  }

  const bookings = await prisma.booking.findMany({
    where: {
      employeeId,
      shopId,
      status: { in: [BookingStatus.CONFIRMED] },
      date: { gte: startOfDay, lte: endOfDay },
    },
    include: { service: true },
  });

  const conflict = bookings.some((b) => {
    const bStart = b.date;
    const bEnd = addMinutes(bStart, b.service.duration);
    return (
      (start >= bStart && start < bEnd) ||
      (end > bStart && end <= bEnd) ||
      (bStart >= start && bStart < end)
    );
  });

  if (conflict) {
    throw new AppError("Time overlaps with an existing booking", 409);
  }

  const existingCustomer = await prisma.customer.findFirst({
    where: {
      phone: customer.phone,
      email: customer.email ?? undefined,
    },
  });

  const customerRecord =
    existingCustomer ??
    (await prisma.customer.create({
      data: {
        name: customer.name,
        phone: customer.phone,
        email: customer.email ?? null,
      },
    }));

  const booking = await prisma.booking.create({
    data: {
      employeeId,
      serviceId,
      customerId: customerRecord.id,
      date: start,
      status: BookingStatus.CONFIRMED,
      method: BookingMethod.IN_STORE,
      shopId,
    },
  });

  return { bookingId: booking.id };
};

export const createCustomerBookingService = async ({
  shopId,
  employeeId,
  serviceId,
  date,
  time,
  customer,
}: CreateCustomerBookingInput) => {
  if (!shopId || isNaN(shopId)) {
    throw new AppError("Invalid shop ID", 400);
  }

  const employee = await prisma.user.findUnique({
    where: { id: employeeId, shopId },
  });

  if (!employee || !employee.isActive) {
    throw new AppError("Invalid or inactive employee", 400);
  }

  const service = await prisma.service.findUnique({
    where: { id: serviceId, shopId },
    select: { duration: true },
  });

  if (!service) {
    throw new AppError("Service not found", 404);
  }

  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);

  const start = new Date(year, month - 1, day, hour, minute);
  const end = addMinutes(start, service.duration);

  const startOfDay = new Date(year, month - 1, day, 0, 0, 0);
  const endOfDay = new Date(year, month - 1, day, 23, 59, 59, 999);

  const workingSlots = await prisma.workingSlot.findMany({
    where: {
      employeeId,
      shopId,
      date: { gte: startOfDay, lte: endOfDay },
      onlyInStore: false,
    },
  });

  const fitsInsideWorkingSlot = workingSlots.some((slot) => {
    const [sHour, sMin] = slot.startTime.split(":").map(Number);
    const [eHour, eMin] = slot.endTime.split(":").map(Number);

    const slotStart = new Date(year, month - 1, day, sHour, sMin);
    const slotEnd = new Date(year, month - 1, day, eHour, eMin);

    return start >= slotStart && end <= slotEnd;
  });

  if (!fitsInsideWorkingSlot) {
    throw new AppError("Requested time is outside working hours", 400);
  }

  const bookings = await prisma.booking.findMany({
    where: {
      employeeId,
      shopId,
      status: { in: ["CONFIRMED"] },
      date: { gte: startOfDay, lte: endOfDay },
    },
    include: { service: true },
  });

  const conflict = bookings.some((b) => {
    const bStart = b.date;
    const bEnd = addMinutes(bStart, b.service.duration);
    return (
      (start >= bStart && start < bEnd) ||
      (end > bStart && end <= bEnd) ||
      (bStart >= start && bStart < end)
    );
  });

  if (conflict) {
    throw new AppError("Time overlaps with an existing booking", 409);
  }

  const existingCustomer = await prisma.customer.findFirst({
    where: {
      phone: customer.phone,
      email: customer.email ?? undefined,
    },
  });

  const customerRecord =
    existingCustomer ??
    (await prisma.customer.create({
      data: {
        name: customer.name,
        phone: customer.phone,
        email: customer.email ?? null,
      },
    }));

  const booking = await prisma.booking.create({
    data: {
      employeeId,
      serviceId,
      customerId: customerRecord.id,
      date: start,
      status: "PENDING",
      method: "ONLINE",
      shopId,
    },
  });

  return {
    bookingId: booking.id,
  };
};

export const cancelBookingService = async (shopId: number, bookingId: number) => {
  const booking = await prisma.booking.findUnique({
    where: { id: bookingId, shopId },
  });

  if (!booking) {
    throw new AppError("Booking not found", 404);
  }

  if (booking.status === BookingStatus.CANCELED) {
    throw new AppError("Booking is already canceled", 400);
  }

  await prisma.booking.update({
    where: { id: bookingId },
    data: { status: BookingStatus.CANCELED },
  });

  return bookingId;
};

export const confirmBookingService = async (shopId: number, bookingId: number) => {
  const booking = await prisma.booking.findUnique({
    where: { id: bookingId, shopId },
  });

  if (!booking) {
    throw new AppError("Booking not found", 404);
  }

  if (booking.status === BookingStatus.CONFIRMED) {
    throw new AppError("Booking is already confirmed", 400);
  }

  await prisma.booking.update({
    where: { id: bookingId },
    data: { status: BookingStatus.CONFIRMED },
  });

  return bookingId;
};

export const completeBookingService = async (shopId: number, bookingId: number) => {
  const booking = await prisma.booking.findUnique({
    where: { id: bookingId, shopId },
  });

  if (!booking) {
    throw new AppError("Booking not found", 404);
  }

  if (booking.status === BookingStatus.COMPLETED) {
    throw new AppError("Booking is already completed", 400);
  }

  await prisma.booking.update({
    where: { id: bookingId },
    data: { status: BookingStatus.COMPLETED },
  });

  return bookingId;
};