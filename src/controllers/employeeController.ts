import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { PrismaClient } from "../generated/prisma";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";

const prisma = new PrismaClient();

export const createEmployee = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    const shopId = (req as any).shop.id;

    if (!email || !password || !name) {
      return sendErrorResponse(res, "All fields are required", 400);
    }

    if (!shopId || isNaN(shopId)) {
      return sendErrorResponse(res, "invalid shop ID", 400);
    }

    const shop = await prisma.shop.findUnique({
      where: { id: shopId },
    });
    
    if (!shop) {
      return sendErrorResponse(res, "Shop not found", 404);
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return sendErrorResponse(res, "Email already exists", 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newEmployee = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        role: "EMPLOYEE",
        shopId
      },
    });

    return sendSuccessResponse(res, {
      message: "Employee created successfully",
      employeeId: newEmployee.id,
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error");
  }
};

export const deleteEmployee = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const employeeId = Number(req.params.employeeId);
    const shopId = (req as any).shop.id;

    if (!shopId || isNaN(shopId)) {
      return sendErrorResponse(res, "Invalid shop ID", 400);
    }

    if (isNaN(employeeId)) {
      return sendErrorResponse(res, "Invalid employee ID", 400);
    }

    const employee = await prisma.user.findUnique({
      where: { id: employeeId, shopId },
    });

    if (!employee || employee.role !== "EMPLOYEE") {
      return sendErrorResponse(
        res,
        "EmployeeId not found or not deletable",
        404
      );
    }

    if ((employee as any).shopId !== shopId) {
      return sendErrorResponse(res, "Unauthorized shop access", 403);
    }

    await prisma.service.deleteMany({
      where: {
        createdById: employeeId,
      },
    });

    await prisma.employeeService.deleteMany({
      where: {
        employeeId,
      },
    });

    await prisma.workingSlot.deleteMany({
      where: {
        employeeId,
      },
    });

    const ranges = await prisma.workingHourRange.findMany({
      where: {
        employeeId,
      },
      select: { id: true },
    });

    const rangeIds = ranges.map((r) => r.id);

    await prisma.recurringSlot.deleteMany({
      where: {
        rangeId: { in: rangeIds },
      },
    });

    await prisma.workingHourRange.deleteMany({
      where: {
        employeeId,
      },
    });

    await prisma.booking.deleteMany({
      where: {
        employeeId,
      },
    });

    await prisma.user.delete({ where: { id: employeeId } });

    return sendSuccessResponse(res, {
      message: "Employee deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error");
  }
};

export const updateEmployee = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shopId = (req as any).shop.id;
    const employeeId = Number(req.params.employeeId);
    const { name, email, password } = req.body;

    if (!shopId || isNaN(shopId)) {
      return sendErrorResponse(res, "Invalid shop ID", 400);
    }

    if (isNaN(employeeId)) {
      return sendErrorResponse(res, "Invalid employee ID", 400);
    }

    const employee = await prisma.user.findUnique({
      where: { id: employeeId },
    });

    if (!employee || employee.role !== "EMPLOYEE") {
      return sendErrorResponse(res, "Employee not found or not editable", 404);
    }

    if ((employee as any).shopId !== shopId) {
      return sendErrorResponse(res, "Unauthorized shop access", 403);
    }

    const updateData: any = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;

    if (password) {
      const bcrypt = await import("bcryptjs");
      updateData.hashedPassword = await bcrypt.hash(password, 10);
    }

    const updatedEmployee = await prisma.user.update({
      where: { id: employeeId },
      data: updateData,
    });

    return sendSuccessResponse(res, {
      message: "Employee updated successfully",
      barber: {
        id: updatedEmployee.id,
        name: updatedEmployee.name,
        email: updatedEmployee.email,
      },
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error");
  }
};

export const toggleEmployeeActiveStatus = async (
  req: Request,
  res: Response
) => {
  try {
    const shopId = (req as any).shop.id;
    const employeeId = Number(req.params.employeeId);
    const { isActive } = req.body;

    if (!shopId || isNaN(shopId)) {
      return sendErrorResponse(res, "Invalid shop ID", 400);
    }


    if (isNaN(employeeId) || typeof isActive !== "boolean") {
      return sendErrorResponse(res, "Invalid input", 400);
    }

    const employee = await prisma.user.findUnique({ where: { id: employeeId } });

    if (!employee || employee.role !== "EMPLOYEE") {
      return sendErrorResponse(res, "Employee not found", 404);
    }
    if ((employee as any).shopId !== shopId) {
      return sendErrorResponse(res, "Unauthorized shop access", 403);
    }

    await prisma.user.update({
      where: { id: employeeId },
      data: { isActive },
    });

    return sendSuccessResponse(res, {
      message: `Employee is now ${isActive ? "active" : "inactive"}`,
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error");
  }
};

export const getAllEmployees = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {

    const shopId = (req as any).shop.id;
    const employees = await prisma.user.findMany({
      where: { role: "EMPLOYEE", isActive: true, shopId },
      include: {
        services: {
          include: { service: true },
        },
        workingHourRanges: {
          include: {
            slots: true,
          },
          orderBy: {
            startDate: "asc",
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    const result = employees.map((employee) => {
      const services = employee.services.map((bs) => bs.service);

      const workingSchedule = employee.workingHourRanges.map((range) => {
        const slots = range.slots.reduce(
          (acc, slot) => {
            if (!acc[slot.weekDay]) acc[slot.weekDay] = [];
            acc[slot.weekDay].push({
              startTime: slot.startTime,
              endTime: slot.endTime,
            });
            return acc;
          },
          {
            MONDAY: [],
            TUESDAY: [],
            WEDNESDAY: [],
            THURSDAY: [],
            FRIDAY: [],
            SATURDAY: [],
            SUNDAY: [],
          } as Record<string, { startTime: string; endTime: string }[]>
        );

        return {
          id: range.id,
          startDate: range.startDate.toISOString().split("T")[0],
          endDate: range.endDate.toISOString().split("T")[0],
          slots,
        };
      });

      return {
        id: employee.id,
        name: employee.name,
        email: employee.email,
        createdAt: employee.createdAt,
        services,
        workingSchedule,
      };
    });
    return sendSuccessResponse(res, result);
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error");
  }
};

export const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const shopId = (req as any).shop.id;
    const employeeId = Number(req.params.employeeId);

    if (!shopId || isNaN(shopId)) {
      return sendErrorResponse(res, "Invalid shop ID", 400);
    }

    if (isNaN(employeeId)) {
      return sendErrorResponse(res, "Invalid employee ID", 400);
    }

    const employee = await prisma.user.findUnique({
      where: { id: employeeId },
      include: {
        services: {
          include: { service: true },
        },
        workingHourRanges: {
          include: {
            slots: true,
          },
          orderBy: {
            startDate: "asc",
          },
        },
      },
    });

    if (!employee || employee.role !== "EMPLOYEE" || employee.shopId !== shopId) {
      return sendErrorResponse(res, "Employee not found or unauthorized", 404);
    }

    const services = employee.services.map((bs) => ({
      id: bs.service.id,
      name: bs.service.name,
      duration: bs.service.duration,
      price: bs.service.price,
    }));

    const workingSchedule = employee.workingHourRanges.map((range) => {
      const groupedSlots: Record<string, { startTime: string; endTime: string }[]> = {
        MONDAY: [],
        TUESDAY: [],
        WEDNESDAY: [],
        THURSDAY: [],
        FRIDAY: [],
        SATURDAY: [],
        SUNDAY: [],
      };

      for (const slot of range.slots) {
        groupedSlots[slot.weekDay].push({
          startTime: slot.startTime,
          endTime: slot.endTime,
        });
      }

      return {
        id: range.id,
        startDate: range.startDate.toISOString().split("T")[0],
        endDate: range.endDate.toISOString().split("T")[0],
        slots: groupedSlots,
      };
    });

    return sendSuccessResponse(res, {
      id: employee.id,
      name: employee.name,
      email: employee.email,
      services,
      workingSchedule,
    });
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error", 500);
  }
};

export const assignServicesToEmployee = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const employeeId = Number(req.params.employeeId);
    const { serviceIds } = req.body;
    const shopId = (req as any).shop.id;

    if (!shopId || isNaN(shopId)) {
      return sendErrorResponse(res, "Invalid shop ID", 400);
    }

    if (isNaN(employeeId)) {
      return sendErrorResponse(res, "Invalid employee ID", 400);
    }

    if (!Array.isArray(serviceIds) || serviceIds.length === 0) {
      return sendErrorResponse(res, "Service IDs must be a non-empty array", 400);
    }

    const employee = await prisma.user.findUnique({
      where: { id: employeeId,  shopId },
      select: { id: true, role: true, shopId: true }
    });

    if (!employee || employee.role !== "EMPLOYEE" || employee.shopId !== shopId) {
      return sendErrorResponse(res, "Employee not found or unauthorized", 404);
    }

    const validServices = await prisma.service.findMany({
      where: {
        id: { in: serviceIds },
        shopId: shopId,
      },
      select: { id: true },
    });

    const validIds = validServices.map((s) => s.id);
    const invalidIds = serviceIds.filter((id) => !validIds.includes(id));

    if (invalidIds.length > 0) {
      return sendErrorResponse(
        res,
        `Invalid or unauthorized service IDs: ${invalidIds.join(", ")}`,
        400
      );
    }

    await prisma.employeeService.deleteMany({ where: { employeeId } });

    await prisma.employeeService.createMany({
      data: validIds.map((serviceId) => ({
        employeeId,
        serviceId,
      })),
    });

    return sendSuccessResponse(res, {
      message: "Services assigned to employee successfully",
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error");
  }
};


export const removeServiceFromEmployee = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const employeeId = Number(req.params.employeeId);
    const serviceId = Number(req.params.serviceId);
    const shopId = (req as any).shop.id;

    if (!shopId || isNaN(shopId)) {
      return sendErrorResponse(res, "Invalid shop ID", 400);
    }

    if (isNaN(employeeId)) {
      return sendErrorResponse(res, "Invalid service ID", 400);
    }

    const employee = await prisma.user.findUnique({
      where: { id: employeeId, shopId },
      select: { id: true, role: true, shopId: true }
    });

    if (!employee || employee.role !== "EMPLOYEE" || employee.shopId !== shopId) {
      return sendErrorResponse(res, "Unauthorized or invalid employee", 403);
    }

    const service = await prisma.service.findUnique({
      where: { id: serviceId },
      select: { id: true, shopId: true }
    });

    if (!service || service.shopId !== shopId) {
      return sendErrorResponse(res, "Service not found or not in current shop", 404);
    }

    const relation = await prisma.employeeService.findUnique({
      where: {
        employeeId_serviceId: {
          employeeId,
          serviceId,
        },
      },
    });

    if (!relation) {
      return sendErrorResponse(res, "Service not assigned to this employee", 404);
    }

    await prisma.employeeService.delete({
      where: {
        employeeId_serviceId: {
          employeeId,
          serviceId,
        },
      },
    });

    return sendSuccessResponse(res, {
      message: "Service removed from employee successfully",
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error");
  }
};



