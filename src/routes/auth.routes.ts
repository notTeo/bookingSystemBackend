import Router  from "express";
import { registerOwner, loginUser }  from "../controllers/auth.controller";
import { loginValidation, registerValidation } from "../validators/authValidator";
import { validateRequest } from "../middlewares/validateRequest";
import { loginRateLimiter } from "../middlewares/rateLimit";

const router = Router();

router.post("/register", registerValidation, validateRequest, registerOwner);

router.post("/login",loginValidation, validateRequest, loginRateLimiter, loginUser);



export default router;