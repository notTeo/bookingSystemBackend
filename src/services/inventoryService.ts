import { PrismaClient } from "../generated/prisma";
import { AppError } from "../utils/errors";
const prisma = new PrismaClient();

export const createInventoryItemService = async (
  shopId: number,
  name: string,
  quantity: number
) => {
  const shop = await prisma.shop.findUnique({ where: { id: shopId } });
  if (!shop) throw new AppError("Shop not found", 404);

  const newItem = await prisma.inventoryItem.create({
    data: { name, quantity, shopId },
  });

  return {
    message: "Item created successfully",
    itemId: newItem.id,
  };
};

export const updateInventoryItemService = async (
  shopId: number,
  itemId: number,
  name: string,
  quantity: number
) => {
  const existingItem = await prisma.inventoryItem.findFirst({
    where: { id: itemId, shopId },
  });

  if (!existingItem) {
    throw new AppError("Item not found", 404);
  }

  const updatedItem = await prisma.inventoryItem.update({
    where: { id: itemId },
    data: { name, quantity },
  });

  return {
    message: "Item updated successfully",
    item: updatedItem,
  };
};

export const deleteInventoryItemService = async (
  shopId: number,
  itemId: number
) => {
  const item = await prisma.inventoryItem.findFirst({
    where: { id: itemId, shopId },
  });

  if (!item) {
    throw new AppError("Item not found", 404);
  }

  await prisma.inventoryItem.delete({ where: { id: itemId } });

  return {
    message: "Item deleted successfully",
  };
};

export const getInventoryItemsService = async (shopId: number) => {
  const items = await prisma.inventoryItem.findMany({ where: { shopId } });
  return { items };
};
