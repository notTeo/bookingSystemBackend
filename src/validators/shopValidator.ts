import { body, param} from 'express-validator';

export const createShopValidation = [
  body('name')
    .notEmpty()
    .withMessage('Name is required'),

  body('address')
    .notEmpty()
    .withMessage('Address is required'),

  body("password")
  .isLength({ min: 6 })
  .withMessage("Password must be at least 6 characters"),
];

export const getShopByIdValidation = [
    param("shopId")
    .isInt({ min: 1 })
    .withMessage('Invalid shop ID'),
]

export const updateShopValidation = [
    param("shopId")
    .isInt({ min: 1 })
        .withMessage('Invalid shop ID'),
    body("name").optional().notEmpty().withMessage("Name cannot be empty"),
    body("address").optional().isEmail().withMessage("Address cannot be empty")
]

export const deleteShopValidation = [
    param("shopId")
    .isInt({ min: 1 })
        .withMessage('Invalid shop ID'),
]

export const loginToShopValidation = [
    body('shopId')
    .notEmpty()
    .withMessage('Service shopId is required'),

  body("password")
  .isLength({ min: 6 })
  .withMessage("Password must be at least 6 characters"),
]