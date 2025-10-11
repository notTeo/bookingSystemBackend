import Router from "express";
import { getUserInfo } from "../controllers/user.controller";

const router = Router();

router.get("/", getUserInfo);


export default router;