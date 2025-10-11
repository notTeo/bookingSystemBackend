import express, {Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

import { authenticateJWT, authorizeRole } from "./middlewares/auth.middleware";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Booking system API is running 🚀" });
});

app.use("/auth", authRoutes);

app.use(authenticateJWT);
app.use("/me", userRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log("SERVER TIME:", new Date().toString());
