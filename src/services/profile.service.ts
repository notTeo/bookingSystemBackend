import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

export const getOwnerProfileService = async (userId: number) => {
  return prisma.user.findUnique({
    where: { id: userId, role: "OWNER" },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      subscription: true,
      createdAt: true,
      shops: {
        select: {
          id: true,
          name: true,
          address: true,
          createdAt: true,
          employees: {
            select: {
              id: true,
              name: true,
              email: true,
              isActive: true,
            },
          },
          services: {
            select: {
              id: true,
              name: true,
              duration: true,
              price: true,
            },
          },
          _count: {
            select: {
              bookings: true,
              inventory: true,
              workingSlots: true,
            },
          },
        },
        orderBy: { id: "asc" },
      },
    },
  });
};

type UpdateOwnerProfileInput = {
  name?: string;
  email?: string;
};


export const updateOwnerProfileService = async (
  userId: number,   
  data: UpdateOwnerProfileInput
) => {
  return prisma.user.update({
    where: { id: userId, role: "OWNER" },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      subscription: true,
      isActive: true,
      createdAt: true,
      shops: {
        select: {
          id: true,
          name: true,
          address: true,
        },
      },
    },
  });
};
