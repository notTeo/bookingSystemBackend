import express from "express";
import {
  assignServicesToEmployee,
  createEmployee,
  deleteEmployee,
  getAllEmployees,
  getEmployeeById,
  removeServiceFromEmployee,
  toggleEmployeeActiveStatus,
  updateEmployee,
} from "../controllers/employeeController";
import { authenticate, authorizeOwner } from "../middlewares/authMiddleware";
import {
  assignServicesValidation,
  createEmployeeValidation,
  deleteEmployeeValidation,
  getEmployeeByIdValidation,
  toggleEmployeeActiveValidation,
  updateEmployeeValidation,
} from "../validators/employeeValidator";
import { validateRequest } from "../middlewares/validateRequest";
import {
  cloneExistingWorkingHourRange,
  createWorkingHourRange,
  deleteWorkingHourRange,
  editWorkingHourRange,
} from "../controllers/workingHoursRangeController";
import {
  cloneExistingWorkingHourRangeValidation,
  createWorkingHourRangeValidation,
  deleteWorkingHourRangeValidation,
  editWorkingHourRangeValidation,
} from "../validators/workingHourRangeValidator";
import { removeServiceFromEmployeeValdation } from "../validators/serviceValidator";
import { getAvailableSlots } from "../controllers/bookingController";
import { availableSlotsValidation } from "../validators/bookingValidator";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorizeOwner,
  createEmployeeValidation,
  validateRequest,
  createEmployee
);

router.delete(
  "/:employeeId",
  authenticate,
  authorizeOwner,
  deleteEmployeeValidation,
  deleteEmployee
);

router.put(
  "/:employeeId",
  authenticate,
  authorizeOwner,
  updateEmployeeValidation,
  validateRequest,
  updateEmployee
);

router.get("/", authenticate, authorizeOwner, getAllEmployees);

router.get(
  "/:employeeId",
  authenticate,
  authorizeOwner,
  getEmployeeByIdValidation,
  getEmployeeById
);

router.patch(
  "/:employeeId/active",
  authenticate,
  authorizeOwner,
  toggleEmployeeActiveValidation,
  validateRequest,
  toggleEmployeeActiveStatus
);

router.post(
  "/:employeeId/services",
  authenticate,
  authorizeOwner,
  assignServicesValidation,
  validateRequest,
  assignServicesToEmployee
);

router.delete(
  "/:employeeId/services/:serviceId",
  authenticate,
  authorizeOwner,
  removeServiceFromEmployeeValdation,
  removeServiceFromEmployee
);

router.post(
  "/:employeeId/working-range",
  authenticate,
  authorizeOwner,
  createWorkingHourRangeValidation,
  validateRequest,
  createWorkingHourRange
);

router.post(
  "/:employeeId/:rangeId/clone",
  authenticate,
  authorizeOwner,
  cloneExistingWorkingHourRangeValidation,
  validateRequest,
  cloneExistingWorkingHourRange
);

router.delete(
  "/:employeeId/working-range/:rangeId",
  authenticate,
  authorizeOwner,
  deleteWorkingHourRangeValidation,
  deleteWorkingHourRange
);

router.put(
  "/:employeeId/ /:rangeId",
  authenticate,
  authorizeOwner,
  editWorkingHourRangeValidation,
  validateRequest,
  editWorkingHourRange
);

router.get(
  '/:employeeId/available-slots',
  availableSlotsValidation, 
  validateRequest,
  getAvailableSlots
);


export default router;
