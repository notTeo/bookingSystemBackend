import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";
import { getShopId, getUserId } from "../utils/getIds";
import {
  getMyEmployeesService,
  getMyServicesService,
  createBookingByOwnerService,
  getProfileService,
  updateProfileService,
  getShopProfileService,
  updateShopProfileService,
  getInventoryItemsService,
} from "../services/dashboardService";

const prisma = new PrismaClient();


// GET /dashboard/employees
export const getMyEmployees = async (req: Request, res: Response) => {
  try {
    const shopId = getShopId(req);
    const result = await getMyEmployeesService(shopId);

    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

// GET /dashboard/services
export const getMyServices = async (req: Request, res: Response) => {
  try {
    const shopId = getShopId(req);
    const result = await getMyServicesService(shopId);

    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

// POST /dashboard/bookings
export const createBookingByOwner = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { employeeId, serviceId, date, time, customer } = req.body;
    const shopId = getShopId(req);

    if (
      !employeeId ||
      !serviceId ||
      !date ||
      !time ||
      !customer?.name ||
      !customer?.phone
    ) {
      return sendErrorResponse(res, "Missing required fields", 400);
    }

    const result = await createBookingByOwnerService({
      shopId,
      employeeId,
      serviceId,
      date,
      time,
      customer,
    });

    return sendSuccessResponse(res, {
      message: "Booking created",
      bookingId: result.bookingId,
    });
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

// GET /dashboard/profile
export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req);
    const result = await getProfileService(userId);
    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

// PATCH /dashboard/profile
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req);
    const result = await updateProfileService(userId, req.body);
    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

// GET /dashboard/shop
export const getShopProfile = async (req: Request, res: Response) => {
  try {
    const shopId = getShopId(req);
    const result = await getShopProfileService(shopId);
    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

// PATCH /dashboard/shop
export const updateShopProfile = async (req: Request, res: Response) => {
  try {
    const shopId = getShopId(req);
    const result = await updateShopProfileService(shopId, req.body);
    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};
export const getInventoryItems = async (req: Request, res: Response) => {
  try {
    const shopId = getShopId(req);
    const result = await getInventoryItemsService(shopId);
    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};