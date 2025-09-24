import express from "express";
import {
  createService,
  deleteService,
} from "../../controllers/service.controller";
import { authenticate, authorizeOwner } from "../../middlewares/authMiddleware";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createServiceValidation,
  deleteServiceValidation,
} from "../../validators/serviceValidator";
import { withShopContext } from "../../middlewares/shop/shop.middleware";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorizeOwner,
  withShopContext,
  createServiceValidation,
  validateRequest,
  createService
);

router.delete(
  "/:serviceId",
  authenticate,
  authorizeOwner,
  withShopContext,
  deleteServiceValidation,
  validateRequest,
  deleteService
);

export default router;
