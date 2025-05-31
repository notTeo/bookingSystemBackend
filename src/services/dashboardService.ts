import { addMinutes } from "date-fns";
import bcrypt from "bcryptjs";
import {
  BookingMethod,
  BookingStatus,
  PrismaClient,
} from "../generated/prisma";
import { AppError } from "../utils/errors";

const prisma = new PrismaClient();

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


export const getMyEmployeesService = async (shopId: number) => {
  const employees = await prisma.user.findMany({
    where: {
      role: "EMPLOYEE",
      shopId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      isActive: true,
    },
  });

  if (employees.length === 0) {
    throw new AppError("No employees found fro this shop", 404);
  }

  return employees;
};

export const getMyServicesService = async (shopId: number) => {
  const services = await prisma.service.findMany({
    where: {
      shopId,
    },
  });

  if (services.length === 0) {
    throw new AppError("No services found for this shop", 404);
  }
  return services;
};

export const getAllBookingsPerDayService = async (shopId: number, date: string) => {
  const [year, month, day] = date.split("-").map(Number);

  const targetDate = new Date(Date.UTC(year, month - 1, day));

  const dayStart = new Date(Date.UTC(year, month - 1, day, 0, 0, 0));
  const dayEnd = new Date(Date.UTC(year, month - 1, day, 23, 59, 59));

  const bookings = await prisma.booking.findMany({
    where: {
      shopId,
      date: {
        gte: dayStart,
        lte: dayEnd,
      },
    },
    include: {
      employee: {
        select: {
          id: true,
          name: true,
        },
      },
      service: {
        select: {
          id: true,
          name: true,
          duration: true,
          price: true,
        },
      },
    },
    orderBy: { date: "asc" },
  });

  return bookings;
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

export const getProfileService = async (userId: number, shopId: number) => {
  const profile = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!profile) {
    throw new AppError("User not found", 404);
  }

  return profile;
};

export const updateProfileService = async (
  userId: number,
  data: { name?: string; email?: string; password?: string }
) => {
  const updateData: any = {};
  if (data.name) updateData.name = data.name;
  if (data.email) updateData.email = data.email;
  if (data.password) {
    updateData.hashedPassword = await bcrypt.hash(data.password, 10);
  }

  const updated = await prisma.user.update({
    where: { id: userId },
    data: updateData,
  });

  return {
    message: "Profile updated",
    userId: updated.id,
  };
};

export const getShopProfileService = async (shopId: number) => {
  const shop = await prisma.shop.findUnique({ where: { id: shopId } });

  if (!shop) {
    throw new AppError("Shop not found", 404);
  }

  return { shop };
};

export const updateShopProfileService = async (
  shopId: number,
  data: { name?: string; address?: string;}
) => {
  const updateData: any = {};
  if (data.name) updateData.name = data.name;
  if (data.address) updateData.address = data.address;

  const updated = await prisma.shop.update({
    where: { id: shopId },
    data: updateData,
  });

  return {
    message: "Shop profile updated",
    shopId: updated.id,
  };
};

export const getInventoryItemsService = async (shopId: number) => {
  const items = await prisma.inventoryItem.findMany({ where: { shopId } });
  return { items };
};