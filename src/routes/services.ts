import express from "express";
import { createService, deleteService, getAllServices } from "../controllers/serviceController";
import { authenticate, authorizeOwner } from "../middlewares/authMiddleware";
import { validateRequest } from "../middlewares/validateRequest";
import { createServiceValidation, deleteServiceValidation } from "../validators/serviceValidator";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorizeOwner,
  createServiceValidation,
  validateRequest,
  createService
);

router.delete(
  '/services/:serviceId',
  authenticate,
  authorizeOwner,
  deleteServiceValidation,
  validateRequest,
  deleteService
);
router.get("/", getAllServices);

export default router;
