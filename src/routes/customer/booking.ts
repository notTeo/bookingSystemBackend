import express from "express";
import { createBookingValidation } from "../../validators/bookingValidator";
import { validateRequest } from "../../middlewares/validateRequest";
import { createBookingByCustomer } from "../../controllers/bookingController";
import { withShopContext } from "../../middlewares/shop/shopMiddleware";

const router = express.Router();

router.post(
  "/customer",
  withShopContext,
  createBookingValidation,
  validateRequest,
  createBookingByCustomer
);

export default router;
