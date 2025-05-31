import express from "express";
import { authenticate, authorizeOwner } from "../../middlewares/authMiddleware";
import {
  changeBookingStatusValidation,
  createBookingValidation,
} from "../../validators/bookingValidator";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  cancelBooking,
  confirmBooking,
  completeBooking,
  createBookingByCustomer,
  createBookingByOwner,
} from "../../controllers/bookingController";
import { withShopContext } from "../../middlewares/shopMiddleware";

const router = express.Router();

router.post(
  "/manual",
  authenticate,
  authorizeOwner,
  withShopContext,
  createBookingValidation,
  validateRequest,
  createBookingByOwner
);

router.patch(
  "/:bookingId/cancel",
  authenticate,
  authorizeOwner,
  withShopContext,
  changeBookingStatusValidation,
  validateRequest,
  cancelBooking
);

router.patch(
  "/:bookingId/confirm",
  authenticate,
  authorizeOwner,
  withShopContext,
  changeBookingStatusValidation,
  validateRequest,
  confirmBooking
);

router.patch(
  "/:bookingId/complete",
  authenticate,
  authorizeOwner,
  withShopContext,
  changeBookingStatusValidation,
  validateRequest,
  completeBooking
);



export default router;
