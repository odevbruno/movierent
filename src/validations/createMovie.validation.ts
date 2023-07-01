import { NextFunction, Request, Response } from "express";

const { check, validationResult } = require("express-validator");

const validateRequestMovie = [
  check("name").notEmpty().withMessage("Name is required"),
  check("release_date").notEmpty().withMessage("release_date is required"),
  check("price_rent").notEmpty().withMessage("price_rent is required"),
  check("duration_time").notEmpty().withMessage("duration_time is required"),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    console.log({
      errors,
    });

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export default validateRequestMovie;
