import { AppError } from "../utils/errors";
import { PrismaClient } from "../db/generated/prisma";
import { DayOfWeek } from "@prisma/client";

const prisma = new PrismaClient();

interface OpeningHourInput {
  dayOfWeek: DayOfWeek;
  openTime?: string;
  closeTime?: string;
  isClosed?: boolean;
}

export const createShopService = async (
  ownerId: number,
  name: string,
  openingHours: OpeningHourInput[]
) => {
  try {
    const shop = await prisma.shop.create({
      data: {
        name,
        ownerId,
        openingRanges: {
          create: openingHours.map((h) => ({
            startDate: new Date(),
            dayOfWeek: h.dayOfWeek,
            openTime: h.openTime ?? "",
            closeTime: h.closeTime ?? "",
            isClosed: h.isClosed ?? false,
          })),
        },
      },
      include: {
        openingRanges: true,
      },
    });

    return shop;
  } catch {
    throw new AppError("Database error while creating shop", 500);
  }
};
