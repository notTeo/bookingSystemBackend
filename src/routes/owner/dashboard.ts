import { Router } from "express";
import {
  getMyEmployees,
  getMyServices,
  createBookingByOwner,
  getProfile,
  updateProfile,
  getShopProfile,
  getInventoryItems,
} from "../../controllers/dashboardController";
import { authenticate, authorizeOwner } from "../../middlewares/authMiddleware";
import { withShopContext } from "../../middlewares/shopMiddleware";

const router = Router();


router.get(
  "/employees",
  authenticate,
  authorizeOwner,
  withShopContext,
  getMyEmployees
);

router.get(
  "/inventory",
  authenticate,
  authorizeOwner,
  withShopContext,
  getInventoryItems
);

router.get(
  "/services",
  authenticate,
  authorizeOwner,
  withShopContext,
  getMyServices
);

router.post(
  "/bookings",
  authenticate,
  authorizeOwner,
  withShopContext,
  createBookingByOwner
);

router.get(
  "/profile",
  authenticate,
  authorizeOwner,
  withShopContext,
  getProfile
);

router.patch(
  "/profile",
  authenticate,
  authorizeOwner,
  withShopContext,
  updateProfile
);

router.get(
  "/shop",
  authenticate,
  authorizeOwner,
  withShopContext,
  getShopProfile
);

export default router;
