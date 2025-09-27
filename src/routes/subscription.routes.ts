import { Router, Response, Request } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send({data: "GET OWNER SUBSCRIPTION"})
});
router.put("/", (req: Request, res: Response) => {
    res.send({data: "CHANGE SUBSCRIPTION"})
}); 

export default router;