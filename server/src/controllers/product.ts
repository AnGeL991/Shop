import { Request, Response } from 'express';
import Product from '../models/product';
import { errorHandler } from '../utils';

export const addProduct = (req: Request, res: Response) => {
  errorHandler(res, Product.createNewFromRequestBody(req.body));
};

export const getAllProduct = (req: Request, res: Response) => {
  errorHandler(res, Product.findAllProduct());
};

export const addComment = (req: Request, res: Response) => {
  const { id, comment } = req.body;
  errorHandler(res, Product.addComment(id, comment));
};
export const getProductById = (req: Request, res: Response) => {
  const { wishId } = req.body;
  errorHandler(res, Product.find({ _id: [...wishId] }));
};
