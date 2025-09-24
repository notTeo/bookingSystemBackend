import { Router, Response, Request } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send({data: "GET OWNER PROFILE"})
});
router.patch("/", (req: Request, res: Response) => {
    res.send({ data: "EDIT OWNER PROFILE" });
});

export default router;