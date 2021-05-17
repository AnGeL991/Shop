import { Request, Response } from 'express';
import User from '../models/user';
import { errorHandler } from '../utils';

export const updateOrder = (req: Request, res: Response) => {
  const { orderId } = req.body;
  errorHandler(res, User.updateOrder(res.locals.user, orderId));
};
export const updateWish = (req: Request, res: Response) => {
  const { wishId } = req.body;
  errorHandler(res, User.updateWish(res.locals.user, wishId));
};
export const removeWish = (req: Request, res: Response) => {
  const { wishId } = req.body;
  errorHandler(res, User.removeWish(res.locals.user, wishId));
};
export const updateStatus = (req: Request, res: Response) => {
  const { status } = req.body;
  errorHandler(res, User.updateStatus(res.locals.user, status));
};
export const updateAccount = (req: Request, res: Response) => {
  const { updates } = req.body;
  errorHandler(res, User.updateAccount(res.locals.user, updates));
};
