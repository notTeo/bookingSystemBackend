import { body, param } from "express-validator";

const slotsValidator = body("slots").custom((value) => {
  const validDays = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];

  if (typeof value !== "object" || Array.isArray(value) || value === null) {
    throw new Error("slots must be an object with weekday keys");
  }

  for (const day in value) {
    if (!validDays.includes(day.toUpperCase())) {
      throw new Error(`Invalid weekday key: ${day}`);
    }

    const slotArray = value[day];
    if (!Array.isArray(slotArray)) {
      throw new Error(`${day} must contain an array of slots`);
    }

    for (const slot of slotArray) {
      if (
        typeof slot !== "object" ||
        !slot.startTime ||
        !slot.endTime ||
        typeof slot.startTime !== "string" ||
        typeof slot.endTime !== "string" ||
        slot.startTime >= slot.endTime
      ) {
        throw new Error(`Invalid slot in ${day}`);
      }

      if (
        slot.onlyInStore !== undefined &&
        typeof slot.onlyInStore !== "boolean"
      ) {
        throw new Error(`onlyInStore must be a boolean in ${day}`);
      }
    }
  }

  return true;
});

export const createWorkingHourRangeValidation = [
  param("employeeId")
    .isInt({ min: 1 })
    .withMessage("employeeId must be a valid integer"),

  body("startDate")
    .notEmpty().withMessage("startDate is required")
    .isISO8601({ strict: true }).withMessage("startDate must be a valid ISO date"),

  body("endDate")
    .notEmpty().withMessage("endDate is required")
    .isISO8601({ strict: true }).withMessage("endDate must be a valid ISO date"),

  slotsValidator,
];

export const editWorkingHourRangeValidation = [
  param("employeeId")
    .isInt({ min: 1 }).withMessage("Invalid employee ID"),

  param("rangeId")
    .isInt({ min: 1 }).withMessage("Invalid range ID"),

  body("startDate")
    .notEmpty().withMessage("startDate is required")
    .isISO8601({ strict: true }).withMessage("startDate must be a valid ISO date"),

  body("endDate")
    .notEmpty().withMessage("endDate is required")
    .isISO8601({ strict: true }).withMessage("endDate must be a valid ISO date"),

  slotsValidator,
];

export const deleteWorkingHourRangeValidation = [
  param("employeeId")
    .isInt({ min: 1 }).withMessage("employeeId must be a valid integer"),

  param("rangeId")
    .isInt({ min: 1 }).withMessage("rangeId must be a valid integer"),
];

export const cloneExistingWorkingHourRangeValidation = [
  param("employeeId")
    .isInt({ min: 1 }).withMessage("Invalid employee ID"),

  param("rangeId")
    .isInt({ min: 1 }).withMessage("Invalid range ID"),

  body("startDate")
    .notEmpty().withMessage("startDate is required")
    .isISO8601({ strict: true }).withMessage("startDate must be a valid ISO date"),

  body("endDate")
    .notEmpty().withMessage("endDate is required")
    .isISO8601({ strict: true }).withMessage("endDate must be a valid ISO date"),
];
