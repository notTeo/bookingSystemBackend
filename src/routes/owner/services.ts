import express from "express";
import {
  createService,
  deleteService,
} from "../../controllers/serviceController";
import { authenticate, authorizeOwner } from "../../middlewares/authMiddleware";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createServiceValidation,
  deleteServiceValidation,
} from "../../validators/serviceValidator";
import { withShopContext } from "../../middlewares/shop/shopMiddleware";

const router = express.Router();

//  CRUD  //

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
