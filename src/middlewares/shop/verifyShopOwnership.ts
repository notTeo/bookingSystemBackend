import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../../generated/prisma";
import { sendErrorResponse } from "../../utils/responses";
import { getShopId, getUserId } from "../../utils/getIds";

const prisma = new PrismaClient();

export const verifyShopOwnership = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = getUserId(req)
  const shopId = getShopId(req)

  if (!shopId || !userId) {
    return sendErrorResponse(res, "Missing context for ownership check", 400);
  }

  const shop = await prisma.shop.findUnique({
    where: { id: shopId },
    select: { ownerId: true },
  });

  if (!shop || shop.ownerId !== userId) {
    return sendErrorResponse(res, "Unauthorized access to shop", 403);
  }

  next();
};
