import { Router } from "express";
import {
  registerBarberOwner,
  loginBarberOwner,
} from "../controllers/authController";
import {
  registerValidation,
  loginValidation,
} from "../validators/authValidator";
import { validateRequest } from "../middlewares/validateRequest";

const router = Router();

router.post(
  "/register",
  registerValidation,
  validateRequest,
  registerBarberOwner
);
router.post("/login", loginValidation, validateRequest, loginBarberOwner);

export default router;
