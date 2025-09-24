import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";
import { getShopId } from "../utils/getIds";
import {
  createInventoryItemService,
  deleteInventoryItemService,
  updateInventoryItemService,
} from "../services/inventory.service";

const prisma = new PrismaClient();

export const createInventoryItem = async (req: Request, res: Response) => {
  try {
    const shopId = getShopId(req);
    const { name, quantity } = req.body;

    const result = await createInventoryItemService(shopId, name, quantity);
    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

export const updateInventoryItem = async (req: Request, res: Response) => {
  try {
    const shopId = getShopId(req);
    const itemId = Number(req.params.itemId);
    const { name, quantity } = req.body;

    const result = await updateInventoryItemService(
      shopId,
      itemId,
      name,
      quantity
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

export const deleteInventoryItem = async (req: Request, res: Response) => {
  try {
    const shopId = getShopId(req);
    const itemId = Number(req.params.itemId);

    const result = await deleteInventoryItemService(shopId, itemId);
    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};


