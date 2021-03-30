import { Request, Response } from 'express';
import Product from '../models/product';
import { errorHandler } from '../utils';

export const addProduct = (req: Request, res: Response) => {
  errorHandler(res, Product.createNewFromRequestBody(req.body), 201, 500);
};

export const getAllProduct = async (req: Request, res: Response) => {
  errorHandler(res, Product.findAllProduct(), 200, 500);
};
