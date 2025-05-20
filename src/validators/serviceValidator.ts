import { body, param } from 'express-validator';

export const createServiceValidation = [
  body('name')
    .notEmpty()
    .withMessage('Service name is required'),

  body('duration')
    .isInt({ min: 5 })
    .withMessage('Duration must be at least 5 minutes'),

  body('price')
    .isFloat({ min: 0 })
    .withMessage('Price must be a positive number'),
];

export const deleteServiceValidation = [
  param('serviceId')
    .isInt({ min: 1 })
    .withMessage('Invalid service ID'),
]

export const removeServiceFromEmployeeValdation = [
  param('employeeId')
    .isInt({ min: 1 })
    .withMessage('Invalid employee ID'),
  param('serviceId')
    .isInt({ min: 1 })
    .withMessage('Invalid service ID'),
]