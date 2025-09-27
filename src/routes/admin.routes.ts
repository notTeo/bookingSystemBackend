import { Router, Response, Request } from "express";
import { validateRequest } from "../middlewares/validateRequest";
import { getAllCustomers, getAllOwners, getCustomerByID, getOwnerByID, updateOwnerByID } from "../controllers/admin.controller";
import { customerIDValidation, ownerIDValidation } from "../validators/admin.validator";

const router = Router();

// ========== OWNERS MANAGEMENT ==========

//(not many info)
router.get("/owners", getAllOwners);

//(more in depth info)
router.get("/owners/:ownerID", ownerIDValidation, validateRequest, getOwnerByID);

//UPDATE EVERYTHING! IN USER PROFILE (even password managment)
router.put("/owners/:ownerID", ownerIDValidation, validateRequest, updateOwnerByID);

// ========== CUSTOMERS MANAGEMENT ==========

//(add filter maybe?)
router.get("/customers", getAllCustomers);

//(more in depth info)
router.get("/customers/:customerID", customerIDValidation, validateRequest, getCustomerByID);

export default router;