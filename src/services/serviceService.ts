import { PrismaClient } from "../generated/prisma";
import { AppError } from "../utils/errors";

const prisma = new PrismaClient();


export const createServiceService = async (
  shopId: number,
  userId: number,
  name: string,
  duration: number,
  price: number
) => {
  if (!name || !duration || !price) {
    throw new AppError("Missing fields", 400);
  }

  const shop = await prisma.shop.findUnique({ where: { id: shopId } });
  if (!shop) {
    throw new AppError("Shop not found", 404);
  }

  const service = await prisma.service.create({
    data: {
      name,
      duration,
      price,
      createdById: userId,
      shopId,
    },
  });

  return {
    message: "Service created successfully",
    serviceId: service.id,
  };
};

export const deleteServiceService = async (
  shopId: number,
  userId: number,
  serviceId: number
) => {
  if (isNaN(serviceId)) {
    throw new AppError("Invalid service ID", 400);
  }

  const service = await prisma.service.findFirst({
    where: { id: serviceId, shopId },
  });

  if (!service) {
    throw new AppError("Service not found", 404);
  }

  if (service.createdById !== userId) {
    throw new AppError("You are not authorized to delete this service", 403);
  }

  await prisma.employeeService.deleteMany({ where: { serviceId } });
  await prisma.service.delete({ where: { id: serviceId } });

  return {
    message: "Service deleted successfully",
    serviceId,
  };
};

