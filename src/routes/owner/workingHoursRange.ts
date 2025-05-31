import express from "express";
import { authenticate, authorizeOwner } from "../../middlewares/authMiddleware";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  cloneExistingWorkingHourRange,
  createWorkingHourRange,
  deleteWorkingHourRange,
  editWorkingHourRange,
} from "../../controllers/workingHoursRangeController";
import {
  cloneExistingWorkingHourRangeValidation,
  createWorkingHourRangeValidation,
  deleteWorkingHourRangeValidation,
  editWorkingHourRangeValidation,
} from "../../validators/workingHourRangeValidator";

import { withShopContext } from "../../middlewares/shopMiddleware";
const router = express.Router();

router.post(
  "/:employeeId",
  authenticate,
  authorizeOwner,
  withShopContext,
  createWorkingHourRangeValidation,
  validateRequest,
  createWorkingHourRange
);

router.post(
  "/:employeeId/:rangeId/clone",
  authenticate,
  authorizeOwner,
  withShopContext,
  cloneExistingWorkingHourRangeValidation,
  validateRequest,
  cloneExistingWorkingHourRange
);

router.delete(
  "/:employeeId/:rangeId",
  authenticate,
  authorizeOwner,
  withShopContext,
  deleteWorkingHourRangeValidation,
  validateRequest,
  deleteWorkingHourRange
);

router.put(
  "/:employeeId/:rangeId",
  authenticate,
  authorizeOwner,
  withShopContext,
  editWorkingHourRangeValidation,
  validateRequest,
  editWorkingHourRange
);

export default router;