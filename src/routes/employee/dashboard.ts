// this is for when employee is logged in what things he can see edit and more
import { Router } from "express";
import {
  authenticate,
  authorizeEmployee,
} from "../../middlewares/authMiddleware";
import { withShopContext } from "../../middlewares/shop/shopMiddleware";
import {
  getProfile,
  updateProfile,
} from "../../controllers/dashboardController";

const router = Router();

router.get(
  "/profile",
  authenticate,
  authorizeEmployee,
  withShopContext,
  getProfile
);

router.patch(
  "/profile",
  authenticate,
  authorizeEmployee,
  withShopContext,
  updateProfile
);

export default router;
