import { Router, Response, Request } from "express";
import inventoryRoutes from "./inventory.routes";
import serviceRoutes from "./service.routes";
import employeeManagmentRoutes from "./employeeManagment.routes";
import bookingRoutes from "./booking.routes";
import { withShopContext } from "../middlewares/shop/shop.middleware";

const router = Router();

// (no specific details)
router.get("/", (req: Request, res: Response) => {
  res.send({ data: "ALL OWNER SHOPS" });
});
router.get("/:shopID", (req: Request, res: Response) => {
  res.send({ data: "GET SHOP #ID" });
});
router.post("/new", (req: Request, res: Response) => {
  res.send({ data: "SHOP CREATED" });
});
router.delete("/:shopID", (req: Request, res: Response) => {
  res.send({ data: "SHOP DELETED" });
});
router.put("/:shopID", (req: Request, res: Response) => {
  res.send({ data: "SHOP UPDATED" });
});

// nested resources — always tied to a specific shop
router.use("/:shopID/inventory", inventoryRoutes);
router.use("/:shopID/services", serviceRoutes);
router.use("/:shopID/employees", employeeManagmentRoutes);
router.use("/:shopID/bookings", bookingRoutes);

export default router;
