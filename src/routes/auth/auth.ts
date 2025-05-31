import { Router } from "express";
import { registerOwner, loginUser } from "../../controllers/authController";
import {
  registerValidation,
  loginValidation,
} from "../../validators/authValidator";
import { validateRequest } from "../../middlewares/validateRequest";
import { authenticate, authorizeOwner } from "../../middlewares/authMiddleware";
import { loginToShopValidation } from "../../validators/shopValidator";
import { loginToShop } from "../../controllers/shopController";

const router = Router();

router.post("/register", registerValidation, validateRequest, registerOwner);
router.post("/login-user", loginValidation, validateRequest, loginUser);

router.post(
  "/login-to-shop",
  authenticate,
  authorizeOwner,
  loginToShopValidation,
  validateRequest,
  loginToShop
);

export default router;
