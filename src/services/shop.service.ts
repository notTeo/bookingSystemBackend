import { PrismaClient } from "../generated/prisma";
import { AppError } from "../utils/errors";

const prisma = new PrismaClient();

export const createShopService = async (
  ownerId: number,
  name: string,
  address: string,
  password: string
) => {
  if (!name || !address || !password) {
    throw new AppError("Missing fields", 400);
  }

  const shop = await prisma.shop.create({
    data: {
      name,
      address,
      password,
      ownerId,
    },
  });

  return { shop };
};

export const getAllShopsService = async (ownerId: number) => {
  const shops = await prisma.shop.findMany({ where: { ownerId } });
  return { shops };
};

export const loginToShopService = async (shopId: number, password: string) => {
  if (!shopId || !password) {
    throw new AppError("Missing shopId or password", 400);
  }

  const shop = await prisma.shop.findUnique({ where: { id: shopId } });
  if (!shop || shop.password !== password) {
    throw new AppError("Invalid credentials", 401);
  }

  return { shopId: shop.id, name: shop.name };
};

export const getShopByIdService = async (shopId: number) => {
  if (isNaN(shopId)) {
    throw new AppError("Invalid ID", 400);
  }

  const shop = await prisma.shop.findUnique({ where: { id: shopId } });
  if (!shop) throw new AppError("Shop not found", 404);

  return { shop };
};

export const updateShopService = async (
  shopId: number,
  name?: string,
  address?: string
) => {
  if (isNaN(shopId)) {
    throw new AppError("Invalid ID", 400);
  }

  const shop = await prisma.shop.update({
    where: { id: shopId },
    data: { name, address },
  });

  return { shop };
};

export const deleteShopService = async (shopId: number) => {
  if (isNaN(shopId)) {
    throw new AppError("Invalid ID", 400);
  }

  await prisma.booking.deleteMany({ where: { shopId } });
  await prisma.service.deleteMany({ where: { shopId } });
  await prisma.workingSlot.deleteMany({ where: { shopId } });
  await prisma.inventoryItem.deleteMany({ where: { shopId } });
  await prisma.shop.delete({ where: { id: shopId } });

  return { message: "Shop deleted" };
};
