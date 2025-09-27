import Router  from "express";
import { registerOwner, loginUser, refreshAccessToken }  from "../controllers/auth.controller";
import { loginValidation, refreshAccessTokenValidator, registerValidation } from "../validators/authValidator";
import { validateRequest } from "../middlewares/validateRequest";
import { loginRateLimiter } from "../middlewares/rateLimit";

const router = Router();

router.post("/register", registerValidation, validateRequest, registerOwner);
router.post("/login",loginValidation, validateRequest, loginRateLimiter, loginUser);
router.post("/refresh",refreshAccessTokenValidator, refreshAccessToken);


export default router;