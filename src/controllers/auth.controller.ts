import { sendSuccessResponse, sendErrorResponse } from "../utils/responses";
import { Request, Response } from "express";
import {
  loginUserService,
  refreshAccessTokenService,
  registerUserService,
} from "../services/auth.service";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await registerUserService(req.body);
    return sendSuccessResponse(res, {
      message: "Owner registered successfully",
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

export const loginUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await loginUserService(req.body);
    return sendSuccessResponse(res, {
      message: "Owner logged in successfully",
      data: result,
    });
  }catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

export const refreshAccessToken = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;

    const result = await refreshAccessTokenService(refreshToken);

    return sendSuccessResponse(res, {
      message: "New access token issued",
      ...result,
    });
  } catch (err: any) {
    return sendErrorResponse(res, err.message || "Invalid refresh token", 403);
  }
};
