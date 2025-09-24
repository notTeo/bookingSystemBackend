import express from "express";
import { authenticate, authorizeOwner } from "../../middlewares/authMiddleware";
import { withShopContext } from "../../middlewares/shop/shop.middleware";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createInventoryItem,
  deleteInventoryItem,
  updateInventoryItem,
} from "../../controllers/inventory.controller";
import {
  createInventoryItemValidation,
  deleteInventoryItemValidator,
  updateInventoryItemValidator,
} from "../../validators/inventoryValidator";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorizeOwner,
  withShopContext,
  createInventoryItemValidation,
  validateRequest,
  createInventoryItem
);

router.put(
  "/:itemId",
  authenticate,
  authorizeOwner,
  withShopContext,
  updateInventoryItemValidator,
  validateRequest,
  updateInventoryItem
);

router.delete(
  "/:itemId",
  authenticate,
  authorizeOwner,
  withShopContext,
  deleteInventoryItemValidator,
  validateRequest,
  deleteInventoryItem
);

export default router;
