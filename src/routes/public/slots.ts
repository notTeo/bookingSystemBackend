import { withShopContext } from "../../middlewares/shop/shop.middleware";
import { validateRequest } from "../../middlewares/validateRequest";
import { Router } from "express";
import { availableSlotsValidation } from "../../validators/bookingValidator";
import { getAvailableSlots } from "../../controllers/booking.controller";

const router = Router();

router.get(
  "/:employeeId",
  withShopContext,
  availableSlotsValidation,
  validateRequest,
  getAvailableSlots
);

export default router;
