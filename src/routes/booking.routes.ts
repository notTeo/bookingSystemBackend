import { Router, Response, Request } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send({ data: "ALL BOOKINGS [DATE]" });
});
router.post("/new", (req: Request, res: Response) => {
    res.send({ data: "BOOKING CREATED" });
});
router.patch("/:bookingID/completed", (req: Request, res: Response) => {
    res.send({ data: "BOOKING COMPLETED" });
});
router.patch("/:bookingID/cancel", (req: Request, res: Response) => {
    res.send({ data: "BOOKING CANCELED" });
});
router.patch("/:bookingID/confirm", (req: Request, res: Response) => {
    res.send({ data: "BOOKING CONFIRMED" });
});

export default router;