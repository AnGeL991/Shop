import { Request, Response } from 'express';
import Order from '../models/order';
import { errorHandler } from '../utils';

export const addOrder = (req: Request, res: Response) => {
  errorHandler(res, Order.createNewFromRequestBody(req.body), 200, 500);
};
