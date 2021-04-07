import { Document, Model } from 'mongoose';
import { IProduct } from './product';

export interface IOrder extends Document {
  id: string;
  status: string;
  comment: string;
  deliveryCost: number;
  delivery: object;
  regulations: boolean;
  products: Array<IProduct>;
}
export interface IOrderModel extends Model<IOrder> {
  createNewFromRequestBody(product: IOrder, id: number | string): Promise<void>;
  getLength(): Promise<number>;
  confirmOrder(id: string): Promise<void>;
}
