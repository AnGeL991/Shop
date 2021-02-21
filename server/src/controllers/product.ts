import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Product from '../models/product';

const addProduct = (req: Request, res: Response, next: NextFunction) => {
  let { title, image, price, discount, amount, time, color, description, category, tags } = req.body;
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    title, 
    image, 
    price, 
    discount, 
    amount, 
    time, 
    color, 
    description, 
    category, 
    tags
  });

  return product
    .save()
    .then((result) => {
      return res.status(201).json({
        product: result
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error
      });
    });
};
const getAllProduct = (req: Request, res: Response, next: NextFunction) => {
  Product.find()
    .exec()
    .then((results) => {
      return res.status(200).json({
        product: results,
        count: results.length
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error
      });
    });
};

export default { getAllProduct, addProduct }