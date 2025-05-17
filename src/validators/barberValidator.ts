import { body, param } from "express-validator";

export const createBarberValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

export const deleteBarberValidation = [
  param("barberId").isInt({ min: 1 }).withMessage("Invalid barber ID"),
];

export const updateBarberValidation = [
  param("barberId").isInt({ min: 1 }).withMessage("Invalid barber ID"),
  body("name").optional().notEmpty().withMessage("Name cannot be empty"),
  body("email").optional().isEmail().withMessage("Valid email is required"),
  body("password")
    .optional()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

export const getBarberByIdValidation = [
  param("barberId").isInt({ min: 1 }).withMessage("Invalid barber ID"),
];

export const assignServicesValidation = [
  param("barberId").isInt({ min: 1 }).withMessage("Invalid barber ID"),
  body("serviceIds")
    .isArray({ min: 1 })
    .withMessage("Service IDs must be a non-empty array"),
  body("serviceIds.*")
    .isInt({ min: 1 })
    .withMessage("Each service ID must be a positive integer"),
];

export const toggleBarberActiveValidation = [
  param("barberId").isInt({ min: 1 }).withMessage("Invalid barber ID"),

  body("isActive").isBoolean().withMessage("isActive must be true or false"),
];
