import { Request, Response } from "express";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";
import { getOwnerSubscriptionService, updateOwnerSubscriptionService } from "../services/subscription.service";

export const getSubscription = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) return sendErrorResponse(res, "Unauthorized", 401);

    const subscription = await getOwnerSubscriptionService(userId);

    return sendSuccessResponse(res, subscription);
  } catch (err: any) {
    return sendErrorResponse(res, err.message || "Server error", 500);
  }
};

export const updateSubscription = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) return sendErrorResponse(res, "Unauthorized", 401);

    const { subscription } = req.body;

    const updated = await updateOwnerSubscriptionService(userId, subscription);

    return sendSuccessResponse(res, {
      message: "Subscription updated",
      subscription: updated,
    });
  } catch (err: any) {
    return sendErrorResponse(res, err.message || "Server error", 500);
  }
};
