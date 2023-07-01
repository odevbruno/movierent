import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

const MiddlewareInterceptionError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }
  console.log(err);

  return res.status(500).json({
    message: err.message,
  });
};

export default MiddlewareInterceptionError;
