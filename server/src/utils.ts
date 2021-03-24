import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import { config } from './config';
export const Validate = (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = errors.array().map((error) => error.msg)[0];
    return res.status(422).json({
      error
    });
  }
  return;
};

export const CreateToken = (body: any, time: string | number) => {
  return jwt.sign(body, config.server.token.secret, { expiresIn: time });
};
