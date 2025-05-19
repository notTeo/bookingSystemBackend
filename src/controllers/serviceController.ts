import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import { sendErrorResponse, sendSuccessResponse } from '../utils/responses';

const prisma = new PrismaClient();

export const createService = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, duration, price } = req.body;

    if (!name || !duration || !price) {
      return sendErrorResponse(res, 'Missing fields', 400);
    }

    const service = await prisma.service.create({
      data: {
        name,
        duration,
        price,
        createdById: (req as any).user.userId,
      },
    });

    return sendSuccessResponse(res, {
      message: 'Service created successfully',
      serviceId: service.id,
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, 'Server error');
  }
};

export const deleteService = async (req: Request, res: Response): Promise<void> => {
  try {
    const serviceId = Number(req.params.serviceId);

    if (isNaN(serviceId)) {
      return sendErrorResponse(res, 'Invalid service ID', 400);
    }

    const service = await prisma.service.findUnique({
      where: { id: serviceId },
    });

    if (!service) {
      return sendErrorResponse(res, 'Service not found', 404);
    }

    if (service.createdById !== (req as any).user.userId) {
      return sendErrorResponse(res, 'You are not authorized to delete this service', 403);
    }

    await prisma.employeeService.deleteMany({
      where: { serviceId }
    });

    await prisma.service.delete({
      where: { id: serviceId }
    });

    return sendSuccessResponse(res, {
      message: 'Service deleted successfully',
      serviceId
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, 'Server error', 500);
  }
};

export const getAllServices = async (req: Request, res: Response): Promise<void> => {
  try {
    const services = await prisma.service.findMany({
      select: {
        id: true,
        name: true,
        duration: true,
        price: true,
      },
      orderBy: { name: 'asc' },
    });

    return sendSuccessResponse(res, services);
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, 'Server error');
  }
};
