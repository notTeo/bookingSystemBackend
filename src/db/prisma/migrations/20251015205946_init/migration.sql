/*
  Warnings:

  - You are about to drop the column `userId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `bookable` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `shopId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `InventoryItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShopOpeningRange` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WorkingHour` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AssignedServices` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `shopId` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ShopRole" AS ENUM ('OWNER', 'MANAGER', 'STAFF');

-- AlterEnum
ALTER TYPE "BookingStatus" ADD VALUE 'COMPLETED';

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_userId_fkey";

-- DropForeignKey
ALTER TABLE "InventoryItem" DROP CONSTRAINT "InventoryItem_shopId_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "ShopOpeningRange" DROP CONSTRAINT "ShopOpeningRange_shopId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_shopId_fkey";

-- DropForeignKey
ALTER TABLE "WorkingHour" DROP CONSTRAINT "WorkingHour_userId_fkey";

-- DropForeignKey
ALTER TABLE "_AssignedServices" DROP CONSTRAINT "_AssignedServices_A_fkey";

-- DropForeignKey
ALTER TABLE "_AssignedServices" DROP CONSTRAINT "_AssignedServices_B_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "userId",
ADD COLUMN     "providerId" INTEGER;

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "banned" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "note" TEXT;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "ownerId",
ADD COLUMN     "shopId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Shop" ADD COLUMN     "address" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "bookable",
DROP COLUMN "ownerId",
DROP COLUMN "role",
DROP COLUMN "shopId";

-- DropTable
DROP TABLE "InventoryItem";

-- DropTable
DROP TABLE "ShopOpeningRange";

-- DropTable
DROP TABLE "WorkingHour";

-- DropTable
DROP TABLE "_AssignedServices";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "ShopUser" (
    "id" SERIAL NOT NULL,
    "shopId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "role" "ShopRole" NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "bookable" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShopUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopWorkingHour" (
    "id" SERIAL NOT NULL,
    "shopId" INTEGER NOT NULL,
    "dayOfWeek" "DayOfWeek" NOT NULL,
    "openTime" TEXT NOT NULL,
    "closeTime" TEXT NOT NULL,
    "isClosed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShopWorkingHour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserWorkingHour" (
    "id" SERIAL NOT NULL,
    "shopUserId" INTEGER NOT NULL,
    "shopId" INTEGER NOT NULL,
    "dayOfWeek" "DayOfWeek" NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "isOff" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserWorkingHour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceAssignment" (
    "id" SERIAL NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "shopUserId" INTEGER NOT NULL,

    CONSTRAINT "ServiceAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShopUser_shopId_userId_key" ON "ShopUser"("shopId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceAssignment_serviceId_shopUserId_key" ON "ServiceAssignment"("serviceId", "shopUserId");

-- AddForeignKey
ALTER TABLE "ShopUser" ADD CONSTRAINT "ShopUser_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopUser" ADD CONSTRAINT "ShopUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopWorkingHour" ADD CONSTRAINT "ShopWorkingHour_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWorkingHour" ADD CONSTRAINT "UserWorkingHour_shopUserId_fkey" FOREIGN KEY ("shopUserId") REFERENCES "ShopUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWorkingHour" ADD CONSTRAINT "UserWorkingHour_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceAssignment" ADD CONSTRAINT "ServiceAssignment_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceAssignment" ADD CONSTRAINT "ServiceAssignment_shopUserId_fkey" FOREIGN KEY ("shopUserId") REFERENCES "ShopUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "ShopUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
