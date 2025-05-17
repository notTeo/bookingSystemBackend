import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { PrismaClient } from "../generated/prisma";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";

const prisma = new PrismaClient();

export const createBarber = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    if (!email || !password || !name) {
      return sendErrorResponse(res, "All fields are required", 400);
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return sendErrorResponse(res, "Email already exists", 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newBarber = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        role: "EMPLOYEE",
      },
    });

    return sendSuccessResponse(res, {
      message: "Barber created successfully",
      barberId: newBarber.id,
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error");
  }
};

export const deleteBarber = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const barberId = Number(req.params.id);

    if (isNaN(barberId)) {
      return sendErrorResponse(res, "Invalid barber ID", 400);
    }

    const barber = await prisma.user.findUnique({ where: { id: barberId } });

    if (!barber || barber.role !== "EMPLOYEE") {
      return sendErrorResponse(res, "Barber not found or not deletable", 404);
    }

    await prisma.service.deleteMany({
      where: {
        createdById: barberId,
      },
    });

    await prisma.barberService.deleteMany({
      where: {
        barberId,
      },
    });

    await prisma.workingSlot.deleteMany({
      where: {
        barberId,
      },
    });

    const ranges = await prisma.workingHourRange.findMany({
      where: {
        barberId,
      },
      select: { id: true }
    });

    const rangeIds = ranges.map((r) => r.id);

    await prisma.recurringSlot.deleteMany({
      where: {
        rangeId: { in: rangeIds },
      },
    });

    await prisma.workingHourRange.deleteMany({
      where: {
        barberId,
      },
    });

    await prisma.booking.deleteMany({
      where: {
        barberId,
      },
    });

    await prisma.user.delete({ where: { id: barberId } });

    return sendSuccessResponse(res, { message: "Barber deleted successfully" });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error");
  }
};

export const updateBarber = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const barberId = Number(req.params.id);
    const { name, email, password } = req.body;

    if (isNaN(barberId)) {
      return sendErrorResponse(res, "Invalid barber ID", 400);
    }

    const barber = await prisma.user.findUnique({ where: { id: barberId } });

    if (!barber || barber.role !== "EMPLOYEE") {
      return sendErrorResponse(res, "Barber not found or not editable", 404);
    }

    const updateData: any = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;

    if (password) {
      const bcrypt = await import("bcryptjs");
      updateData.hashedPassword = await bcrypt.hash(password, 10);
    }

    const updatedBarber = await prisma.user.update({
      where: { id: barberId },
      data: updateData,
    });

    return sendSuccessResponse(res, {
      message: "Barber updated successfully",
      barber: {
        id: updatedBarber.id,
        name: updatedBarber.name,
        email: updatedBarber.email,
      },
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error");
  }
};

export const toggleBarberActiveStatus = async (req: Request, res: Response) => {
  try {
    const barberId = Number(req.params.id);
    const { isActive } = req.body;

    if (isNaN(barberId) || typeof isActive !== 'boolean') {
      return sendErrorResponse(res, 'Invalid input', 400);
    }

    const barber = await prisma.user.findUnique({ where: { id: barberId } });

    if (!barber || barber.role !== 'EMPLOYEE') {
      return sendErrorResponse(res, 'Barber not found', 404);
    }

    await prisma.user.update({
      where: { id: barberId },
      data: { isActive },
    });

    return sendSuccessResponse(res, { message: `Barber is now ${isActive ? 'active' : 'inactive'}` });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, 'Server error');
  }
};

export const getAllBarbers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    
    const barbers = await prisma.user.findMany({
      where: { role: 'EMPLOYEE', isActive: true },
      include: {
        services: {
          include: { service: true }
        },
        workingHourRanges: {
          include: {
            slots: true
          },
          orderBy: {
            startDate: 'asc'
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
    

    const result = barbers.map((barber) => {
      const services = barber.services.map((bs) => bs.service);
    
      const workingSchedule = barber.workingHourRanges.map((range) => {
        const slots = range.slots.reduce((acc, slot) => {
          if (!acc[slot.weekDay]) acc[slot.weekDay] = [];
          acc[slot.weekDay].push({
            startTime: slot.startTime,
            endTime: slot.endTime
          });
          return acc;
        }, {
          MONDAY: [],
          TUESDAY: [],
          WEDNESDAY: [],
          THURSDAY: [],
          FRIDAY: [],
          SATURDAY: [],
          SUNDAY: []
        } as Record<string, { startTime: string; endTime: string }[]>);
    
        return {
          id: range.id,
          startDate: range.startDate.toISOString().split('T')[0],
          endDate: range.endDate.toISOString().split('T')[0],
          slots
        };
      });
    
      return {
        id: barber.id,
        name: barber.name,
        email: barber.email,
        createdAt: barber.createdAt,
        services,
        workingSchedule
      };
    });
    return sendSuccessResponse(res, result);
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error");
  }
};

export const getBarberById = async (req: Request, res: Response) => {
  try {
    const barberId = Number(req.params.id);

    const barber = await prisma.user.findUnique({
      where: { id: barberId },
      include: {
        services: {
          include: { service: true }
        },
        workingHourRanges: {
          include: {
            slots: true
          },
          orderBy: {
            startDate: 'asc'
          }
        }
      }
    });

    if (!barber) {
      return sendErrorResponse(res, 'Barber not found', 404);
    }

    const services = barber.services.map(bs => ({
      id: bs.service.id,
      name: bs.service.name,
      duration: bs.service.duration,
      price: bs.service.price
    }));

    const workingSchedule = barber.workingHourRanges.map(range => {
      const groupedSlots: Record<string, { startTime: string, endTime: string }[]> = {
        MONDAY: [],
        TUESDAY: [],
        WEDNESDAY: [],
        THURSDAY: [],
        FRIDAY: [],
        SATURDAY: [],
        SUNDAY: []
      };

      for (const slot of range.slots) {
        groupedSlots[slot.weekDay].push({
          startTime: slot.startTime,
          endTime: slot.endTime
        });
      }

      return {
        id: range.id,
        startDate: range.startDate.toISOString().split('T')[0],
        endDate: range.endDate.toISOString().split('T')[0],
        slots: groupedSlots
      };
    });

    return sendSuccessResponse(res, {
      id: barber.id,
      name: barber.name,
      email: barber.email,
      services,
      workingSchedule
    });
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, 'Server error', 500);
  }
};

export const assignServicesToBarber = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const barberId = Number(req.params.barberId);
    const { serviceIds } = req.body;

    if (isNaN(barberId)) {
      return sendErrorResponse(res, "Invalid barber ID", 400);
    }

    if (!Array.isArray(serviceIds) || serviceIds.length === 0) {
      return sendErrorResponse(
        res,
        "Service IDs must be a non-empty array",
        400
      );
    }
    const barber = await prisma.user.findUnique({ where: { id: barberId } });

    if (!barber || barber.role !== "EMPLOYEE") {
      return sendErrorResponse(res, "Barber not found or not eligible", 404);
    }

    const validServices = await prisma.service.findMany({
      where: { id: { in: serviceIds } },
      select: { id: true },
    });

    const validIds = validServices.map((s) => s.id);
    const invalidIds = serviceIds.filter((id) => !validIds.includes(id));

    if (invalidIds.length > 0) {
      return sendErrorResponse(
        res,
        `Invalid service IDs: ${invalidIds.join(", ")}`,
        400
      );
    }

    await prisma.barberService.deleteMany({
      where: { barberId },
    });

    await prisma.barberService.createMany({
      data: serviceIds.map((serviceId) => ({
        barberId,
        serviceId,
      })),
    });

    return sendSuccessResponse(res, {
      message: "Services assigned to barber successfully",
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error");
  }
};

export const removeServiceFromBarber = async (req: Request, res: Response): Promise<void> => {
  try {
    const barberId = Number(req.params.barberId);
    const serviceId = Number(req.params.serviceId);

    if (isNaN(barberId) || isNaN(serviceId)) {
      return sendErrorResponse(res, 'Invalid barber or service ID', 400);
    }

    const relation = await prisma.barberService.findUnique({
      where: {
        barberId_serviceId: {
          barberId,
          serviceId,
        },
      },
    });

    if (!relation) {
      return sendErrorResponse(res, 'Service not assigned to this barber', 404);
    }

    await prisma.barberService.delete({
      where: {
        barberId_serviceId: {
          barberId,
          serviceId,
        },
      },
    });

    return sendSuccessResponse(res, { message: 'Service removed from barber successfully' });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, 'Server error');
  }
};
