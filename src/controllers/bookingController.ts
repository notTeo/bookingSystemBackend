import { Request, Response } from "express";
import { PrismaClient, BookingStatus } from "../generated/prisma";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";
import { format, addMinutes } from "date-fns";

const prisma = new PrismaClient();

export const getAvailableSlots = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shopId = (req as any).shop.id;
    const employeeId = Number(req.params.employeeId);
    const { date, serviceId } = req.query;
    if (!shopId || isNaN(shopId)) {
      return sendErrorResponse(res, "Invalid shop ID", 400);
    }
    const employee = await prisma.user.findUnique({
      where: { id: employeeId, shopId },
    });

    if (!employee || !employee.isActive || employee.role !== "EMPLOYEE") {
      return sendErrorResponse(res, "Invalid or inactive employee", 400);
    }

    if (!date || !serviceId || isNaN(Number(serviceId)) || isNaN(employeeId)) {
      return sendErrorResponse(res, "Invalid input", 400);
    }

    const [year, month, day] = (date as string).split("-").map(Number);
    const parsedDate = new Date(year, month - 1, day);

    if (isNaN(parsedDate.getTime())) {
      return sendErrorResponse(res, "Invalid date format", 400);
    }

    const service = await prisma.service.findUnique({
      where: { id: Number(serviceId) },
      select: { duration: true },
    });

    if (!service) {
      return sendErrorResponse(res, "Service not found", 404);
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
      return sendSuccessResponse(res, {
        employeeId,
        date,
        serviceId: Number(serviceId),
        serviceDuration: duration,
        availableSlots: [],
      });
    }

    const bookings = await prisma.booking.findMany({
      where: {
        employeeId,
        date: {
          gte: dayStart,
          lte: dayEnd,
        },
        status: {
          in: ["CONFIRMED"],
        },
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

    return sendSuccessResponse(res, {
      employeeId,
      date,
      serviceId: Number(serviceId),
      serviceDuration: duration,
      availableSlots,
    });
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error", 500);
  }
};

export const createBookingByOwner = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { employeeId, serviceId, date, time, customer } = req.body;
    const shopId = (req as any).shop.id;

    if (
      !employeeId ||
      !serviceId ||
      !date ||
      !time ||
      !customer?.name ||
      !customer?.phone
    ) {
      return sendErrorResponse(res, "Missing required fields", 400);
    }
    if (!shopId || isNaN(shopId)) {
      return sendErrorResponse(res, "Invalid shop ID", 400);
    }
    const employee = await prisma.user.findUnique({
      where: { id: employeeId, shopId, isActive: true },
    });

    if (!employee || !employee.isActive) {
      return sendErrorResponse(res, "Invalid or inactive employee", 400);
    }

    const service = await prisma.service.findUnique({
      where: { id: serviceId, shopId },
      select: { duration: true },
    });

    if (!service) {
      return sendErrorResponse(res, "Service not found", 404);
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
      return sendErrorResponse(
        res,
        "Requested time is outside working hours",
        400
      );
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
      return sendErrorResponse(
        res,
        "Time overlaps with an existing booking",
        409
      );
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
        status: "CONFIRMED",
        method: "IN_STORE",
        shopId,
      },
    });

    return sendSuccessResponse(res, {
      message: "Booking created",
      bookingId: booking.id,
    });
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error", 500);
  }
};

export const createBookingByCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shopId = (req as any).shop.id;
    const { employeeId, serviceId, date, time, customer } = req.body;

    if (
      !employeeId ||
      !serviceId ||
      !date ||
      !time ||
      !customer?.name ||
      !customer?.phone
    ) {
      return sendErrorResponse(res, "Missing required fields", 400);
    }
    if (!shopId || isNaN(shopId)) {
      return sendErrorResponse(res, "invalide shop ID");
    }
    const employee = await prisma.user.findUnique({
      where: { id: employeeId, shopId },
    });

    if (!employee || !employee.isActive) {
      return sendErrorResponse(res, "Invalid or inactive employee", 400);
    }

    const service = await prisma.service.findUnique({
      where: { id: serviceId, shopId },
      select: { duration: true },
    });

    if (!service) {
      return sendErrorResponse(res, "Service not found", 404);
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
      return sendErrorResponse(
        res,
        "Requested time is outside working hours",
        400
      );
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
      return sendErrorResponse(
        res,
        "Time overlaps with an existing booking",
        409
      );
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

    return sendSuccessResponse(res, {
      message: "Booking created",
      bookingId: booking.id,
    });
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error", 500);
  }
};

export const cancelBooking = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shopId = (req as any).shop.id;
    const bookingId = Number(req.params.bookingId);

    if (!shopId || isNaN(shopId)) {
      return sendErrorResponse(res, "Invalid shop ID", 400);
    }
    if (isNaN(bookingId)) {
      return sendErrorResponse(res, "Invalid booking ID", 400);
    }

    const booking = await prisma.booking.findUnique({
      where: { id: bookingId, shopId },
    });

    if (!booking) {
      return sendErrorResponse(res, "Booking not found", 404);
    }

    if (booking.status === BookingStatus.CANCELED) {
      return sendErrorResponse(res, "Booking is already canceled", 400);
    }

    await prisma.booking.update({
      where: { id: bookingId },
      data: { status: BookingStatus.CANCELED },
    });

    return sendSuccessResponse(res, {
      message: "Booking canceled successfully",
      bookingId,
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error", 500);
  }
};

export const confirmBooking = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shopId = (req as any).shop.id;
    const bookingId = Number(req.params.bookingId);

    if (!shopId || isNaN(shopId)) {
      return sendErrorResponse(res, "Invalid shop ID", 400);
    }
    if (isNaN(bookingId)) {
      return sendErrorResponse(res, "Invalid booking ID", 400);
    }

    const booking = await prisma.booking.findUnique({
      where: { id: bookingId, shopId },
    });

    if (!booking) {
      return sendErrorResponse(res, "Booking not found", 404);
    }

    if (booking.status === BookingStatus.CONFIRMED) {
      return sendErrorResponse(res, "Booking is already confirmed", 400);
    }

    await prisma.booking.update({
      where: { id: bookingId },
      data: { status: BookingStatus.CONFIRMED },
    });

    return sendSuccessResponse(res, {
      message: "Booking confirmed successfully",
      bookingId,
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error", 500);
  }
};

export const completeBooking = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shopId = (req as any).shop.id;
    const bookingId = Number(req.params.bookingId);

    if (isNaN(bookingId)) {
      return sendErrorResponse(res, "Invalid booking ID", 400);
    }

    const booking = await prisma.booking.findUnique({
      where: { id: bookingId, shopId },
    });

    if (!booking) {
      return sendErrorResponse(res, "Booking not found", 404);
    }

    if (booking.status === BookingStatus.COMPLETED) {
      return sendErrorResponse(res, "Booking is already completed", 400);
    }

    await prisma.booking.update({
      where: { id: bookingId },
      data: { status: BookingStatus.COMPLETED },
    });

    return sendSuccessResponse(res, {
      message: "Booking completed successfully",
      bookingId,
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error", 500);
  }
};
