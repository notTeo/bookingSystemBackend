import { Request, Response} from "express";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";
import {
  getAllCustomersService,
  getAllOwnersService,
  updateOwnerByIDService,
  getCustomerByIDService,
  getOwnerByIDService
} from "../services/admin.service";


export const getAllOwners = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await getAllOwnersService();
      return sendSuccessResponse(res, {
        message: "All Owners",
        users: result,
      });
    } catch (error: any) {
      return sendErrorResponse(
        res,
        error.message || "Server error",
        error.status || 500
      );
    }
};
  
export const getOwnerByID = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
        const ownerID = req.params.ownerID
        const result = await getOwnerByIDService(ownerID);
      return sendSuccessResponse(res, {
        message: `Owner with id: ${ownerID}`,
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

export const updateOwnerByID = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const ownerID = req.params.ownerID;
    const data = req.body
      const result = await updateOwnerByIDService(ownerID, data);
    return sendSuccessResponse(res, {
      message: `Owner updated`,
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

export const getCustomerByID = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const customerID = req.params.customerID
    const result = await getCustomerByIDService(customerID);
    return sendSuccessResponse(res, {
      message: `Cusotomer with id: ${customerID}`,
      customer: result,
    });
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

export const getAllCustomers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await getAllCustomersService();
    return sendSuccessResponse(res, {
      message: "All Customers",
      customers: result,
    });
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};
