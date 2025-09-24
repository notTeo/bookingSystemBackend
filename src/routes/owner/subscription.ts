import { updateSubscriptionValidator } from "../../validators/subscriptionValidator";
import { validateRequest } from "../../middlewares/validateRequest";
import { Router } from "express";
import {
  getMySubscription,
  changeUserSubscription,
} from "../../controllers/subscription.controller.ts";
import { authenticate, authorizeOwner } from "../../middlewares/authMiddleware";

const router = Router();

router.patch(
  "/change",
  authenticate,
  authorizeOwner,
  updateSubscriptionValidator,
  validateRequest,
  changeUserSubscription
);

router.get(
  "/",
  authenticate,
  authorizeOwner,
  getMySubscription
);

export default router;
