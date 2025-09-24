import { Router, Response, Request } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send({ data: "ALL BOOKINGS [DATE]" });
});
router.post("/new", (req: Request, res: Response) => {
    res.send({ data: "BOOKING CREATED" });
});
router.patch("/:id/completed", (req: Request, res: Response) => {
    res.send({ data: "BOOKING COMPLETED" });
});
router.patch("/:id/cancel", (req: Request, res: Response) => {
    res.send({ data: "BOOKING CANCELED" });
});
router.patch("/:id/confirm", (req: Request, res: Response) => {
    res.send({ data: "BOOKING CONFIRMED" });
});

export default router;