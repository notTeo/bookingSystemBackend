import { Router, Response, Request } from "express";

const router = Router();

router.get("/profile", (req: Request, res: Response) => {
  res.send({ data: "EMPLOYEE PROFILE (READ ONLY)" });
});
router.get("/working-hours", (req: Request, res: Response) => {
  // with querry e.g. ?date=2025-09-23
  res.send({ data: "ALL FUTURE WORKING HOURS" });
});
router.get("/bookings", (req: Request, res: Response) => {
  // with querry e.g. ?date=2025-09-23
  res.send({ data: "ALL UPCOMING BOOKINGS" });
});

export default router;
