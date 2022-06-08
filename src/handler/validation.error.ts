import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { ApplicationError } from '../dto/error.dto';

export default function ValidationError(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new ApplicationError('Invalid request', 400));
  }
  next();
}
