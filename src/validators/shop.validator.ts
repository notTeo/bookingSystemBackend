import { body } from "express-validator";

export const createShopValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Shop name is required")
    .isLength({ max: 100 })
    .withMessage("Shop name too long"),

  body("openingHours")
    .isArray({ min: 1 })
    .withMessage("Opening hours must be an array"),

  body("openingHours.*.dayOfWeek")
    .isIn([
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
      "SUNDAY",
    ])
    .withMessage("Invalid day of week"),

  body("openingHours.*.openTime")
    .optional()
    .optional({ nullable: true })
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .withMessage("Invalid open time format (HH:MM)"),

  body("openingHours.*.closeTime")
    .optional()
    .optional({ nullable: true })
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .withMessage("Invalid close time format (HH:MM)"),

  body("openingHours.*.isClosed")
    .optional()
    .isBoolean()
    .withMessage("isClosed must be boolean"),
];