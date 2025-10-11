import { getUserInfoService } from "../services/user.service";
import { sendSuccessResponse, sendErrorResponse } from "../utils/responses";
import { Request, Response } from "express";

export const getUserInfo = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      return sendErrorResponse(res, "No user id in token", 401);
    }
    const result = await getUserInfoService(userId);

    return sendSuccessResponse(res, {
      message: "User info:",
      data: result,
    });
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};
