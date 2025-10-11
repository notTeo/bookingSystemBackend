/*
  Warnings:

  - You are about to drop the column `onlyInStore` on the `WorkingSlot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RecurringSlot" ADD COLUMN     "onlyInStore" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "WorkingSlot" DROP COLUMN "onlyInStore";
