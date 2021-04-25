import { Document, Model } from 'mongoose';

export interface IComment {
  name: string;
  body: string;
  email: string;
  star: number;
  date: Date;
}
export interface IProduct extends Document {
  title: string;
  image: string;
  images?: Array<string>;
  price: number;
  discount: number;
  time: string;
  amount: number;
  color?: string;
  description: string;
  category: string;
  comment?: Array<IComment>;
  tags?: Array<string>;
}

export interface IProductModel extends Model<IProduct> {
  createNewFromRequestBody(product: IProduct): Promise<void>;
  findAllProduct(): Promise<void>;
  findByCategory(category: string): Promise<void>;
  addComment(id: string, comment: IComment): Promise<void>;
}
