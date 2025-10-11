-- CreateEnum
CREATE TYPE "BookingMethod" AS ENUM ('ONLINE', 'IN_STORE');

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "method" "BookingMethod";
