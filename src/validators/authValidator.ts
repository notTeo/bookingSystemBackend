import { body } from "express-validator";

export const registerValidation = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be a valid email address"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return true;
  }),
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters long"),
];

export const loginValidation = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be a valid email address"),

  body("password").trim().notEmpty().withMessage("Password is required"),

  body("adminSecret").trim().notEmpty().withMessage("adminSecret is required"),
];

export const refreshAccessTokenValidator = [
  body("refreshToken")
    .trim()
    .notEmpty()
    .withMessage("RefreshToken is required")
    .isString()
    .withMessage("Refresh token must be a string"),
];
