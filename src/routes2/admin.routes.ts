import { Router, Response, Request } from "express";

const router = Router();

// ========== OWNERS MANAGEMENT ==========

//(not many info)
router.get("/owners", (req: Request, res: Response) => {
    res.send({data: "GET OWNERS"})
});

//(more in depth info)
router.get("/owners/:id", ( req: Request, res: Response,) => {
    res.send({data: "GET OWNER"})
});

//UPDATE EVERYTHING! IN USER PROFILE (even password managment)
router.put("/owners/:id", ( req: Request, res: Response) => {
    res.send({data: "UPDATE OWNER"})
});

// ========== CUSTOMERS MANAGEMENT ==========

//(add filter maybe?)
router.get("/customers", (req: Request, res: Response) => {
    res.send({data: "GET ALL CUSTOMERS"})
});

//(more in depth info)
router.get("/customers/:id", (req: Request, res: Response) => {
    res.send({data: "GET CUSTOMER"})
});

export default router;