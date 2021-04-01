import { Request, Response } from 'express';
import { config } from '../config';
import { getProductToPayment, prepareProdutToPayment } from '../utils';
import Stripe from 'stripe';

const stripe = new Stripe(config.server.Stripe.secret, {
  apiVersion: '2020-08-27',
  typescript: true
});

export const checkoutSesion = async (req: Request, res: Response) => {
  try {
    const { items, email, deliveryCost } = req.body;
    console.log(items);
    const line = await getProductToPayment(items);
    console.log(line);
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
      res.send({ id: session.id });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export const webhookHandler = async (req: Request, res: Response) => {
  const sig = req.headers['stripe-signature']!;
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, '');
  } catch (err) {
    console.log(`❌ Error message: ${err.message}`);
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
  console.log('✅ Success:', event.id);

  if (event.type === 'payment_intent.succeeded') {
    const stripeObject: Stripe.PaymentIntent = event.data.object as Stripe.PaymentIntent;
    console.log(`💰 PaymentIntent status: ${stripeObject.status}`);
  } else if (event.type === 'charge.succeeded') {
    const charge = event.data.object as Stripe.Charge;
    console.log(`💵 Charge id: ${charge.id}`);
  } else {
    console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
  }
  res.json({ received: true });
};
