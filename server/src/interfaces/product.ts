import { Document, Model } from 'mongoose';

export interface IProduct extends Document {
  title: string;
  image: string;
  price: number;
  discount: number;
  time: string;
  amount: number;
  color?: string;
  description: string;
  category: string;
  tags?: Array<string>;
}

export interface IProductModel extends Model<IProduct> {
  createNewFromRequestBody(product: IProduct): Promise<void>;
  findAllProduct(): Promise<void>;
  findByCategory(category: string): Promise<void>;
}
