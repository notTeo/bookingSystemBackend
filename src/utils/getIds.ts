import { AppError } from "./errors";

export const getShopId = (req: any): number => {
    if (!req.shop?.id || typeof req.shop.id !== "number") {
      throw new AppError("Invalid shop ID", 401);
    }
    return req.shop.id;
  };
  
  export const getUserId = (req: any): number => {
    if (!req.user?.id || typeof req.user.id !== "number") {
      throw new AppError("Invalid user ID", 401);
    }
    return req.user.id;
  };