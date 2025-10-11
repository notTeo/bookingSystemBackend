/*
  Warnings:

  - You are about to drop the column `onlyInStore` on the `WorkingHourRange` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WorkingHourRange" DROP COLUMN "onlyInStore";

-- AlterTable
ALTER TABLE "WorkingSlot" ADD COLUMN     "onlyInStore" BOOLEAN NOT NULL DEFAULT false;
