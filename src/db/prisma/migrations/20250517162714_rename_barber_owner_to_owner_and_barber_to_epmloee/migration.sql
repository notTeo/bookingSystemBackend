/*
  Warnings:

  - The values [BARBER_OWNER] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `barberId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `barberId` on the `WorkingHourRange` table. All the data in the column will be lost.
  - You are about to drop the column `barberId` on the `WorkingHours` table. All the data in the column will be lost.
  - You are about to drop the column `barberId` on the `WorkingSlot` table. All the data in the column will be lost.
  - You are about to drop the `BarberService` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `employeeId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `WorkingHourRange` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `WorkingHours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `WorkingSlot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('ADMIN', 'OWNER', 'EMPLOYEE');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'EMPLOYEE';
COMMIT;

-- DropForeignKey
ALTER TABLE "BarberService" DROP CONSTRAINT "BarberService_barberId_fkey";

-- DropForeignKey
ALTER TABLE "BarberService" DROP CONSTRAINT "BarberService_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_barberId_fkey";

-- DropForeignKey
ALTER TABLE "WorkingHourRange" DROP CONSTRAINT "WorkingHourRange_barberId_fkey";

-- DropForeignKey
ALTER TABLE "WorkingHours" DROP CONSTRAINT "WorkingHours_barberId_fkey";

-- DropForeignKey
ALTER TABLE "WorkingSlot" DROP CONSTRAINT "WorkingSlot_barberId_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "barberId",
ADD COLUMN     "employeeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "WorkingHourRange" DROP COLUMN "barberId",
ADD COLUMN     "employeeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "WorkingHours" DROP COLUMN "barberId",
ADD COLUMN     "employeeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "WorkingSlot" DROP COLUMN "barberId",
ADD COLUMN     "employeeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "BarberService";

-- CreateTable
CREATE TABLE "EmployeeService" (
    "employeeId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "EmployeeService_pkey" PRIMARY KEY ("employeeId","serviceId")
);

-- AddForeignKey
ALTER TABLE "EmployeeService" ADD CONSTRAINT "EmployeeService_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeService" ADD CONSTRAINT "EmployeeService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkingHours" ADD CONSTRAINT "WorkingHours_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkingSlot" ADD CONSTRAINT "WorkingSlot_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkingHourRange" ADD CONSTRAINT "WorkingHourRange_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
