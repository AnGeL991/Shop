import { Document } from 'mongoose';

export default interface IProduct extends Document {
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
