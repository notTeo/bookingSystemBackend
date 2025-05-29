import { Request, Response } from "express";
import { PrismaClient, BookingStatus } from "../generated/prisma";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";
import { getShopId } from "../utils/getIds";
import {
  cancelBookingService,
  completeBookingService,
  confirmBookingService,
  createBookingByOwnerService,
  createCustomerBookingService,
  getAvailableSlotsService,
} from "../services/bookingService";
import { AppError } from "../utils/errors";

const prisma = new PrismaClient();

export const getAvailableSlots = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shopId = getShopId(req);
    const employeeId = Number(req.params.employeeId);
    const { date, serviceId } = req.query;

    if (!shopId || !date || isNaN(employeeId) || isNaN(Number(serviceId))) {
      return sendErrorResponse(res, "Invalid input", 400);
    }

    const result = await getAvailableSlotsService({
      shopId,
      employeeId,
      serviceId: Number(serviceId),
      date: date as string,
    });

    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

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

export const createBookingByCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shopId = getShopId(req);
    const { employeeId, serviceId, date, time, customer } = req.body;

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

    const result = await createCustomerBookingService({
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

export const cancelBooking = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shopId = getShopId(req);
    const bookingId = Number(req.params.bookingId);

    if (isNaN(bookingId)) {
      return sendErrorResponse(res, "Invalid booking ID", 400);
    }

    const result = await cancelBookingService(shopId, bookingId);

    return sendSuccessResponse(res, {
      message: "Booking canceled successfully",
      bookingId: result,
    });
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

export const confirmBooking = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shopId = getShopId(req);
    const bookingId = Number(req.params.bookingId);


    if (isNaN(bookingId)) {
      return sendErrorResponse(res, "Invalid booking ID", 400);
    }

    const result = await confirmBookingService(shopId, bookingId);

    return sendSuccessResponse(res, {
      message: "Booking confirmed successfully",
      bookingId: result,
    });
  } catch (error: any) {
    const status = error instanceof AppError ? error.statusCode : 500;
    return sendErrorResponse(res, error.message || "Server error", status);
  }
};

export const completeBooking = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shopId = getShopId(req);
    const bookingId = Number(req.params.bookingId);

    if (isNaN(bookingId)) {
      return sendErrorResponse(res, "Invalid booking ID", 400);
    }

    const result = await completeBookingService(shopId, bookingId);

    return sendSuccessResponse(res, {
      message: "Booking completed successfully",
      bookingId: result,
    });
  } catch (error: any) {
    const status = error instanceof AppError ? error.statusCode : 500;
    return sendErrorResponse(res, error.message || "Server error", status);
  }
};
