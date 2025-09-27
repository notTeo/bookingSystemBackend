import { Router, Response, Request } from "express";

const router = Router();

router.get("/inventory", (req: Request, res: Response) => {
    res.send({data: "SHOP'S INVENTORY"})
});
router.post("/inventory/new", (req: Request, res: Response) => {
    res.send({data: "ITEM ADDED IN SHOP INVENTORY"})
});
router.delete("/inventory/:inventoryID", (req: Request, res: Response) => {
    res.send({data: "SHOP ITEM DELETED"})
});
router.put("/inventory/:inventoryID", (req: Request, res: Response) => {
    res.send({data: "SHOP ITEM UPDATED"})
});

export default router;