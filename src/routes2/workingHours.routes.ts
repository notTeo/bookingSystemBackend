import { Router, Response, Request } from "express";

const router = Router();

router.post("/", (req: Request, res: Response) => {
    res.send({ data: "WORKING HOURS FOR EMPLOYEE CREATED" });
});
router.post("/:working-hoursID/clone", (req: Request, res: Response) => {
    res.send({ data: "WORKING HOURS FOR EMPLOYEE CLONED/CREATED" });
});
router.delete("/:working-hoursID", (req: Request, res: Response) => {
    res.send({ data: "WORKING HOURS FOR EMPLOYEE DELETED" });
});
router.put("/:working-hoursID", (req: Request, res: Response) => {
    res.send({ data: "WORKING HOURS FOR EMPLOYEE UPDATED" });
});

export default router;