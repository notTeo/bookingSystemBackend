import { Router } from "express";
import { updateProfile } from "../../controllers/dashboard.controller";
const router = Router();

router.get("/", getAllOwners);
router.get("/c", getAllCustomers); //fetch first 100 front end filter
router.put("/", updateProfile);

export default router;
