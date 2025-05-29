import { PrismaClient, WeekDay } from "../generated/prisma";
import { AppError } from "../utils/errors";

const prisma = new PrismaClient();

export const createWorkingHourRangeService = async (
  shopId: number,
  employeeId: number,
  body: any
) => {
  const { startDate, endDate, slots } = body;
  if (!startDate || !endDate || typeof slots !== "object") {
    throw new AppError("Invalid input", 400);
  }

  const employee = await prisma.user.findUnique({ where: { id: employeeId, shopId } });
  if (!employee || employee.shopId !== shopId) {
    throw new AppError("Unauthorized employee access", 403);
  }

  const start = new Date(startDate);
  const end = new Date(endDate);

  const range = await prisma.workingHourRange.create({
    data: { employeeId, startDate: start, endDate: end },
  });

  const toCreateRecurring = [];
  for (const day in slots) {
    const daySlots = slots[day];
    if (!Array.isArray(daySlots)) continue;
    for (const { startTime, endTime, onlyInStore } of daySlots) {
      if (startTime && endTime) {
        toCreateRecurring.push({
          rangeId: range.id,
          weekDay: day.toUpperCase() as WeekDay,
          startTime,
          endTime,
          onlyInStore: !!onlyInStore,
        });
      }
    }
  }

  await prisma.recurringSlot.createMany({ data: toCreateRecurring });

  const allSlots = await prisma.recurringSlot.findMany({ where: { rangeId: range.id } });
  const generatedWorkingSlots = [];

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const weekday = d.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();
    for (const slot of allSlots) {
      if (slot.weekDay === weekday) {
        generatedWorkingSlots.push({
          employeeId,
          date: new Date(d),
          startTime: slot.startTime,
          endTime: slot.endTime,
          onlyInStore: slot.onlyInStore,
          shopId,
        });
      }
    }
  }

  await prisma.workingSlot.createMany({ data: generatedWorkingSlots });

  return {
    message: "Working hour range created successfully",
    rangeId: range.id,
    slotsCreated: toCreateRecurring.length,
    workingSlotsGenerated: generatedWorkingSlots.length,
  };
};

export const deleteWorkingHourRangeService = async (
  shopId: number,
  employeeId: number,
  rangeId: number
) => {
  const employee = await prisma.user.findUnique({ where: { id: employeeId, shopId } });
  if (!employee || employee.shopId !== shopId) {
    throw new AppError("Unauthorized access to employee", 403);
  }

  const range = await prisma.workingHourRange.findUnique({ where: { id: rangeId } });
  if (!range || range.employeeId !== employeeId) {
    throw new AppError("Working hour range not found", 404);
  }

  await prisma.recurringSlot.deleteMany({ where: { rangeId } });
  await prisma.workingSlot.deleteMany({
    where: {
      employeeId,
      shopId,
      date: { gte: range.startDate, lte: range.endDate },
    },
  });
  await prisma.workingHourRange.delete({ where: { id: rangeId } });

  return { message: "Working hour range deleted successfully" };
};

export const editWorkingHourRangeService = async (
  shopId: number,
  employeeId: number,
  rangeId: number,
  body: any
) => {
  const { startDate, endDate, slots } = body;
  if (!startDate || !endDate || typeof slots !== "object") {
    throw new AppError("Invalid input data", 400);
  }

  const employee = await prisma.user.findUnique({ where: { id: employeeId, shopId } });
  if (!employee || employee.shopId !== shopId) {
    throw new AppError("Unauthorized access to employee", 403);
  }

  const range = await prisma.workingHourRange.findUnique({ where: { id: rangeId } });
  if (!range || range.employeeId !== employeeId) {
    throw new AppError("Working hour range not found", 404);
  }

  await prisma.workingHourRange.update({
    where: { id: rangeId },
    data: { startDate: new Date(startDate), endDate: new Date(endDate) },
  });

  await prisma.recurringSlot.deleteMany({ where: { rangeId } });

  const toCreate = [];
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
  if (toCreate.length > 0) await prisma.recurringSlot.createMany({ data: toCreate });

  return {
    message: "Working hour range updated successfully",
    updatedSlots: toCreate.length,
  };
};

export const cloneWorkingHourRangeService = async (
  shopId: number,
  employeeId: number,
  rangeId: number,
  body: any
) => {
  const { startDate, endDate } = body;
  if (!startDate || !endDate) throw new AppError("Missing dates", 400);

  const employee = await prisma.user.findUnique({
    where: { id: employeeId, shopId },
    include: {
      workingHourRanges: { include: { slots: true }, orderBy: { startDate: "asc" } },
    },
  });

  if (!employee || employee.shopId !== shopId) {
    throw new AppError("Unauthorized access to employee", 403);
  }

  const toCloneRange = employee.workingHourRanges.find((r) => r.id === rangeId);
  if (!toCloneRange) throw new AppError("Range to clone not found", 404);

  const start = new Date(startDate);
  const end = new Date(endDate);

  const newRange = await prisma.workingHourRange.create({
    data: { employeeId, startDate: start, endDate: end },
  });

  const toCreateRecurring = toCloneRange.slots.map((slot) => ({
    rangeId: newRange.id,
    weekDay: slot.weekDay,
    startTime: slot.startTime,
    endTime: slot.endTime,
    onlyInStore: slot.onlyInStore ?? false,
  }));

  await prisma.recurringSlot.createMany({ data: toCreateRecurring });

  const allSlots = await prisma.recurringSlot.findMany({ where: { rangeId: newRange.id } });
  const generatedWorkingSlots = [];

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const weekday = d.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();
    for (const slot of allSlots) {
      if (slot.weekDay === weekday) {
        generatedWorkingSlots.push({
          employeeId,
          date: new Date(d),
          startTime: slot.startTime,
          endTime: slot.endTime,
          onlyInStore: slot.onlyInStore,
          shopId,
        });
      }
    }
  }

  await prisma.workingSlot.createMany({ data: generatedWorkingSlots });

  return {
    message: "Working hour range cloned successfully",
    rangeId: newRange.id,
    slotsCloned: toCreateRecurring.length,
    workingSlotsGenerated: generatedWorkingSlots.length,
  };
};
