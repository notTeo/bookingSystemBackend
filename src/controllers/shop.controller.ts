import { Request, Response } from "express";
import {
  createShopService,
  getAllShopsService,
  loginToShopService,
  getShopByIdService,
  updateShopService,
  deleteShopService,
} from "../services/shop.service";
import { sendSuccessResponse, sendErrorResponse } from "../utils/responses";
import { getUserId } from "../utils/getIds";

export const createShop = async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req);
    const { name, address, password } = req.body;

    const result = await createShopService(userId, name, address, password);
    return sendSuccessResponse(res, result);
  } catch (err: any) {
    return sendErrorResponse(res, err.message || "Server error", err.status || 500);
  }
};

export const getAllShops = async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req);
    const result = await getAllShopsService(userId);
    return sendSuccessResponse(res, result);
  } catch (err: any) {
    return sendErrorResponse(res, err.message || "Server error", err.status || 500);
  }
};

export const loginToShop = async (req: Request, res: Response) => {
  try {
    const { shopId, password } = req.body;
    const result = await loginToShopService(shopId, password);
    return sendSuccessResponse(res, result);
  } catch (err: any) {
    return sendErrorResponse(res, err.message || "Server error", err.status || 500);
  }
};

export const getShopById = async (req: Request, res: Response) => {
  try {
    const shopId = Number(req.params.shopId);
    const result = await getShopByIdService(shopId);
    return sendSuccessResponse(res, result);
  } catch (err: any) {
    return sendErrorResponse(res, err.message || "Server error", err.status || 500);
  }
};

export const updateShop = async (req: Request, res: Response) => {
  try {
    const shopId = Number(req.params.shopId);
    const { name, address } = req.body;
    const result = await updateShopService(shopId, name, address);
    return sendSuccessResponse(res, result);
  } catch (err: any) {
    return sendErrorResponse(res, err.message || "Server error", err.status || 500);
  }
};

export const deleteShop = async (req: Request, res: Response) => {
  try {
    const shopId = Number(req.params.shopId);
    const result = await deleteShopService(shopId);
    return sendSuccessResponse(res, result);
  } catch (err: any) {
    return sendErrorResponse(res, err.message || "Server error", err.status || 500);
  }
};