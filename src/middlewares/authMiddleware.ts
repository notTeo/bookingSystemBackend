import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { sendErrorResponse } from "../utils/responses";

interface AuthPayload {
  userId: number;
  role: string;
  subscription: string;
}

interface AuthenticatedRequest extends Request {
  user?: AuthPayload;
}

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return sendErrorResponse(res, "Missing or invalid token", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as AuthPayload;
    (req as AuthenticatedRequest).user = decoded;
    next();
  } catch {
    return sendErrorResponse(res, "Invalid token", 403);
  }
};

export const authorizeSubscription = (subscriptions: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as AuthenticatedRequest).user;
    if (!user?.subscription) {
      return sendErrorResponse(res, "Unauthorized: no subscription found", 401);
    }
    if (!subscriptions.includes(user?.subscription)) {
      return sendErrorResponse(
        res,
        `Forbidden: only ${subscriptions.join(", ")} allowed`,
        403
      );
    }
    next();
  };
};

export const authorizeRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as AuthenticatedRequest).user;
    if (!user?.role) {
      return sendErrorResponse(res, "Unauthorized: no role found", 401);
    }
    if (!roles.includes(user?.role)) {
      return sendErrorResponse(
        res,
        `Forbidden: only ${roles.join(", ")} allowed`,
        403
      );
    }
    next();
  };
};
