import express from "express";
import { authenticate, authorizeOwner } from "../middlewares/authMiddleware";
import { withShopContext } from "../middlewares/shopMiddleware";
import { validateRequest } from "../middlewares/validateRequest";
import {
  createInventoryItem,
  deleteInventoryItem,
  getInventoryItems,
  updateInventoryItem,
} from "../controllers/inventoryController";
import {
  createInventoryItemValidation,
  deleteInventoryItemValidator,
  updateInventoryItemValidator,
} from "../validators/inventoryValidator";

const router = express.Router();

//  CRUD  //

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

//  GETTER  //

router.get(
  "/",
  authenticate,
  authorizeOwner,
  withShopContext,
  getInventoryItems
);

export default router;
