import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";
import { parseISO, format, addMinutes, isBefore, isEqual } from 'date-fns';

const prisma = new PrismaClient();


export const getAvailableSlots = async (req: Request, res: Response) => {
  try {
    
    const employeeId = Number(req.params.employeeId);
    const { date, serviceId } = req.query;

    if (!date || !serviceId || isNaN(Number(serviceId)) || isNaN(employeeId)) {
      return sendErrorResponse(res, "Invalid input", 400);
    }

    const parsedDate = parseISO(date as string);
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

    const workingSlots = await prisma.workingSlot.findMany({
      where: {
        employeeId,
        date: {
          gte: new Date(parsedDate.setHours(0, 0, 0, 0)),
          lt: new Date(parsedDate.setHours(23, 59, 59, 999)),
        },
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
          gte: new Date(parsedDate.setHours(0, 0, 0, 0)),
          lt: new Date(parsedDate.setHours(23, 59, 59, 999)),
        },
        status: {
          in: ["PENDING", "CONFIRMED"],
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
      const slotStart = parseISO(`${date}T${slot.startTime}`);
      const slotEnd = parseISO(`${date}T${slot.endTime}`);
      let pointer = slotStart;

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

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { employeeId, serviceId, date, time, customer } = req.body;

    if (!employeeId || !serviceId || !date || !time || !customer?.name || !customer?.phone) {
      return sendErrorResponse(res, "Missing required fields", 400);
    }

    const employee = await prisma.user.findUnique({
      where: { id: employeeId },
    });

    if (!employee || !employee.isActive) {
      return sendErrorResponse(res, "Invalid or inactive employee", 400);
    }

    const service = await prisma.service.findUnique({
      where: { id: serviceId },
      select: { duration: true }
    });

    if (!service) {
      return sendErrorResponse(res, "Service not found", 404);
    }

    const start = parseISO(`${date}T${time}`);
    const end = addMinutes(start, service.duration);
    const startOfDay = new Date(start); startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(start); endOfDay.setHours(23, 59, 59, 999);

    const workingSlots = await prisma.workingSlot.findMany({
      where: {
        employeeId,
        date: { gte: startOfDay, lte: endOfDay }
      },
    });

    const fitsInsideWorkingSlot = workingSlots.some(slot => {
      const slotStart = parseISO(`${date}T${slot.startTime}`);
      const slotEnd = parseISO(`${date}T${slot.endTime}`);
      return start >= slotStart && end <= slotEnd;
    });

    if (!fitsInsideWorkingSlot) {
      return sendErrorResponse(res, "Requested time is outside working hours", 400);
    }

    const bookings = await prisma.booking.findMany({
      where: {
        employeeId,
        status: { in: ["PENDING", "CONFIRMED"] },
        date: { gte: startOfDay, lte: endOfDay }
      },
      include: { service: true },
    });

    const conflict = bookings.some(b => {
      const bStart = b.date;
      const bEnd = addMinutes(bStart, b.service.duration);
      return (
        (start >= bStart && start < bEnd) ||
        (end > bStart && end <= bEnd) ||
        (bStart >= start && bStart < end)
      );
    });

    if (conflict) {
      return sendErrorResponse(res, "Time overlaps with an existing booking", 409);
    }

    const existingCustomer = await prisma.customer.findFirst({
      where: {
        phone: customer.phone,
        email: customer.email ?? undefined,
      },
    });

    const customerRecord = existingCustomer ?? await prisma.customer.create({
      data: {
        name: customer.name,
        phone: customer.phone,
        email: customer.email ?? null
      }
    });

    const booking = await prisma.booking.create({
      data: {
        employeeId,
        serviceId,
        customerId: customerRecord.id,
        date: start,
        status: "PENDING"
      }
    });

    return sendSuccessResponse(res, {
      message: "Booking created",
      bookingId: booking.id
    });
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error", 500);
  }
};

export const deleteBooking = async (req: Request, res: Response): Promise<void> => {
  try {
    const bookingId = Number(req.params.bookingId);

    if (isNaN(bookingId)) {
      return sendErrorResponse(res, 'Invalid service ID', 400);
    }

    const booking = await prisma.service.findUnique({
      where: { id: bookingId },
    });

    if (!booking) {
      return sendErrorResponse(res, 'Booking not found', 404);
    }

    await prisma.booking.delete({
      where: { id: bookingId }
    });

    return sendSuccessResponse(res, {
      message: 'Booking deleted successfully',
      bookingId
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, 'Server error', 500);
  }
};
