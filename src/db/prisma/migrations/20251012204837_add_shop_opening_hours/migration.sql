-- CreateTable
CREATE TABLE "ShopOpeningRange" (
    "id" SERIAL NOT NULL,
    "shopId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "dayOfWeek" "DayOfWeek" NOT NULL,
    "openTime" TEXT NOT NULL,
    "closeTime" TEXT NOT NULL,
    "isClosed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ShopOpeningRange_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ShopOpeningRange" ADD CONSTRAINT "ShopOpeningRange_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
