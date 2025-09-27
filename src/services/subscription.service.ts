import { PrismaClient, Subscription } from "../generated/prisma";
const prisma = new PrismaClient();

export const getOwnerSubscriptionService = async (userId: number) => {
  return prisma.user.findUnique({
    where: { id: userId, role: "OWNER" },
    select: { id: true, subscription: true },
  });
};

export const updateOwnerSubscriptionService = async (userId: number, subscription: Subscription) => {
  return prisma.user.update({
    where: { id: userId, role: "OWNER" },
    data: { subscription },
    select: { id: true, subscription: true },
  });
};
