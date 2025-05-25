import { body, param, query } from "express-validator";

export const availableSlotsForAllEmployeesValidation = [
  query("date")
    .trim()
    .notEmpty().withMessage("Date is required")
    .isISO8601({ strict: true }).withMessage("Date must be in YYYY-MM-DD format"),

  query("serviceId")
    .notEmpty().withMessage("Service ID is required")
    .isInt({ min: 1 }).withMessage("Service ID must be a valid integer"),
];

export const availableSlotsValidation = [
  param("employeeId")
    .isInt({ min: 1 }).withMessage("Invalid barber/employee ID"),

  query("date")
    .trim()
    .notEmpty().withMessage("Date is required")
    .isISO8601({ strict: true }).withMessage("Date must be in YYYY-MM-DD format"),

  query("serviceId")
    .notEmpty().withMessage("Service ID is required")
    .isInt({ min: 1 }).withMessage("Service ID must be a valid integer"),
];

export const createBookingValidation = [
  body("employeeId")
    .isInt({ min: 1 }).withMessage("Employee ID must be a valid integer"),

  body("serviceId")
    .isInt({ min: 1 }).withMessage("Service ID must be a valid integer"),

  body("date")
    .trim()
    .notEmpty().withMessage("Date is required")
    .isISO8601({ strict: true }).withMessage("Date must be a valid ISO 8601 format (YYYY-MM-DD)"),

  body("time")
    .notEmpty().withMessage("Time is required")
    .matches(/^([01]\d|2[0-3]):[0-5]\d$/).withMessage("Time must be in HH:mm format"),

  body("customer.name")
    .trim()
    .notEmpty().withMessage("Customer name is required"),

  body("customer.phone")
    .trim()
    .notEmpty().withMessage("Customer phone is required"),

  body("customer.email")
    .optional()
    .trim()
    .isEmail().withMessage("Customer email must be valid"),
];

export const changeBookingStatusValidation = [
  param("bookingId")
    .isInt({ min: 1 }).withMessage("Invalid booking ID"),
];
