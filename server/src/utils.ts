import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import { config } from './config';
import Product from './models/product';
import { IItems } from './interfaces/stripe';
import { IProduct } from './interfaces/product';
import Order from './models/order';
import Stripe from 'stripe';

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

export const ResponseProcessor = (res: Response) => {
  const sendError = (message: string | object) => {
    res.status(500).json(message);
  };
  const sendResult = (message: string | object) => {
    res.status(200).json(message);
  };
  return { sendError, sendResult };
};

export async function errorHandler(res: Response, toRun: any, optionalBody?: any) {
  try {
    const result = await toRun;
    return ResponseProcessor(res).sendResult({ result, optionalBody });
  } catch (error) {
    return ResponseProcessor(res).sendError({ message: error.message, error });
  }
}

export const getProductToPayment = async (items: Array<IItems>) => {
  const ArrayId = items.map((el) => el.id);
  return await Product.find({ _id: [...ArrayId] });
};

export const prepareProdutToPayment = (items: Array<IItems>, line: IProduct[], currency: string) => {
  const line_items = line.map((el) => {
    const price = Math.round((el.price - (el.price * el.discount) / 100) * 100);
    const { id } = el;

    const match = items.filter((el) => el.id === id)[0];
    return {
      name: el.title,
      currency: currency,
      quantity: match.amount,
      amount: price,
      images: [`${el.image}`]
    };
  });
  return line_items;
};

export const prepareProductToOrder = (items: IProduct[]) => {
  const product = items.map((el) => {
    const price = (el.price - (el.price * el.discount) / 100).toFixed(2);
    return {
      title: el.title,
      category: el.category,
      img: el.image,
      amount: el.amount,
      currency: 'zł.',
      price
    };
  });
  return product;
};

export const prepareTotalPrice = (items: IProduct[]) => {
  return items.reduce((total, item) => {
    return total + (item.price - (item.price * item.discount) / 100) * item.amount;
  }, 0);
};

function randomChar(length: number) {
  const chars = 'abcdefghijklmnoprstuwyz';
  let result = '';
  for (let i = 0; i >= length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

export const prepareOrderId = async () => {
  const orderLenght = await Order.getLength();
  const exist = await Order.find({ id: `${orderLenght + 1}` });
  if (!exist) {
    return orderLenght + 1;
  } else {
    const result = randomChar(1);
    return orderLenght + 1 + result;
  }
};

export const createBase64 = () => {
  return Buffer.from(config.awsConfig.client_id + ':' + config.awsConfig.secretId).toString('base64');
};
export const stripeParams = (req: Request, email: string, line_items: any, shipping: string, coupon?: string) => {
  const params: Stripe.Checkout.SessionCreateParams = {
    payment_method_types: ['card', 'p24'],
    customer_email: email,
    line_items: [...line_items],
    mode: 'payment',
    success_url: `${req.headers.origin}/success/{CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/canceled`,
    discounts: [{ coupon }],
    shipping_rates: [shipping],
    shipping_address_collection: { allowed_countries: ['PL'] }
  };
  return params;
};

export const stripeCupon = async (accountStatus: number | string, stripe: Stripe) => {
  const coupons = await stripe.coupons.list({
    limit: 5
  });
  switch (accountStatus) {
    case 1:
      return coupons.data.find((el) => el.percent_off === 5);
    case 2:
      return coupons.data.find((el) => el.percent_off === 10);
    case 3:
      return coupons.data.find((el) => el.percent_off === 15);
    case 4:
      return coupons.data.find((el) => el.percent_off === 20);
    case 5:
      return coupons.data.find((el) => el.percent_off === 25);
    default:
      return;
  }
};
export const stripeCharge = async (delivery: any) => {
  switch (delivery) {
    case 29: {
      return 'shr_1Ikz0bAoyhrXLJPmh5nHMiA5';
    }
    case 0: {
      return 'shr_1Ikz2OAoyhrXLJPmB0RuRVlY';
    }
    case 30: {
      return 'shr_1Il8h6AoyhrXLJPmQtXVDGR7';
    }
    default: {
      return '';
    }
  }
};
