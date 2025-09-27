import { Router, Response, Request } from "express";
import profileRoutes from "./profile.routes"
import subscriptionRoutes from "./subscription.routes"
import shopRoutes from "./shop.routes"

const router = Router();

router.use("/profile", profileRoutes);
router.use("/subscription", subscriptionRoutes);
router.use("/shops", shopRoutes);

export default router;
