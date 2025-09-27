import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import adminRoutes from "./routes/admin.routes";
import employeeRoutes from "./routes/employeeManagment.routes";
import publicRoutes from "./routes/public.routes";
import ownerRoutes from "./routes/owner.routes";
import { authenticateJWT, authorizeRole } from "./middlewares/authMiddleware";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/public", publicRoutes)

app.use(authenticateJWT);
app.use("/admin", authorizeRole(["ADMIN"]), adminRoutes);
app.use("/employee", authorizeRole(["EMPLOYEE"]), employeeRoutes);
app.use("/owner", authorizeRole(["OWNER"]), ownerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log("SERVER TIME:", new Date().toString());
