import { Request, Response } from "express";
import { PrismaClient, WeekDay } from "../generated/prisma";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";

const prisma = new PrismaClient();

export const createWorkingHourRange = async (req: Request, res: Response) => {
  try {
    const employeeId = Number(req.params.employeeId);
    const { startDate, endDate, slots } = req.body;

    if (!startDate || !endDate || !slots || typeof slots !== "object") {
      return sendErrorResponse(res, "Invalid input", 400);
    }

    // 1. Create WorkingHourRange
    const range = await prisma.workingHourRange.create({
      data: {
        employeeId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
    });

    // 2. Prepare RecurringSlot data
    const toCreateRecurring: any[] = [];

    for (const day in slots) {
      const daySlots = slots[day];
      if (!Array.isArray(daySlots)) continue;

      for (const slot of daySlots) {
        const { startTime, endTime } = slot;
        if (startTime && endTime) {
          toCreateRecurring.push({
            rangeId: range.id,
            weekDay: day.toUpperCase() as WeekDay,
            startTime,
            endTime,
          });
        }
      }
    }

    await prisma.recurringSlot.createMany({ data: toCreateRecurring });

    // 3. Generate WorkingSlots from RecurringSlots
    const allSlots = await prisma.recurringSlot.findMany({
      where: { rangeId: range.id },
    });

    const generatedWorkingSlots: any[] = [];
    const start = new Date(startDate);
    const end = new Date(endDate);

    for (
      let date = new Date(start);
      date <= end;
      date.setDate(date.getDate() + 1)
    ) {
      const weekday = date
        .toLocaleDateString("en-US", {
          weekday: "long",
        })
        .toUpperCase();

      for (const slot of allSlots) {
        if (slot.weekDay === weekday) {
          generatedWorkingSlots.push({
            employeeId,
            date: new Date(date),
            startTime: slot.startTime,
            endTime: slot.endTime,
          });
        }
      }
    }

    await prisma.workingSlot.createMany({ data: generatedWorkingSlots });

    return sendSuccessResponse(res, {
      message: "Working hour range created successfully",
      rangeId: range.id,
      slotsCreated: toCreateRecurring.length,
      workingSlotsGenerated: generatedWorkingSlots.length,
    });
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error", 500);
  }
};

export const deleteWorkingHourRange = async (req: Request, res: Response) => {
  try {
    const employeeId = Number(req.params.employeeId);
    const rangeId = Number(req.params.rangeId);

    if (isNaN(employeeId) || isNaN(rangeId)) {
      return sendErrorResponse(res, "Invalid ID(s)", 400);
    }

    const range = await prisma.workingHourRange.findUnique({
      where: { id: rangeId },
    });

    if (!range || range.employeeId !== employeeId) {
      return sendErrorResponse(res, "Working hour range not found", 404);
    }

    await prisma.recurringSlot.deleteMany({
      where: { rangeId },
    });

    await prisma.workingSlot.deleteMany({
      where: {
        employeeId,
        date: {
          gte: range.startDate,
          lte: range.endDate,
        },
      },
    });

    await prisma.workingHourRange.delete({
      where: { id: rangeId },
    });

    return sendSuccessResponse(res, {
      message: "Working hour range deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error");
  }
};

export const editWorkingHourRange = async (req: Request, res: Response) => {
  try {
    const employeeId = Number(req.params.employeeId);
    const rangeId = Number(req.params.rangeId);
    const { startDate, endDate, slots } = req.body;

    if (!startDate || !endDate || typeof slots !== "object") {
      return sendErrorResponse(res, "Invalid input data", 400);
    }

    const range = await prisma.workingHourRange.findUnique({
      where: { id: rangeId },
    });

    if (!range || range.employeeId !== employeeId) {
      return sendErrorResponse(res, "Working hour range not found", 404);
    }

    await prisma.workingHourRange.update({
      where: { id: rangeId },
      data: {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
    });

    await prisma.recurringSlot.deleteMany({
      where: { rangeId },
    });

    const toCreate: any[] = [];

    for (const day in slots) {
      const daySlots = slots[day];
      if (!Array.isArray(daySlots)) continue;

      for (const { startTime, endTime } of daySlots) {
        if (startTime && endTime) {
          toCreate.push({
            rangeId,
            weekDay: day.toUpperCase() as WeekDay,
            startTime,
            endTime,
          });
        }
      }
    }

    if (toCreate.length > 0) {
      await prisma.recurringSlot.createMany({ data: toCreate });
    }

    return sendSuccessResponse(res, {
      message: "Working hour range updated successfully",
      updatedSlots: toCreate.length,
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error");
  }
};
