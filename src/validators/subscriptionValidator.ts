import { body } from "express-validator";

export const updateSubscriptionValidator = [
  body("subscription")
    .isString()
    .withMessage("Subscription must be a string")
    .isIn(["BASIC", "PRO", "PREMIUM"])
    .withMessage("Subscription must be one of: BASIC, PRO, PREMIUM"),
];
