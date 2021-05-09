import { Request, Response } from 'express';
import Order from '../models/order';
import User from '../models/user';
import { ResponseProcessor, prepareOrderId, errorHandler } from '../utils';
import { EmailSender } from '../services/emailSender.services';

export const addOrder = async (req: Request, res: Response) => {
  try {
    const orderId = await prepareOrderId();
    const order = await Order.createNewFromRequestBody(req.body, orderId);
    EmailSender.sendEmailWithFullfilledOrder(req.body);
    ResponseProcessor(res, 200, { id: orderId, _id: order._id });
  } catch (err) {
    ResponseProcessor(res, 500, { error: err.message });
  }
};

export const confirmOrder = (req: Request, res: Response) => {
  const { id } = req.body;
  errorHandler(res, Order.confirmOrder(id), 200, 500);
};

export const getOrders = (req: Request, res: Response) => {
  const { ordersId } = req.body;
  errorHandler(res, Order.find({ _id: [...ordersId] }), 200, 500);
};
export const confirmPayment = (req: Request, res: Response) => {
  const { id } = req.body;
  errorHandler(res, Order.confirmPayment(id), 200, 500);
};
export const getOneOrder = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const user = await User.findById(res.locals.user);
    if (!user) return ResponseProcessor(res, 500, { message: "User does't exist" });
    const order = await Order.findOne({ id });
    if (!order) return ResponseProcessor(res, 500, { message: "Order does't exist" });
    const exist = user.ordersId.some((el) => order._id.toString() === el);
    if (exist) {
      return ResponseProcessor(res, 402, { message: 'You already have this order' });
    }
    if (user.email === order.delivery.email) {
      return ResponseProcessor(res, 200, { order });
    }
    return ResponseProcessor(res, 401, { message: 'This order does not belong to you' });
  } catch (err) {
    return ResponseProcessor(res, 500, { message: err.message });
  }
};
