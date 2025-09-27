import { Router } from "express";
import { getProfile, updateOwnerProfile } from "../controllers/profile.controller";
import { updateOwnerProfileValidation } from "../validators/profile.validator";
import { validateRequest } from "../middlewares/validateRequest";

const router = Router();

router.get("/", getProfile);
router.patch("/", updateOwnerProfileValidation, validateRequest, updateOwnerProfile);

export default router;