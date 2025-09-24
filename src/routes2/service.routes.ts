import { Router, Response, Request } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send({ data: "ALL SERVICES" });
});
router.post("/new", (req: Request, res: Response) => {
    res.send({ data: "SERVICE CREATED" });
});
router.delete("/:servicesID", (req: Request, res: Response) => {
    res.send({ data: "SERVICE DELETED" });
});

export default router;