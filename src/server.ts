import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "./generated/prisma";
import authRoutes from "./routes/auth/auth";
import employeeRoutes from "./routes/owner/employees";
import serviceRoutes from "./routes/owner/services";
import bookingRoutes from "./routes/owner/booking";
import customersBookingRoutes from "./routes/customer/booking";
import shopRoutes from "./routes/owner/shop";
import inventoryRoutes from "./routes/owner/inventory";
import dashboradOwnerRoutes from "./routes/owner/dashboard";
import dashboardEmployeeRoutes from "./routes/employee/dashboard";
import subscriptionRoutes from "./routes/owner/subscription";
import availableSlotsRoutes from "./routes/public/slots"
import workingRangeRoutes from "./routes/owner/workingHoursRange"

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/employees", employeeRoutes);
app.use("/working-range", workingRangeRoutes);
app.use("/services", serviceRoutes);
app.use("/booking", bookingRoutes, customersBookingRoutes);
app.use("/shop", shopRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/dashboardOwner", dashboradOwnerRoutes);
app.use("/dashboardEmployee", dashboardEmployeeRoutes);
app.use("/subscription", subscriptionRoutes);
app.use("/available-slots", availableSlotsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log("SERVER TIME:", new Date().toString());
