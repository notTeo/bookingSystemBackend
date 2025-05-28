import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";
import { addMinutes } from "date-fns";

const prisma = new PrismaClient();

export const getMe = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;

    const me = await prisma.user.findUnique({
      where: { id: userId },
    });

    return sendSuccessResponse(res, me);
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error", 500);
  }
};

// GET /dashboard/employees
export const getMyEmployees = async (req: Request, res: Response) => {
  const shopId = (req as any).shop?.id;
  if (!shopId) return sendErrorResponse(res, "Missing shop ID", 400);

  try {
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
    return sendSuccessResponse(res, employees);
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error", 500);
  }
};

// GET /dashboard/services
export const getMyServices = async (req: Request, res: Response) => {
  try {
    const shopId = (req as any).shop.id;
    const services = await prisma.service.findMany({
      where: {
        shopId,
      },
    });
    return sendSuccessResponse(res, services);
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error", 500);
  }
};

// POST /dashboard/bookings
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

// GET /dashboard/profile
export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    if (!userId) {
      return sendErrorResponse(res, "Unauthorized", 401);
    }

    const profile = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    return sendSuccessResponse(res, profile);
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error", 500);
  }
};

// PATCH /dashboard/profile
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const userId = (req as any).user.userId;
    if (!userId) {
      return sendErrorResponse(res, "Invalid user ID");
    }

    const updated = await prisma.user.update({
      where: { id: userId },
      data: {
        ...(name && { name }),
        ...(email && { email }),
        ...(password && { hashedPassword: password }),
      },
    });

    return sendSuccessResponse(res, {
      message: "Profile updated",
      userId: updated.id,
    });
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error", 500);
  }
};

// GET /dashboard/shop
export const getShopProfile = async (req: Request, res: Response) => {
  try {
    const shopId = (req as any).shop.id;
    if (isNaN(shopId)) return sendErrorResponse(res, "Invalid ID", 400);

    const shop = await prisma.shop.findUnique({ where: { id: shopId } });
    if (!shop) return sendErrorResponse(res, "Shop not found", 404);

    return sendSuccessResponse(res, { shop });
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error", 500);
  }
};

// PATCH /dashboard/shop
export const updateShopProfile = async (req: Request, res: Response) => {
  try {
    const { name, address, phone } = req.body;
    const shopId = (req as any).shop.id;
    if (isNaN(shopId)) return sendErrorResponse(res, "Invalid ID", 400);

    const updated = await prisma.shop.update({
      where: { id: shopId },
      data: {
        ...(name && { name }),
        ...(address && { address }),
        ...(phone && { phone }),
      },
    });

    return sendSuccessResponse(res, {
      message: "Shop profile updated",
      shopId: updated.id,
    });
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error", 500);
  }
};