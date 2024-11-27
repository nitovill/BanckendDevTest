import { Request, Response, NextFunction } from "express";
import { body, validationResult, ValidationChain } from "express-validator";

export const campaignValidator: ValidationChain[] = [
  body("name")
    .isString()
    .withMessage("El campo 'name' debe ser un string.")
    .notEmpty()
    .withMessage("El campo 'name' es obligatorio."),
];

export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
};
