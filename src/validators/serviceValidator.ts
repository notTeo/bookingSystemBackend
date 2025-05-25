import { body, param } from "express-validator";

export const createServiceValidation = [
  body("name")
    .trim()
    .notEmpty().withMessage("Service name is required")
    .isLength({ max: 100 }).withMessage("Service name must be under 100 characters"),

  body("duration")
    .notEmpty().withMessage("Duration is required")
    .isInt({ min: 5 }).withMessage("Duration must be at least 5 minutes"),

  body("price")
    .notEmpty().withMessage("Price is required")
    .isFloat({ min: 0 }).withMessage("Price must be a positive number"),
];

export const deleteServiceValidation = [
  param("serviceId")
    .isInt({ min: 1 }).withMessage("Invalid service ID"),
];

export const removeServiceFromEmployeeValidation = [
  param("employeeId")
    .isInt({ min: 1 }).withMessage("Invalid employee ID"),

  param("serviceId")
    .isInt({ min: 1 }).withMessage("Invalid service ID"),
];
