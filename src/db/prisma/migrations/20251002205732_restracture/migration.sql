/*
  Warnings:

  - You are about to drop the column `date` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `employeeId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `shopId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Shop` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Shop` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `shopId` on the `User` table. All the data in the column will be lost.
  - The `subscription` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `EmployeeService` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RecurringSlot` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WorkingHourRange` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WorkingSlot` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `endTime` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `staffId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Made the column `method` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `price` to the `InventoryItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `InventoryItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `role` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'OWNER', 'MANAGER', 'STAFF');

-- CreateEnum
CREATE TYPE "SubscriptionPlan" AS ENUM ('BASIC', 'PRO', 'PREMIUM');

-- CreateEnum
CREATE TYPE "DayOfWeek" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "date",
DROP COLUMN "employeeId",
DROP COLUMN "notes",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "staffId" INTEGER NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "method" SET NOT NULL;

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "banned" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "notes" TEXT;

-- AlterTable
ALTER TABLE "InventoryItem" ADD COLUMN     "description" TEXT,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "unit" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "createdById",
DROP COLUMN "shopId",
ADD COLUMN     "ownerId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Shop" DROP COLUMN "ownerId",
DROP COLUMN "password",
ALTER COLUMN "address" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isActive",
DROP COLUMN "name",
DROP COLUMN "shopId",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
DROP COLUMN "role",
ADD COLUMN     "role" "UserRole" NOT NULL,
DROP COLUMN "subscription",
ADD COLUMN     "subscription" "SubscriptionPlan";

-- DropTable
DROP TABLE "EmployeeService";

-- DropTable
DROP TABLE "RecurringSlot";

-- DropTable
DROP TABLE "WorkingHourRange";

-- DropTable
DROP TABLE "WorkingSlot";

-- DropEnum
DROP TYPE "Role";

-- DropEnum
DROP TYPE "Subscription";

-- DropEnum
DROP TYPE "WeekDay";

-- CreateTable
CREATE TABLE "ShopWorkingHour" (
    "id" SERIAL NOT NULL,
    "shopId" INTEGER NOT NULL,
    "dayOfWeek" "DayOfWeek" NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShopWorkingHour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StaffWorkingHour" (
    "id" SERIAL NOT NULL,
    "staffId" INTEGER NOT NULL,
    "dayOfWeek" "DayOfWeek" NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StaffWorkingHour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ShopMembers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ShopMembers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_UserAssignedServices" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserAssignedServices_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ShopMembers_B_index" ON "_ShopMembers"("B");

-- CreateIndex
CREATE INDEX "_UserAssignedServices_B_index" ON "_UserAssignedServices"("B");

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopWorkingHour" ADD CONSTRAINT "ShopWorkingHour_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffWorkingHour" ADD CONSTRAINT "StaffWorkingHour_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShopMembers" ADD CONSTRAINT "_ShopMembers_A_fkey" FOREIGN KEY ("A") REFERENCES "Shop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShopMembers" ADD CONSTRAINT "_ShopMembers_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserAssignedServices" ADD CONSTRAINT "_UserAssignedServices_A_fkey" FOREIGN KEY ("A") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserAssignedServices" ADD CONSTRAINT "_UserAssignedServices_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
