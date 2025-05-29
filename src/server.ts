import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "./generated/prisma";
import authRoutes from "./routes/auth";
import employeeRoutes from "./routes/employees";
import serviceRoutes from "./routes/services";
import bookingRoutes from "./routes/booking";
import shopRoutes from "./routes/shop";
import inventoryRoutes from "./routes/inventory";
import dashboradRoutes from "./routes/dashboard";
import subscriptionRoutes from "./routes/subscription";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/employees", employeeRoutes);
app.use("/services", serviceRoutes);
app.use("/booking", bookingRoutes);
app.use("/shop", shopRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/dashboard", dashboradRoutes);
app.use("/subscription", subscriptionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log("SERVER TIME:", new Date().toString());
