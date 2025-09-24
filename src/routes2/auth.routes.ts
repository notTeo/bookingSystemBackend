import { Router, Response, Request } from "express";

const router = Router();

router.post("/register", (res: Response, req: Request) => {
    res.send({data: "OWNER GOT REGISTERED"})
});

router.post("/login", (res: Response, req: Request) => {
    res.send({data: "USER GOT LOGGED IN"})
});



export default router;