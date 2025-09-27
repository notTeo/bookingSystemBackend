import { Router, Response, Request } from "express";
import workingHoursRoutes from "./workingHours.routes"

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send({ data: "ALL EMPLOYEES" });
});
router.get("/:employeeID", (req: Request, res: Response) => {
  res.send({ data: "GET EMPLOYEE #ID" });
});
router.post("/new", (req: Request, res: Response) => {
  res.send({ data: "EMPLOYEE CREATED" });
});
router.delete("/:employeeID", (req: Request, res: Response) => {
  res.send({ data: "EMPLOYEE DELETED" });
});
router.put("/:employeeID", (req: Request, res: Response) => {
  res.send({ data: "EMPLOYEE UPDATED" });
});
router.put("/:employeeID/activity", (req: Request, res: Response) => {
  res.send({ data: "EMPLOYEE ACTIVITY TOGGLED" });
});
router.post("/:employeeID/services", (req: Request, res: Response) => {
  res.send({ data: "SERVICE APPLIED TO EMPLOYEE" });
});
router.delete("/:employeeID/:servicesID", (req: Request, res: Response) => {
  res.send({ data: "SERVICE REMOVED FROM EMPLOYEE" });
});


router.use("/:employeeID/working-hours", workingHoursRoutes);

export default router;