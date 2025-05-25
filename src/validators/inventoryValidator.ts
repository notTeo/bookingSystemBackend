import { body, param } from "express-validator";

export const createInventoryItemValidation = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("quantity")
    .notEmpty()
    .withMessage("quantity is required")
    .isInt({ min: 0 })
    .withMessage("Quantity must be a positive integer"),
];

export const updateInventoryItemValidator = [
    param("itemId")
      .isInt({ min: 1 }).withMessage("Invalid item ID"),
  
    body("name")
      .optional()
      .trim()
      .notEmpty().withMessage("Name cannot be empty")
      .isLength({ max: 100 }).withMessage("Name must be under 100 characters"),
  
    body("quantity")
      .optional()
      .isInt({ min: 0 }).withMessage("Quantity must be a positive integer"),
  ];
  
  export const deleteInventoryItemValidator = [
    param("itemId")
      .isInt({ min: 1 }).withMessage("Invalid item ID"),
  ];