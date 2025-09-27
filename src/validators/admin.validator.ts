import { param } from "express-validator";

export const ownerIDValidation = [
    param("ownerID")
      .isInt({ min: 1 }).withMessage("Invalid owner ID"),
];
  
export const  customerIDValidation = [
    param("customerID")
      .isInt({ min: 1 }).withMessage("Invalid customer ID"),
  ];