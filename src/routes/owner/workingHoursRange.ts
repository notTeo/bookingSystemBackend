import express from "express";
import { authenticateJWT, authorizeOwner } from "../../middlewares/authMiddleware";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  cloneExistingWorkingHourRange,
  createWorkingHourRange,
  deleteWorkingHourRange,
  editWorkingHourRange,
} from "../../controllers/workingHoursRange.controller";
import {
  cloneExistingWorkingHourRangeValidation,
  createWorkingHourRangeValidation,
  deleteWorkingHourRangeValidation,
  editWorkingHourRangeValidation,
} from "../../validators/workingHourRangeValidator";

import { withShopContext } from "../../middlewares/shop/shop.middleware";
const router = express.Router();

router.post(
  "/:employeeId",
  authenticateJWT,
  authorizeOwner,
  withShopContext,
  createWorkingHourRangeValidation,
  validateRequest,
  createWorkingHourRange
);

router.post(
  "/:employeeId/:rangeId/clone",
  authenticateJWT,
  authorizeOwner,
  withShopContext,
  cloneExistingWorkingHourRangeValidation,
  validateRequest,
  cloneExistingWorkingHourRange
);

router.delete(
  "/:employeeId/:rangeId",
  authenticateJWT,
  authorizeOwner,
  withShopContext,
  deleteWorkingHourRangeValidation,
  validateRequest,
  deleteWorkingHourRange
);

router.put(
  "/:employeeId/:rangeId",
  authenticateJWT,
  authorizeOwner,
  withShopContext,
  editWorkingHourRangeValidation,
  validateRequest,
  editWorkingHourRange
);

export default router;
