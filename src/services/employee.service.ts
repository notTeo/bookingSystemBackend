import { addMinutes } from "date-fns";
import bcrypt from "bcryptjs";
import { PrismaClient } from "../generated/prisma";
import { AppError } from "../utils/errors";

const prisma = new PrismaClient();

interface UpdateEmployeeInput {
  employeeId: number;
  shopId: number;
  name?: string;
  email?: string;
  password?: string;
}
interface ToggleEmployeeStatusInput {
  employeeId: number;
  shopId: number;
  isActive: boolean;
}

interface AssignServicesInput {
  employeeId: number;
  shopId: number;
  serviceIds: number[];
}

export const createEmployeeService = async (
  shopId: number,
  name: string,
  email: string,
  password: string
) => {
  if (!email || !password || !name) {
    throw new AppError("All fields are required", 400);
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    throw new AppError("Email already exists", 409);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newEmployee = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
      role: "EMPLOYEE",
      shopId,
    },
  });

  return {
    message: "Employee created successfully",
    employeeId: newEmployee.id,
  };
};

export const deleteEmployeeService = async (
  shopId: number,
  employeeId: number
) => {
  if (isNaN(employeeId)) {
    throw new AppError("Invalid employee ID", 400);
  }

  const employee = await prisma.user.findUnique({
    where: { id: employeeId },
  });

  if (!employee || employee.role !== "EMPLOYEE") {
    throw new AppError("Employee not found or not deletable", 404);
  }

  if (employee.shopId !== shopId) {
    throw new AppError("Unauthorized shop access", 403);
  }

  await prisma.service.deleteMany({ where: { createdById: employeeId } });

  await prisma.employeeService.deleteMany({ where: { employeeId } });

  await prisma.workingSlot.deleteMany({ where: { employeeId } });

  const ranges = await prisma.workingHourRange.findMany({
    where: { employeeId },
    select: { id: true },
  });

  const rangeIds = ranges.map((r) => r.id);

  await prisma.recurringSlot.deleteMany({
    where: { rangeId: { in: rangeIds } },
  });

  await prisma.workingHourRange.deleteMany({ where: { employeeId } });

  await prisma.booking.deleteMany({ where: { employeeId } });

  await prisma.user.delete({ where: { id: employeeId } });

  return { message: "Employee deleted successfully" };
};

export const updateEmployeeService = async ({
  employeeId,
  shopId,
  name,
  email,
  password,
}: UpdateEmployeeInput) => {
  if (isNaN(employeeId)) {
    throw new AppError("Invalid employee ID", 400);
  }

  const employee = await prisma.user.findUnique({ where: { id: employeeId } });

  if (!employee || employee.role !== "EMPLOYEE") {
    throw new AppError("Employee not found or not editable", 404);
  }

  if (employee.shopId !== shopId) {
    throw new AppError("Unauthorized shop access", 403);
  }

  const updateData: any = {};
  if (name) updateData.name = name;
  if (email) updateData.email = email;
  if (password) {
    updateData.hashedPassword = await bcrypt.hash(password, 10);
  }

  const updated = await prisma.user.update({
    where: { id: employeeId },
    data: updateData,
  });

  return {
    message: "Employee updated successfully",
    barber: {
      id: updated.id,
      name: updated.name,
      email: updated.email,
    },
  };
};

export const toggleEmployeeActiveStatusService = async ({
  employeeId,
  shopId,
  isActive,
}: ToggleEmployeeStatusInput) => {
  if (!shopId || isNaN(shopId)) {
    throw new AppError("Invalid shop ID", 400);
  }

  if (isNaN(employeeId) || typeof isActive !== "boolean") {
    throw new AppError("Invalid input", 400);
  }

  const employee = await prisma.user.findUnique({
    where: { id: employeeId },
  });

  if (!employee || employee.role !== "EMPLOYEE") {
    throw new AppError("Employee not found", 404);
  }

  if (employee.shopId !== shopId) {
    throw new AppError("Unauthorized shop access", 403);
  }

  await prisma.user.update({
    where: { id: employeeId },
    data: { isActive },
  });

  return {
    message: `Employee is now ${isActive ? "active" : "inactive"}`,
  };
};

export const getEmployeeByIdService = async (
  shopId: number,
  employeeId: number
) => {
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
    throw new AppError("Employee not found or unauthorized", 404);
  }

  const services = employee.services.map((bs) => ({
    id: bs.service.id,
    name: bs.service.name,
    duration: bs.service.duration,
    price: bs.service.price,
  }));

  const workingSchedule = employee.workingHourRanges.map((range) => {
    const groupedSlots: Record<
      string,
      { startTime: string; endTime: string }[]
    > = {
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

  return {
    id: employee.id,
    name: employee.name,
    email: employee.email,
    services,
    workingSchedule,
  };
};

export const assignServicesToEmployeeService = async ({
  employeeId,
  shopId,
  serviceIds,
}: AssignServicesInput) => {
  if (isNaN(employeeId)) {
    throw new AppError("Invalid employee ID", 400);
  }

  if (!Array.isArray(serviceIds) || serviceIds.length === 0) {
    throw new AppError("Service IDs must be a non-empty array", 400);
  }

  const employee = await prisma.user.findUnique({
    where: { id: employeeId },
    select: { id: true, role: true, shopId: true },
  });

  if (!employee || employee.role !== "EMPLOYEE" || employee.shopId !== shopId) {
    throw new AppError("Employee not found or unauthorized", 404);
  }

  const validServices = await prisma.service.findMany({
    where: {
      id: { in: serviceIds },
      shopId,
    },
    select: { id: true },
  });

  const validIds = validServices.map((s) => s.id);
  const invalidIds = serviceIds.filter((id) => !validIds.includes(id));

  if (invalidIds.length > 0) {
    throw new AppError(
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

  return {
    message: "Services assigned to employee successfully",
  };
};

export const removeServiceFromEmployeeService = async (
    shopId: number,
    employeeId: number,
    serviceId: number
  ) => {
    if (isNaN(employeeId) || isNaN(serviceId)) {
      throw new AppError("Invalid employee or service ID", 400);
    }
  
    const employee = await prisma.user.findUnique({
      where: { id: employeeId },
      select: { id: true, role: true, shopId: true },
    });
  
    if (!employee || employee.role !== "EMPLOYEE" || employee.shopId !== shopId) {
      throw new AppError("Unauthorized or invalid employee", 403);
    }
  
    const service = await prisma.service.findUnique({
      where: { id: serviceId },
      select: { id: true, shopId: true },
    });
  
    if (!service || service.shopId !== shopId) {
      throw new AppError("Service not found or not in current shop", 404);
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
      throw new AppError("Service not assigned to this employee", 404);
    }
  
    await prisma.employeeService.delete({
      where: {
        employeeId_serviceId: {
          employeeId,
          serviceId,
        },
      },
    });
  
    return {
      message: "Service removed from employee successfully",
    };
  };