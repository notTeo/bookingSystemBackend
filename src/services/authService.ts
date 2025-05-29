import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { PrismaClient } from "../generated/prisma";
import { AppError } from "../utils/errors";
const prisma = new PrismaClient();

interface RegisterInput {
  email: string;
  password: string;
  name: string;
}

interface LoginInput {
  email: string;
  password: string;
  name: string;
}

export const registerOwnerService = async (data: RegisterInput) => {
  const { email, password, name } = data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    throw new AppError("Email already in use", 409);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email,
      hashedPassword,
      name,
      role: "OWNER",
    },
  });

  return { id: newUser.id, email: newUser.email, name: newUser.name };
};

export const loginUserService = async (data: LoginInput) => {
    const { email, password } = data;

    if (!email || !password) {
      throw new AppError("Email and password are required", 401);
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);
    if (!isPasswordValid) {
      throw new AppError("Invalid credentials", 401);
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
};
