import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../../generated/prisma";
import { sendErrorResponse } from "../../utils/responses";

const prisma = new PrismaClient();

export const verifyShopOwnership = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = (req as any).user;
  const shopId = (req as any).shop?.id;

  if (!shopId || !user?.userId) {
    return sendErrorResponse(res, "Missing context for ownership check", 400);
  }

  const shop = await prisma.shop.findUnique({
    where: { id: shopId },
    select: { ownerId: true },
  });

  if (!shop || shop.ownerId !== user.userId) {
    return sendErrorResponse(res, "Unauthorized access to shop", 403);
  }

  next();
};
