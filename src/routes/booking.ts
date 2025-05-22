import express from "express";
import { authenticate, authorizeOwner } from "../middlewares/authMiddleware";
import {
  changeBookingStatusValidation,
  createBookingValidation,
} from "../validators/bookingValidator";
import { validateRequest } from "../middlewares/validateRequest";
import {
  cancelBooking,
  confirmBooking,
  completeBooking,
  createBookingByCustomer,
  createBookingByOwner,
} from "../controllers/bookingController";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorizeOwner,
  createBookingValidation,
  validateRequest,
  createBookingByOwner
);

router.post(
  "/",
  createBookingValidation,
  validateRequest,
  createBookingByCustomer
);

router.patch(
  "/:bookingId/cancel",
  authenticate,
  authorizeOwner,
  changeBookingStatusValidation,
  validateRequest,
  cancelBooking
);

router.patch(
  "/:bookingId/confirm",
  authenticate,
  authorizeOwner,
  changeBookingStatusValidation,
  validateRequest,
  confirmBooking
);

router.patch(
  "/:bookingId/complete",
  authenticate,
  authorizeOwner,
  changeBookingStatusValidation,
  validateRequest,
  completeBooking
);

export default router;
