import { Request, Response } from "express";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";
import { getOwnerProfileService, updateOwnerProfileService } from "../services/profile.service";

export const getOwnerProfile = async (req: Request, res: Response) => {
    try {
      const userId = (req as any).user?.id;
      if (!userId) return sendErrorResponse(res, "Unauthorized", 401);
  
      const profile = await getOwnerProfileService(userId);
      if (!profile) return sendErrorResponse(res, "Owner not found", 404);
  
      return sendSuccessResponse(res, { owner: profile });
    } catch (err: any) {
      return sendErrorResponse(res, err.message || "Server error", 500);
    }
};
  
export const updateOwnerProfile = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user?.id;
      if (!userId) return sendErrorResponse(res, "Unauthorized", 401);
  
      const toUpdatebody = req.body;
  
      const updatedOwner = await updateOwnerProfileService(userId, toUpdatebody);
  
      return sendSuccessResponse(res, {
        message: "Profile updated",
        owner: updatedOwner,
      });
    } catch (err: any) {
      if (err.code === "P2002" && err.meta?.target?.includes("email")) {
        return sendErrorResponse(res, "Email already in use", 409);
      }
      return sendErrorResponse(res, err.message || "Server error", 500);
    }
  };