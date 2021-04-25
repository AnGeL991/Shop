import { Request, Response } from 'express';
import Product from '../models/product';
import { errorHandler } from '../utils';

export const addProduct = (req: Request, res: Response) => {
  errorHandler(res, Product.createNewFromRequestBody(req.body), 201, 500);
};

export const getAllProduct = (req: Request, res: Response) => {
  errorHandler(res, Product.findAllProduct(), 200, 500);
};

export const addComment = (req: Request, res: Response) => {
  const { id, comment } = req.body;
  errorHandler(res, Product.addComment(id, comment), 200, 500);
};
export const getProductById = (req: Request, res: Response) => {
  const { wishId } = req.body;
  errorHandler(res, Product.find({ _id: [...wishId] }), 200, 500);
};
