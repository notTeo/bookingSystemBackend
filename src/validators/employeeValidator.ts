import { body, param } from "express-validator";

export const createEmployeeValidation = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").trim().isEmail().withMessage("Valid email is required"),
  body("password").trim()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

export const deleteEmployeeValidation = [
  param("employeeId").isInt({ min: 1 }).withMessage("Invalid employee ID"),
];

export const updateEmployeeValidation = [
  param("employeeId").trim().isInt({ min: 1 }).withMessage("Invalid employee ID"),
  body("name").trim().optional().notEmpty().withMessage("Name cannot be empty"),
  body("email").trim().optional().isEmail().withMessage("Valid email is required"),
  body("password").trim()
    .optional()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

export const getEmployeeByIdValidation = [
  param("employeeId").isInt({ min: 1 }).withMessage("Invalid employee ID"),
];

export const assignServicesValidation = [
  param("employeeId").isInt({ min: 1 }).withMessage("Invalid employee ID"),
  body("serviceIds")
    .isArray({ min: 1 })
    .withMessage("Service IDs must be a non-empty array"),
  body("serviceIds.*")
    .isInt({ min: 1 })
    .withMessage("Each service ID must be a positive integer"),
];

export const toggleEmployeeActiveValidation = [
  param("employeeId").isInt({ min: 1 }).withMessage("Invalid employee ID"),

  body("isActive").isBoolean().withMessage("isActive must be true or false"),
];
