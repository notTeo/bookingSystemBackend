import express from "express";
import { authenticate, authorizeOwner } from "../middlewares/authMiddleware";
import { createBookingValidation } from "../validators/bookingValidator";
import { validateRequest } from "../middlewares/validateRequest";
import { createBooking } from "../controllers/bookingController";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorizeOwner,
  createBookingValidation,
  validateRequest,
  createBooking
);

export default router;