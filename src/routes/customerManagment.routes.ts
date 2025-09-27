import { Router } from "express";
import { getAllCustomers, getCustomerById, deleteCustomer } from "../controllers/customer.controller";

const router = Router();

// GET /owner/customers
router.get("/", getAllCustomers);

// GET /owner/customers/:customerId
router.get(
  "/:customerID",
  getCustomerById
);

router.patch("/:customerID/ban", banCustomerById)
router.patch("/:customerID/unban", unbanCustomerById)
router.put("/:customerID/update", updateCustomerById)
// DELETE /owner/customers/:customerId
router.delete(
  "/:customerID",
  deleteCustomer
);

export default router;