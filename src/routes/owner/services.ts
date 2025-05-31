import express from "express";
import {
  createService,
  deleteService,
  getAllServices,
} from "../../controllers/serviceController";
import { authenticate, authorizeOwner } from "../../middlewares/authMiddleware";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createServiceValidation,
  deleteServiceValidation,
} from "../../validators/serviceValidator";
import { withShopContext } from "../../middlewares/shopMiddleware";

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
router.get("/", authenticate, authorizeOwner, withShopContext, getAllServices);

export default router;
