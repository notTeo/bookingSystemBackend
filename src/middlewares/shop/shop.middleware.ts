import { Request, Response, NextFunction } from "express";
import { sendErrorResponse } from "../../utils/responses";

export const withShopContext = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const shopId = Number(req.params.shopId);
  if (!shopId || isNaN(shopId)) {
    return sendErrorResponse(res, "Missing or invalid shopId in header", 400);
  }
  (req as any).shop = { id: shopId };
  next();
};
