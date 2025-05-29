import { Request, Response } from "express";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";
import { getUserId } from "../utils/getIds";
import {
  getMySubscriptionService,
  updateSubscriptionService,
} from "../services/subscriptionService";

export const updateSubscription = async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req);
    const { subscription } = req.body;

    const result = await updateSubscriptionService(userId, subscription);
    return sendSuccessResponse(res, {
      message: "Subscription updated successfully",
      subscription: result.subscription,
    });
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

export const getMySubscription = async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req);
    const result = await getMySubscriptionService(userId);

    return sendSuccessResponse(res, { subscription: result.subscription });
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};
