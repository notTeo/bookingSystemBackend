import { Router, Response, Request } from "express";

const router = Router();

router.get("/shops", (req: Request, res: Response) => {
  res.send({ data: "ALL SHOPS" });
});

router.get("/shops/:shopId/services", (req: Request, res: Response) => {
  res.send({ data: `SERVICES FOR SHOP ${req.params.shopId}` });
});

//OLD /SLOTS
router.get("/shops/:shopId/availability", (req: Request, res: Response) => {
  res.send({ data: "AVAILABLE SLOTS" });
});

router.post("/bookings", (req: Request, res: Response) => {
  res.send({ data: "BOOKING CREATED" });
});

export default router;
