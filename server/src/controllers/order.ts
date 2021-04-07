import { Request, Response } from 'express';
import Order from '../models/order';
import { prepareProductToOrder, prepareTotalPrice, prepareOrderId, errorHandler } from '../utils';
import sgMail from '@sendgrid/mail';
import { emailData, config } from '../config';

sgMail.setApiKey(config.sqMail.MAIL_KEY);

export const addOrder = async (req: Request, res: Response) => {
  const { delivery, deliveryCost, products } = req.body;
  const { email, firstName, surName, street, city, postCode, phone } = delivery;

  const orderId = await prepareOrderId();
  const product = prepareProductToOrder(products);
  const totalPrice = prepareTotalPrice(products);

  try {
    await Order.createNewFromRequestBody(req.body, orderId);
    const emailTemplate = emailData(email, 'd-75531c57feac454cb1f07207699f2791', {
      personalData: `${firstName} ${surName}`,
      street,
      city,
      postCode,
      email,
      phone,
      currency: 'zł.',
      subtotal: totalPrice.toFixed(2),
      delivery: deliveryCost.cost.toFixed(2),
      product,
      total: (totalPrice + deliveryCost.cost).toFixed(2),
      order: orderId
    });
    sgMail.send(emailTemplate);
    return res.status(200).json({ id: orderId });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const confirmOrder = (req: Request, res: Response) => {
  const { id } = req.body;
  errorHandler(res, Order.confirmOrder(id), 200, 500);
};
