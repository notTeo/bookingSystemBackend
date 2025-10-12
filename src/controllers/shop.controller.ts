import { createShopService } from "../services/shop.service";
import { sendSuccessResponse, sendErrorResponse } from "../utils/responses";
import { Request, Response } from "express";

export const createShop = async (req: Request, res: Response): Promise<void> => {
  try {
    const ownerId = (req as any).user?.id;
    if (!ownerId) {
      return sendErrorResponse(res, "No user id in token", 401);
    }
    const { name, openingHours } = req.body;

    const shop = await createShopService(ownerId, name, openingHours);

    return sendSuccessResponse(res, {
      message: "Shop info:",
      data: shop,
    });
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};