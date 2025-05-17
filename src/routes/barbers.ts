import express from "express";
import {
  assignServicesToBarber,
  createBarber,
  deleteBarber,
  getAllBarbers,
  getBarberById,
  removeServiceFromBarber,
  toggleBarberActiveStatus,
  updateBarber,
} from "../controllers/barberController";
import { authenticate, authorizeOwner } from "../middlewares/authMiddleware";
import {
  assignServicesValidation,
  createBarberValidation,
  deleteBarberValidation,
  getBarberByIdValidation,
  toggleBarberActiveValidation,
  updateBarberValidation,
} from "../validators/barberValidator";
import { validateRequest } from "../middlewares/validateRequest";
import {
  createWorkingHourRange,
  deleteWorkingHourRange,
  editWorkingHourRange,
} from "../controllers/workingHoursRangeController";
import {
  createWorkingHourRangeValidation,
  deleteWorkingHourRangeValidation,
  editWorkingHourRangeValidation,
} from "../validators/workingHourRangeValidator";
import { removeServiceFromBarberValdation } from "../validators/serviceValidator";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorizeOwner,
  createBarberValidation,
  validateRequest,
  createBarber
);

router.delete(
  "/:barberId",
  authenticate,
  authorizeOwner,
  deleteBarberValidation,
  deleteBarber
);

router.put(
  "/:barberId",
  authenticate,
  authorizeOwner,
  updateBarberValidation,
  validateRequest,
  updateBarber
);

router.get("/", authenticate, authorizeOwner, getAllBarbers);

router.get(
  "/:barberId",
  authenticate,
  authorizeOwner,
  getBarberByIdValidation,
  getBarberById
);

router.patch(
  "/:barberId/active",
  authenticate,
  authorizeOwner,
  toggleBarberActiveValidation,
  validateRequest,
  toggleBarberActiveStatus
);

router.post(
  "/:barberId/services",
  authenticate,
  authorizeOwner,
  assignServicesValidation,
  validateRequest,
  assignServicesToBarber
);

router.delete(
  "/:barberId/services/:serviceId",
  authenticate,
  authorizeOwner,
  removeServiceFromBarberValdation,
  removeServiceFromBarber
);

router.post(
  "/:id/working-range",
  authenticate,
  authorizeOwner,
  createWorkingHourRangeValidation,
  validateRequest,
  createWorkingHourRange
);

router.delete(
  "/:barberId/working-range/:rangeId",
  authenticate,
  authorizeOwner,
  deleteWorkingHourRangeValidation,
  deleteWorkingHourRange
);

router.put(
  "/:barberId/working-range/:rangeId",
  authenticate,
  authorizeOwner,
  editWorkingHourRangeValidation,
  validateRequest,
  editWorkingHourRange
);

export default router;
