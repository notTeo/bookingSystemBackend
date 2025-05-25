import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";

const prisma = new PrismaClient();

export const createInventoryItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shopId = (req as any).shop.id;
    const { name, quantity } = req.body;

    const shop = await prisma.shop.findUnique({
      where: { id: shopId },
    });

    if (!shop) {
      return sendErrorResponse(res, "Shop not found", 404);
    }

    const newItem = await prisma.inventoryItem.create({
      data: {
        name,
        quantity,
        shopId,
      },
    });

    return sendSuccessResponse(res, {
      message: "Item created successfully",
      itemId: newItem.id,
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error");
  }
};

export const updateInventoryItem = async (req: Request, res: Response) => {
  try {
    const shopId = (req as any).shop.id;
    const itemId = parseInt(req.params.itemId, 10);
    const { name, quantity } = req.body;

    const existingItem = await prisma.inventoryItem.findFirst({
      where: { id: itemId, shopId },
    });

    if (!existingItem) {
      return sendErrorResponse(res, "Item not found", 404);
    }

    const updatedItem = await prisma.inventoryItem.update({
      where: { id: itemId },
      data: { name, quantity },
    });

    return sendSuccessResponse(res, {
      message: "Item updated successfully",
      item: updatedItem,
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error");
  }
};

export const deleteInventoryItem = async (req: Request, res: Response) => {
  try {
    const shopId = (req as any).shop.id;
    const itemId = parseInt(req.params.itemId, 10);

    const item = await prisma.inventoryItem.findFirst({
      where: { id: itemId, shopId },
    });

    if (!item) {
      return sendErrorResponse(res, "Item not found", 404);
    }

    await prisma.inventoryItem.delete({ where: { id: itemId } });

    return sendSuccessResponse(res, {
      message: "Item deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error");
  }
};

export const getInventoryItems = async (req: Request, res: Response) => {
  try {
    const shopId = (req as any).shop.id;
    const items = await prisma.inventoryItem.findMany({ where: { shopId } });

    return sendSuccessResponse(res, { items });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, "Server error");
  }
};