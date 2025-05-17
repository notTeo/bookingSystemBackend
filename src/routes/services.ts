import express from "express";
import { createService, getAllServices } from "../controllers/serviceController";
import { authenticate, authorizeOwner } from "../middlewares/authMiddleware";
import { validateRequest } from "../middlewares/validateRequest";
import { createServiceValidation } from "../validators/serviceValidator";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorizeOwner,
  createServiceValidation,
  validateRequest,
  createService
);
router.get("/", getAllServices);

export default router;
