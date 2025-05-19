/*
  Warnings:

  - You are about to drop the `WorkingHours` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "WorkingHours" DROP CONSTRAINT "WorkingHours_employeeId_fkey";

-- DropTable
DROP TABLE "WorkingHours";
