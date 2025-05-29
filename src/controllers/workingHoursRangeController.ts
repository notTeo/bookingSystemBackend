import { Request, Response } from "express";
import {
  createWorkingHourRangeService,
  deleteWorkingHourRangeService,
  editWorkingHourRangeService,
  cloneWorkingHourRangeService,
} from "../services/worikingHoursRangeService";
import { getShopId } from "../utils/getIds";
import { sendSuccessResponse, sendErrorResponse } from "../utils/responses";

export const createWorkingHourRange = async (req: Request, res: Response) => {
  try {
    const shopId = getShopId(req);
    const employeeId = Number(req.params.employeeId);
    const result = await createWorkingHourRangeService(shopId, employeeId, req.body);
    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(res, error.message || "Server error", error.status || 500);
  }
};

export const deleteWorkingHourRange = async (req: Request, res: Response) => {
  try {
    const shopId = getShopId(req);
    const employeeId = Number(req.params.employeeId);
    const rangeId = Number(req.params.rangeId);
    const result = await deleteWorkingHourRangeService(shopId, employeeId, rangeId);
    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(res, error.message || "Server error", error.status || 500);
  }
};

export const editWorkingHourRange = async (req: Request, res: Response) => {
  try {
    const shopId = getShopId(req);
    const employeeId = Number(req.params.employeeId);
    const rangeId = Number(req.params.rangeId);
    const result = await editWorkingHourRangeService(shopId, employeeId, rangeId, req.body);
    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(res, error.message || "Server error", error.status || 500);
  }
};

export const cloneExistingWorkingHourRange = async (req: Request, res: Response) => {
  try {
    const shopId = getShopId(req);
    const employeeId = Number(req.params.employeeId);
    const rangeId = Number(req.params.rangeId);
    const result = await cloneWorkingHourRangeService(shopId, employeeId, rangeId, req.body);
    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(res, error.message || "Server error", error.status || 500);
  }
};
