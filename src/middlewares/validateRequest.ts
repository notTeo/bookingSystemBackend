import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { sendErrorResponse } from '../utils/responses';

export const validateRequest = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const extracted = errors.array().map(err => err.msg).join(', ');
    sendErrorResponse(res, extracted, 400);
    return;
  }

    next();
};