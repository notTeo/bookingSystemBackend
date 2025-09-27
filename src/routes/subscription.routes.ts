import { Router, Response, Request } from "express";
import { validateRequest } from "../middlewares/validateRequest";
import { getSubscription, updateSubscription } from "../controllers/subscription.controller";
import { updateSubscriptionValidation } from "../validators/subscription.validator copy";

const router = Router();

router.get("/", getSubscription);
router.put("/", updateSubscriptionValidation, validateRequest, updateSubscription);

export default router;