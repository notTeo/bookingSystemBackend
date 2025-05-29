import { sendSuccessResponse, sendErrorResponse } from "../utils/responses";
import { Request, Response } from "express";
import {
  loginOwnerService,
  registerOwnerService,
} from "../services/authService";

export const registerOwner = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await registerOwnerService(req.body);
    return sendSuccessResponse(res, {
      message: "Owner registered successfully",
      user: result,
    });
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

export const loginOwner = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await loginOwnerService(req.body);
    return sendSuccessResponse(res, {
      message: "Owner logged in successfully",
      userInfo: result,
    });
  }catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};
