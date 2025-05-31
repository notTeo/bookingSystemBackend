import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";
import { getShopId, getUserId } from "../utils/getIds";
import { createServiceService, deleteServiceService } from "../services/serviceService";

const prisma = new PrismaClient();

export const createService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shopId = getShopId(req);
    const userId = getUserId(req);
    const { name, duration, price } = req.body;

    const result = await createServiceService(
      shopId,
      userId,
      name,
      duration,
      price
    );
    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

export const deleteService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shopId = getShopId(req);
    const userId = getUserId(req);
    const serviceId = Number(req.params.serviceId);

    const result = await deleteServiceService(shopId, userId, serviceId);
    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

