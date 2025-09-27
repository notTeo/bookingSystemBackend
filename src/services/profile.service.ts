import { PrismaClient, Role } from "../generated/prisma";
const prisma = new PrismaClient();

export const getProfileService = async (userId: number, role: Role) => {
  if (role === "OWNER") {
    return prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        shops: {
          select: { id: true, name: true, address: true }
        }
      },
    });
  }

  if (role === "EMPLOYEE") {
    return prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        shop: {
          select: { id: true, name: true, address: true }
        }
      },
    });
  }
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
