import { body, param, query } from 'express-validator';

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

export const createBookingValidation = [
  body('employeeId')
    .isInt({ min: 1 })
    .withMessage('employeeId must be a valid integer'),

  body('serviceId')
    .isInt({ min: 1 })
    .withMessage('serviceId must be a valid integer'),

  body('date')
    .isISO8601()
    .withMessage('date must be a valid ISO 8601 date (YYYY-MM-DD)'),

  body('time')
    .matches(/^([01]\d|2[0-3]):[0-5]\d$/)
    .withMessage('time must be in HH:mm format'),

  body('customer.name')
    .notEmpty()
    .withMessage('Customer name is required'),

  body('customer.phone')
    .notEmpty()
    .withMessage('Customer phone is required'),

  body('customer.email')
    .optional()
    .isEmail()
    .withMessage('Invalid email'),
];

export const deleteBookingValidation = [
  param('bookingId')
  .isInt({ min: 1 })
  .withMessage('Invalid booking ID'),
]
