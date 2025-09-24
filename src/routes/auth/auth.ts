import { Router } from "express";
import { registerOwner, loginUser } from "../../controllers/auth.controller";
import {
  registerValidation,
  loginValidation,
} from "../../validators/authValidator";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  authenticateJWT,
  authorizeOwner,
} from "../../middlewares/authMiddleware";
import { loginToShopValidation } from "../../validators/shopValidator";
import { loginToShop } from "../../controllers/shop.controller";

const router = Router();

router.post(
  "/register-user",
  registerValidation,
  validateRequest,
  registerOwner
);
router.post("/login-user", loginValidation, validateRequest, loginUser);

router.post(
  "/login-to-shop",
  authenticateJWT,
  authorizeOwner,
  loginToShopValidation,
  validateRequest,
  loginToShop
);

export default router;
