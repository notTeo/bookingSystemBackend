import { body } from "express-validator";

export const registerValidation = [
  body("email").trim().isEmail().withMessage("Valid email is required"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  body("name").notEmpty().withMessage("Name is required"),
];

export const loginValidation = [
  body("email").trim().isEmail().withMessage("Valid email is required"),
  body("password").trim().notEmpty().withMessage("Password is required"),
];
