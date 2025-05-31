import { withShopContext } from "../../middlewares/shop/shopMiddleware";
import { validateRequest } from "../../middlewares/validateRequest";
import { Router } from "express";
import { availableSlotsValidation } from "../../validators/bookingValidator";
import { getAvailableSlots } from "../../controllers/bookingController";

const router = Router();

router.get(
  "/:employeeId",
  withShopContext,
  availableSlotsValidation,
  validateRequest,
  getAvailableSlots
);

export default router;
