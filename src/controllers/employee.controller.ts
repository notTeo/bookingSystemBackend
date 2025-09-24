import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { PrismaClient } from "../generated/prisma";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";
import { getShopId } from "../utils/getIds";
import {
  assignServicesToEmployeeService,
  createEmployeeService,
  deleteEmployeeService,
  getEmployeeByIdService,
  removeServiceFromEmployeeService,
  toggleEmployeeActiveStatusService,
  updateEmployeeService,
} from "../services/employee.service";

const prisma = new PrismaClient();

export const createEmployee = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shopId = getShopId(req);
    const { name, email, password } = req.body;

    const result = await createEmployeeService(shopId, name, email, password);

    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

export const deleteEmployee = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const employeeId = Number(req.params.employeeId);
    const shopId = getShopId(req);

    const result = await deleteEmployeeService(shopId, employeeId);

    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

export const updateEmployee = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shopId = getShopId(req);
    const employeeId = Number(req.params.employeeId);
    const { name, email, password } = req.body;

    const result = await updateEmployeeService({
      employeeId,
      shopId,
      name,
      email,
      password,
    });

    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

export const toggleEmployeeActiveStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shopId = getShopId(req);
    const employeeId = Number(req.params.employeeId);
    const { isActive } = req.body;

    const result = await toggleEmployeeActiveStatusService({
      employeeId,
      shopId,
      isActive,
    });

    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

export const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const shopId = getShopId(req);
    const employeeId = Number(req.params.employeeId);

    const result = await getEmployeeByIdService(shopId, employeeId);

    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

export const assignServicesToEmployee = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shopId = getShopId(req);
    const employeeId = Number(req.params.employeeId);
    const { serviceIds } = req.body;

    const result = await assignServicesToEmployeeService({
      employeeId,
      shopId,
      serviceIds,
    });

    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};

export const removeServiceFromEmployee = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const employeeId = Number(req.params.employeeId);
    const serviceId = Number(req.params.serviceId);
    const shopId = getShopId(req);

    const result = await removeServiceFromEmployeeService(
      shopId,
      employeeId,
      serviceId
    );

    return sendSuccessResponse(res, result);
  } catch (error: any) {
    return sendErrorResponse(
      res,
      error.message || "Server error",
      error.status || 500
    );
  }
};
