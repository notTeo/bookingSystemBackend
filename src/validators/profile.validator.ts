import {body} from 'express-validator'

export const updateOwnerProfileValidation = [
    body("name").optional().isString().isLength({ min: 2, max: 80 })
      .withMessage("Name must be 2–80 chars"),
    body("email").optional().isEmail().withMessage("Email must be valid"),
    // guard against forbidden fields
    body(["role","password","id"]).not().exists()
      .withMessage("Field not allowed to update"),
  ];