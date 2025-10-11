import { AppError } from "../utils/errors";
import jwt from "jsonwebtoken";
import { PrismaClient } from "../db/generated/prisma";

const prisma = new PrismaClient();

export const getUserInfoService = async (userId: number) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        subscription: true,
        shops: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!user) {
      throw new AppError("User not found", 404);
    }

    return user;
  } catch (err) {
    throw new AppError("Database error while fetching user info", 500);
  }
};


