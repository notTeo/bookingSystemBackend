import Router  from "express";
import { createShop }  from "../controllers/shop.controller";
import {createShopValidator } from "../validators/shop.validator";
import { validateRequest } from "../middlewares/validateRequest";
//import {  } from "../middlewares/rateLimit"; for futere use

const router = Router();

router.post("/new", createShopValidator, validateRequest, createShop);


export default router;