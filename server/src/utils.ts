import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import { config } from './config';
import Product from './models/product';
import { IItems } from './interfaces/stripe';
import { IProduct } from './interfaces/product';

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

export async function errorHandler(res: Response, toRun: any, successStatus: number, errorStatus: number, optionalBody?: any) {
  try {
    const result = await toRun;
    return res.status(successStatus).json({
      result: result,
      optionalBody
    });
  } catch (error) {
    return res.status(errorStatus).json({
      message: error.message,
      error
    });
  }
}
export const getProductToPayment = async (items: Array<IItems>) => {
  const ArrayId = items.map((el) => el.id);
  return await Product.find({ _id: [...ArrayId] });
};
export const prepareProdutToPayment = (items: Array<IItems>, line: IProduct[], currency: string) => {
  const line_items = line.map((el) => {
    const price = Math.round((el.price - (el.price * el.discount) / 100) * 100);
    const id = el.id;
    const match = items.map((el) => (el.id === id ? el.amount : 1))[0];
    return {
      name: el.title,
      currency: currency,
      quantity: match,
      amount: price,
      images: [`${el.image}`]
    };
  });
  return line_items;
};
