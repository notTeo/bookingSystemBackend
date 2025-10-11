-- CreateTable
CREATE TABLE "WorkingHourRange" (
    "id" SERIAL NOT NULL,
    "barberId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorkingHourRange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecurringSlot" (
    "id" SERIAL NOT NULL,
    "rangeId" INTEGER NOT NULL,
    "weekDay" "WeekDay" NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,

    CONSTRAINT "RecurringSlot_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WorkingHourRange" ADD CONSTRAINT "WorkingHourRange_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecurringSlot" ADD CONSTRAINT "RecurringSlot_rangeId_fkey" FOREIGN KEY ("rangeId") REFERENCES "WorkingHourRange"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
