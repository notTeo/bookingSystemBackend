
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from './generated/prisma';
import authRoutes from './routes/auth';
import barberRoutes from './routes/employees';
import serviceRoutes from './routes/services';
import bookingRoutes from './routes/booking';

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/employees', barberRoutes);
app.use('/services', serviceRoutes);
app.use('/booking', bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));