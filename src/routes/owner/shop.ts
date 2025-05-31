import { Router } from "express";
import {
  createShop,
  getShopById,
  updateShop,
  deleteShop,
  loginToShop,
  getAllShops,
} from "../../controllers/shopController";
import { authenticate, authorizeOwner } from "../../middlewares/authMiddleware";
import {
  createShopValidation,
  deleteShopValidation,
  getShopByIdValidation,
  loginToShopValidation,
  updateShopValidation,
} from "../../validators/shopValidator";
import { validateRequest } from "../../middlewares/validateRequest";

const router = Router();

router.get(
  "/:shopId",
  authenticate,
  authorizeOwner,
  getShopByIdValidation,
  validateRequest,
  getShopById
);

router.get("/all", authenticate, authorizeOwner, getAllShops);

//  CRUD  //

router.post(
  "/",
  authenticate,
  authorizeOwner,
  createShopValidation,
  validateRequest,
  createShop
);

router.put(
  "/:shopId",
  authenticate,
  authorizeOwner,
  updateShopValidation,
  validateRequest,
  updateShop
);
router.delete(
  "/:shopId",
  authenticate,
  authorizeOwner,
  deleteShopValidation,
  validateRequest,
  deleteShop
);


export default router;
