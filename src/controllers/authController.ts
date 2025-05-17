import { sendSuccessResponse, sendErrorResponse } from '../utils/responses';
import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export const registerBarberOwner = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return sendErrorResponse(res, 'All fields are required', 400);
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return sendErrorResponse(res, 'Email already in use', 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        name,
        role: 'BARBER_OWNER',
      },
    });

    return sendSuccessResponse(res, { message: 'Barber owner registered', userId: user.id });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, 'Server error');
  }
};

export const loginBarberOwner = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return sendErrorResponse(res, 'Email and password are required', 400);
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return sendErrorResponse(res, 'Invalid credentials', 401);
    }

    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);
    if (!isPasswordValid) {
      return sendErrorResponse(res, 'Invalid credentials', 401);
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: '1d' }
    );

    return sendSuccessResponse(res, {
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, 'Server error');
  }
};