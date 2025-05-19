import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";
import { parseISO, format, addMinutes, isBefore, isEqual } from 'date-fns';

const prisma = new PrismaClient();

export const getAvailableSlotsForAllEmployees = async (req: Request, res: Response) => {
  try {
    const { date, serviceId } = req.query;

    if (!date || !serviceId || isNaN(Number(serviceId))) {
      return sendErrorResponse(res, "Missing or invalid parameters", 400);
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

    // 1. Get all employees assigned to this service and who are active
    const employees = await prisma.user.findMany({
      where: {
        role: "EMPLOYEE",
        isActive: true,
        services: {
          some: {
            serviceId: Number(serviceId),
          },
        },
      },
      select: {
        id: true,
        name: true,
      },
    });

    const results = [];

    for (const employee of employees) {
      // 2. Get working slots
      const workingSlots = await prisma.workingSlot.findMany({
        where: {
          employeeId: employee.id,
          date: {
            gte: new Date(parsedDate.setHours(0, 0, 0, 0)),
            lt: new Date(parsedDate.setHours(23, 59, 59, 999)),
          },
        },
        orderBy: { startTime: "asc" },
      });

      if (workingSlots.length === 0) continue;

      // 3. Get bookings
      const bookings = await prisma.booking.findMany({
        where: {
          employeeId: employee.id,
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

      // 4. Build available slots
      const availableSlots: string[] = [];

      for (const slot of workingSlots) {
        const slotStart = parseISO(`${date}T${slot.startTime}`);
        const slotEnd = parseISO(`${date}T${slot.endTime}`);
        let pointer = slotStart;

        while (addMinutes(pointer, duration) <= slotEnd) {
          const proposedEnd = addMinutes(pointer, duration);

          const overlaps = bookedTimes.some(
            ({ start, end }) =>
              (isBefore(pointer, end) && isBefore(start, proposedEnd)) ||
              isEqual(pointer, start)
          );

          if (!overlaps) {
            availableSlots.push(format(pointer, "HH:mm"));
          }

          pointer = addMinutes(pointer, duration);
        }
      }

      results.push({
        employeeId: employee.id,
        name: employee.name,
      });
    }

    return sendSuccessResponse(res, results);
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error", 500);
  }
};

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

        const overlaps = bookedTimes.some(
          ({ start, end }) =>
            (isBefore(pointer, end) && isBefore(start, proposedEnd)) ||
            isEqual(pointer, start)
        );

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