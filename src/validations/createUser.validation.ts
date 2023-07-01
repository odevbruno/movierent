import { NextFunction, Request, Response } from "express";

const { check, validationResult } = require("express-validator");

const validateRequestUser = [
  check("name").notEmpty().withMessage("Name is required"),
  check("phone").notEmpty().withMessage("Phone is required"),
  check("email").isEmpty().withMessage("Email can be empty"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
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

export default validateRequestUser;
