import { PrismaClient, Subscription } from "../generated/prisma";
import { AppError } from "../utils/errors";

const prisma = new PrismaClient();

export const changeUserSubscriptionService = async (
  userId: number,
  subscription: Subscription
) => {
  const user = await prisma.user.update({
    where: { id: userId },
    data: { subscription },
    select: { subscription: true },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }
    
  return user;
};

export const getMySubscriptionService = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { subscription: true },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};
