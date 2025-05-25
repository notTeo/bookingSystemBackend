import { body, param } from "express-validator";

export const createEmployeeValidation = [
  body("name")
    .trim()
    .notEmpty().withMessage("Name is required"),

  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Email must be a valid email address"),

  body("password")
    .trim()
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
];

export const deleteEmployeeValidation = [
  param("employeeId")
    .isInt({ min: 1 }).withMessage("Invalid employee ID"),
];

export const updateEmployeeValidation = [
  param("employeeId")
    .isInt({ min: 1 }).withMessage("Invalid employee ID"),

  body("name")
    .optional()
    .trim()
    .notEmpty().withMessage("Name cannot be empty"),

  body("email")
    .optional()
    .trim()
    .isEmail().withMessage("Email must be a valid email address"),

  body("password")
    .optional()
    .trim()
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
];

export const getEmployeeByIdValidation = [
  param("employeeId")
    .isInt({ min: 1 }).withMessage("Invalid employee ID"),
];

export const assignServicesValidation = [
  param("employeeId")
    .isInt({ min: 1 }).withMessage("Invalid employee ID"),

  body("serviceIds")
    .isArray({ min: 1 }).withMessage("serviceIds must be a non-empty array"),

  body("serviceIds.*")
    .isInt({ min: 1 }).withMessage("Each service ID must be a positive integer"),
];

export const toggleEmployeeActiveValidation = [
  param("employeeId")
    .isInt({ min: 1 }).withMessage("Invalid employee ID"),

  body("isActive")
    .notEmpty().withMessage("isActive is required")
    .isBoolean().withMessage("isActive must be true or false"),
];
