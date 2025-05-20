import express from "express";
import { authenticate, authorizeOwner } from "../middlewares/authMiddleware";
import { createBookingValidation, deleteBookingValidation } from "../validators/bookingValidator";
import { validateRequest } from "../middlewares/validateRequest";
import { createBooking, deleteBooking } from "../controllers/bookingController";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorizeOwner,
  createBookingValidation,
  validateRequest,
  createBooking
);

router.delete(
  "/:bookingId",
  authenticate,
  authorizeOwner,
  deleteBookingValidation,
  validateRequest,
  deleteBooking
);


export default router;