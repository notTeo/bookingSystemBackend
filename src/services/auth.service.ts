import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient, Subscription, Role } from "../db/generated/prisma";
import { AppError } from "../utils/errors";
const prisma = new PrismaClient();

interface RegisterInput {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
  subscription: Subscription
}

interface LoginInput {
  email: string;
  password: string;
  name: string;
}
export const registerUserService = async (data: RegisterInput) => {
  const { email, password, name, subscription } = data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    throw new AppError("Email already in use", 409);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const normalizedSub = subscription.toUpperCase() as keyof typeof Subscription;
  const assignedRole = normalizedSub === Subscription.MEMBER ? Role.NONE : Role.OWNER;

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
      subscription: normalizedSub,
      role: assignedRole,
    },
  });

  return {
    user: {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
    },
  };
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


  const expiresIn =  "1d";

  const accessToken = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn } 
  );

  const refreshToken = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_REFRESH_SECRET!, 
    { expiresIn: "7d" } 
  );

  return {
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
  };
};


interface DecodedRefreshToken {
  id: number;
  role: string;
  iat: number;
  exp: number;
}

export const refreshAccessTokenService = async (refreshToken: string) => {
  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET!
    ) as DecodedRefreshToken;

    // You could also verify user still exists and is active
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user || !user.active) {
      throw new AppError("User not found or inactive");
    }

    const expiresIn = "1d";

    const newAccessToken = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn }
    );

    return { accessToken: newAccessToken };
  } catch (err) {
    throw new AppError("Invalid or expired refresh token");
  }
};