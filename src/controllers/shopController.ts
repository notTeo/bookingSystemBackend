import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";

const prisma = new PrismaClient();

export const createShop = async (req: Request, res: Response) => {
  const { name, address, password } = req.body;
  const ownerId = (req as any).user.userId;

  if (!name || !address || !password)
    return sendErrorResponse(res, "Missing fields", 400);

  try {
    const shop = await prisma.shop.create({
      data: {
        name,
        address,
        password,
        ownerId,
      },
    });
    return sendSuccessResponse(res, { shop });
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error");
  }
};

export const getAllShops = async (req: Request, res: Response) => {
  const ownerId = (req as any).user.id;

  try {
    const shops = await prisma.shop.findMany({
      where: { ownerId },
    });
    return sendSuccessResponse(res, { shops });
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error");
  }
};

export const loginToShop = async (req: Request, res: Response) => {
  const { shopId, password } = req.body;

  if (!shopId || !password) {
    return sendErrorResponse(res, "Missing shopId or password", 400);
  }

  try {
    const shop = await prisma.shop.findUnique({
      where: { id: shopId },
    });

    if (!shop || shop.password !== password) {
      return sendErrorResponse(res, "Invalid credentials", 401);
    }

    return sendSuccessResponse(res, { shopId: shop.id, name: shop.name });
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error");
  }
};

export const getShopById = async (req: Request, res: Response) => {
  const id = Number(req.params.shopId);
  if (isNaN(id)) return sendErrorResponse(res, "Invalid ID", 400);

  try {
    const shop = await prisma.shop.findUnique({ where: { id } });
    if (!shop) return sendErrorResponse(res, "Shop not found", 404);
    return sendSuccessResponse(res, { shop });
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error");
  }
};

export const updateShop = async (req: Request, res: Response) => {
  const id = Number(req.params.shopId);
  const { name, address } = req.body;
  if (isNaN(id)) return sendErrorResponse(res, "Invalid ID", 400);

  try {
    const shop = await prisma.shop.update({
      where: { id },
      data: { name, address },
    });
    return sendSuccessResponse(res, { shop });
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error");
  }
};

export const deleteShop = async (req: Request, res: Response) => {
  const id = Number(req.params.shopId);
  if (isNaN(id)) return sendErrorResponse(res, "Invalid ID", 400);

  try {
    await prisma.shop.delete({ where: { id } });
    await prisma.booking.deleteMany({ where: { shopId: id } });
    await prisma.service.deleteMany({ where: { shopId: id } });
    await prisma.workingSlot.deleteMany({ where: { shopId: id } });
    await prisma.inventoryItem.deleteMany({ where: { shopId: id } });
    await prisma.shop.delete({ where: { id } });

    return sendSuccessResponse(res, { message: "Shop deleted" });
  } catch (err) {
    console.error(err);
    return sendErrorResponse(res, "Server error");
  }
};
