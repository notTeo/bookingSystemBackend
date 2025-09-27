import {body} from 'express-validator'

export const updateSubscriptionValidation = [
  body("subscription")
    .isIn(["BASIC", "PRO", "PREMIUM"])
    .withMessage("Subscription must be BASIC, PRO, or PREMIUM"),
];