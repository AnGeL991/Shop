import { Request, Response } from 'express';
import User from '../models/user';
import { errorHandler } from '../utils';

export const updateOrder = (req: Request, res: Response) => {
  const { orderId } = req.body;
  errorHandler(res, User.updateOrder(res.locals.user, orderId), 200, 500);
};
export const updateWish = (req: Request, res: Response) => {
  const { id, wishId } = req.body;
  errorHandler(res, User.updateWish(id, wishId), 200, 500);
};
export const updateStatus = (req: Request, res: Response) => {
  const { status } = req.body;
  errorHandler(res, User.updateStatus(res.locals.user, status), 200, 500);
};
export const updateAccount = (req: Request, res: Response) => {
  const { updates } = req.body;
  console.log(updates);
  errorHandler(res, User.updateAccount(res.locals.user, updates), 200, 500);
};
