import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "./generated/prisma";
import authRoutes from "./routes2/auth.routes";
import adminRoutes from "./routes2/admin.routes";
import employeeRoutes from "./routes2/employeeManagment.routes";
import publicRoutes from "./routes2/public.routes";
import ownerRoutes from "./routes2/owner.routes";
import { authenticateJWT, authorizeRole } from "./middlewares/authMiddleware";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

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
