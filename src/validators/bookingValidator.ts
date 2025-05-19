import { param, query } from 'express-validator';

export const availableSlotsForAllEmployeesValidation = [
  query("date")
    .notEmpty()
    .withMessage("Date is required")
    .isISO8601()
    .withMessage("Date must be in YYYY-MM-DD format"),

  query("serviceId")
    .notEmpty()
    .withMessage("Service ID is required")
    .isInt({ min: 1 })
    .withMessage("Service ID must be a valid integer"),
];

export const availableSlotsValidation = [
  param('employeeId')
    .isInt({ min: 1 })
    .withMessage('Invalid barber/employee ID'),

  query('date')
    .notEmpty()
    .withMessage('Date is required')
    .isISO8601()
    .withMessage('Date must be in YYYY-MM-DD format'),

  query('serviceId')
    .notEmpty()
    .withMessage('Service ID is required')
    .isInt({ min: 1 })
    .withMessage('Service ID must be a valid integer')
];
