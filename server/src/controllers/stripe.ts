import { Request, Response } from 'express';
import { config } from '../config';
import { getProductToPayment, prepareProdutToPayment, ResponseProcessor } from '../utils';
import Stripe from 'stripe';

const stripe = new Stripe(config.server.Stripe.secret, {
  apiVersion: '2020-08-27',
  typescript: true
});

export const checkoutSesion = async (req: Request, res: Response) => {
  try {
    const { items, email, deliveryCost } = req.body;

    const line = await getProductToPayment(items);

    const delivery = {
      name: 'delivery',
      currency: 'pln',
      quantity: 1,
      amount: deliveryCost * 100,
      images: [`https://img.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148497067.jpg?size=626&ext=jpg`]
    };

    if (line) {
      const line_items = prepareProdutToPayment(items, line, 'pln');

      const params: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ['card', 'p24'],
        customer_email: email,
        line_items: [...line_items, delivery],
        mode: 'payment',
        success_url: `${req.headers.origin}/success/:{CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/canceled`
      };

      const session: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params);
      ResponseProcessor(res, 200, { id: session.id });
    }
  } catch (err) {
    ResponseProcessor(res, 500, { error: err.message });
  }
};
