-- CreateEnum
CREATE TYPE "Subscription" AS ENUM ('BASIC', 'PRO', 'PREMIUM');

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_shopId_fkey";

-- DropForeignKey
ALTER TABLE "EmployeeService" DROP CONSTRAINT "EmployeeService_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "EmployeeService" DROP CONSTRAINT "EmployeeService_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "InventoryItem" DROP CONSTRAINT "InventoryItem_shopId_fkey";

-- DropForeignKey
ALTER TABLE "RecurringSlot" DROP CONSTRAINT "RecurringSlot_rangeId_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_shopId_fkey";

-- DropForeignKey
ALTER TABLE "Shop" DROP CONSTRAINT "Shop_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_shopId_fkey";

-- DropForeignKey
ALTER TABLE "WorkingHourRange" DROP CONSTRAINT "WorkingHourRange_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "WorkingSlot" DROP CONSTRAINT "WorkingSlot_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "WorkingSlot" DROP CONSTRAINT "WorkingSlot_shopId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "subscription" "Subscription" NOT NULL DEFAULT 'BASIC';
