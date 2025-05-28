import { Router } from "express";
import {
  getMe,
  getMyEmployees,
  getMyServices,
  createBookingByOwner,
  getProfile,
  updateProfile,
  getShopProfile,
  updateShopProfile,
} from "../controllers/dashboardController";
import { authenticate, authorizeOwner } from "../middlewares/authMiddleware";
import { withShopContext } from "../middlewares/shopMiddleware";

const router = Router();
// GET /me
router.get("/me", authenticate, authorizeOwner, withShopContext, getMe);

// Owner dashboard
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
    getMyEmployees
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
router.patch(
  "/shop",
  authenticate,
  authorizeOwner,
  withShopContext,
  updateShopProfile
);

export default router;
