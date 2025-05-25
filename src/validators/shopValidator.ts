import { body, param } from "express-validator";

export const createShopValidation = [
  body("name")
    .trim()
    .notEmpty().withMessage("Name is required"),

  body("address")
    .trim()
    .notEmpty().withMessage("Address is required"),

  body("password")
    .trim()
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
];

export const getShopByIdValidation = [
  param("shopId")
    .isInt({ min: 1 }).withMessage("Invalid shop ID"),
];

export const updateShopValidation = [
  param("shopId")
    .isInt({ min: 1 }).withMessage("Invalid shop ID"),

  body("name")
    .optional()
    .trim()
    .notEmpty().withMessage("Name cannot be empty"),

  body("address")
    .optional()
    .trim()
    .notEmpty().withMessage("Address cannot be empty"), 
];

export const deleteShopValidation = [
  param("shopId")
    .isInt({ min: 1 }).withMessage("Invalid shop ID"),
];

export const loginToShopValidation = [
  body("shopId")
    .notEmpty().withMessage("Shop ID is required"),

  body("password")
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
];
