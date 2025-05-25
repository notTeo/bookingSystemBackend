import { Router } from "express";
import { registerOwner, loginOwner } from "../controllers/authController";
import {
  registerValidation,
  loginValidation,
} from "../validators/authValidator";
import { validateRequest } from "../middlewares/validateRequest";

const router = Router();

router.post("/register", registerValidation, validateRequest, registerOwner);
router.post("/login", loginValidation, validateRequest, loginOwner);

export default router;
