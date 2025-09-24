import express from "express";
import {
  assignServicesToEmployee,
  createEmployee,
  deleteEmployee,
  getEmployeeById,
  removeServiceFromEmployee,
  toggleEmployeeActiveStatus,
  updateEmployee,
} from "../../controllers/employee.controller";
import { authenticate, authorizeOwner } from "../../middlewares/authMiddleware";
import {
  assignServicesValidation,
  createEmployeeValidation,
  deleteEmployeeValidation,
  getEmployeeByIdValidation,
  toggleEmployeeActiveValidation,
  updateEmployeeValidation,
} from "../../validators/employeeValidator";
import { validateRequest } from "../../middlewares/validateRequest";
import { removeServiceFromEmployeeValidation } from "../../validators/serviceValidator";
import { withShopContext } from "../../middlewares/shop/shop.middleware";

const router = express.Router();

router.get(
  "/:employeeId",
  authenticate,
  authorizeOwner,
  withShopContext,
  getEmployeeByIdValidation,
  validateRequest,
  getEmployeeById
);

router.post(
  "/",
  authenticate,
  authorizeOwner,
  withShopContext,
  createEmployeeValidation,
  validateRequest,
  createEmployee
);

router.delete(
  "/:employeeId",
  authenticate,
  authorizeOwner,
  withShopContext,
  deleteEmployeeValidation,
  validateRequest,
  deleteEmployee
);

router.put(
  "/:employeeId",
  authenticate,
  authorizeOwner,
  withShopContext,
  updateEmployeeValidation,
  validateRequest,
  updateEmployee
);

//  SERVICES  //

router.patch(
  "/:employeeId/active",
  authenticate,
  authorizeOwner,
  withShopContext,
  toggleEmployeeActiveValidation,
  validateRequest,
  toggleEmployeeActiveStatus
);

router.post(
  "/:employeeId/services",
  authenticate,
  authorizeOwner,
  withShopContext,
  assignServicesValidation,
  validateRequest,
  assignServicesToEmployee
);

router.delete(
  "/:employeeId/services/:serviceId",
  authenticate,
  authorizeOwner,
  withShopContext,
  removeServiceFromEmployeeValidation,
  validateRequest,
  removeServiceFromEmployee
);

export default router;
