import { Request, Response } from 'express';
import { config } from '../config';
import User from '../models/user';
import { getProductToPayment, prepareProdutToPayment, ResponseProcessor, stripeParams, stripeCupon, stripeCharge } from '../utils';
import Stripe from 'stripe';

const stripe = new Stripe(config.server.Stripe.secret, {
  apiVersion: '2020-08-27',
  typescript: true
});

export const checkoutSesion = async (req: Request, res: Response) => {
  try {
    const { items, email, deliveryCost, id } = req.body;
    console.log(req.body);
    const line = await getProductToPayment(items);
    const shipping = await stripeCharge(deliveryCost);
    let coupon;
    if (id) {
      const user = await User.findById({ _id: id });
      if (user) {
        coupon = await stripeCupon(user.accountStatus, stripe);
      }
    }
    if (line) {
      const line_items = prepareProdutToPayment(items, line, 'pln');
      const params: Stripe.Checkout.SessionCreateParams = stripeParams(req, email, line_items, shipping, coupon?.id);
      const session: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params);
      ResponseProcessor(res).sendResult({ id: session.id });
    }
  } catch (err) {
    ResponseProcessor(res).sendError({ error: err.message });
  }
};
