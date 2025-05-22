import { body, param } from "express-validator";

export const createWorkingHourRangeValidation = [
  param("employeeId")
  .isInt({ min: 1 })
    .withMessage("employeeId must be a valid integer"),
  
  body("startDate")
    .notEmpty()
    .withMessage("startDate is required")
    .isISO8601()
    .withMessage("startDate must be a valid date"),

  body("endDate")
    .notEmpty()
    .withMessage("endDate is required")
    .isISO8601()
    .withMessage("endDate must be a valid date"),

  body("slots").custom((value) => {
    const validDays = [
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
      "SUNDAY",
    ];

    if (typeof value !== "object" || Array.isArray(value)) {
      throw new Error("slots must be an object");
    }

    for (const day in value) {
      if (!validDays.includes(day.toUpperCase())) {
        throw new Error(`Invalid weekday key: ${day}`);
      }

      const slotArray = value[day];
      if (!Array.isArray(slotArray)) {
        throw new Error(`${day} must be an array`);
      }

      for (const slot of slotArray) {
        if (
          typeof slot !== "object" ||
          !slot.startTime ||
          !slot.endTime ||
          slot.startTime >= slot.endTime
        ) {
          throw new Error(`Invalid slot in ${day}`);
        }
      }
    }

    return true;
  }),
];

export const deleteWorkingHourRangeValidation = [
  param("employeeId")
    .isInt({ min: 1 })
    .withMessage("employeeId must be a valid integer"),

  param("rangeId")
    .isInt({ min: 1 })
    .withMessage("rangeId must be a valid integer"),
];

export const editWorkingHourRangeValidation = [
  param("employeeId").isInt({ min: 1 }).withMessage("Invalid employee ID"),

  param("rangeId").isInt({ min: 1 }).withMessage("Invalid range ID"),

  body("startDate")
    .notEmpty()
    .withMessage("startDate is required")
    .isISO8601()
    .withMessage("startDate must be a valid date"),

  body("endDate")
    .notEmpty()
    .withMessage("endDate is required")
    .isISO8601()
    .withMessage("endDate must be a valid date"),

  body("slots").custom((value) => {
    const validDays = [
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
      "SUNDAY",
    ];

    if (typeof value !== "object" || Array.isArray(value)) {
      throw new Error("slots must be an object");
    }

    for (const day in value) {
      if (!validDays.includes(day.toUpperCase())) {
        throw new Error(`Invalid weekday: ${day}`);
      }

      const slotArray = value[day];
      if (!Array.isArray(slotArray)) {
        throw new Error(`${day} must be an array`);
      }

      for (const slot of slotArray) {
        if (
          typeof slot !== "object" ||
          !slot.startTime ||
          !slot.endTime ||
          slot.startTime >= slot.endTime
        ) {
          throw new Error(`Invalid slot in ${day}`);
        }
      }
    }

    return true;
  }),
];

export const cloneExistingWorkingHourRangeValidation = [
  param("employeeId").isInt({ min: 1 }).withMessage("Invalid employee ID"),
  param("rangeId").isInt({ min: 1 }).withMessage("Invalid range ID"),
  body("startDate")
    .notEmpty()
    .withMessage("startDate is required")
    .isISO8601()
    .withMessage("startDate must be a valid date"),

  body("endDate")
    .notEmpty()
    .withMessage("endDate is required")
    .isISO8601()
    .withMessage("endDate must be a valid date"),
]
