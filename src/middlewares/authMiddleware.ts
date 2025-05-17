import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { sendErrorResponse } from '../utils/responses';

interface AuthPayload {
  userId: number;
  role: string;
}

interface AuthenticatedRequest extends Request {
  user?: AuthPayload;
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return sendErrorResponse(res, 'Missing or invalid token', 401);
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as AuthPayload;
    (req as AuthenticatedRequest).user = decoded;
    next();
  } catch {
    return sendErrorResponse(res, 'Invalid token', 403);
  }
};

export const authorizeOwner = (req: Request, res: Response, next: NextFunction) => {
  const user = (req as AuthenticatedRequest).user;

  if (user?.role !== 'BARBER_OWNER') {
    return sendErrorResponse(res, 'Forbidden: only BarberOwners allowed', 403);
  }

  next();
};
