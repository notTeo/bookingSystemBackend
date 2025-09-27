import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

// --- OWNERS ---

export const getAllOwnersService = async () => {
  return prisma.user.findMany({
    where: { role: "OWNER" },
  });
};

export const getOwnerByIDService = async (ownerID: string) => {
 return prisma.user.findUnique({
    where: { id: Number(ownerID) },
  });
};

export const updateOwnerByIDService = async (ownerID: string, data: any) => {
    return prisma.user.update({
      where: { id: Number(ownerID) },
      data,
    });
  };
  
  // --- CUSTOMERS ---
  
  export const getAllCustomersService = async () => {
    return prisma.customer.findMany();
  };
  
  export const getCustomerByIDService = async (customerID: string) => {
    return prisma.customer.findUnique({
      where: { id: Number(customerID) },
    });
  };