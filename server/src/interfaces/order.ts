import { Document, Model } from 'mongoose';
import { IProduct } from './product';

export interface IOrder extends Document {
  id: string;
  status: string;
  comment: string;
  deliveryCost: number;
  delivery: {
    firstName: string;
    surName: string;
    street: string;
    postCode: string;
    phone: number;
    email: string;
    city: string;
  };
  totalPayment: number;
  regulations: boolean;
  products: Array<IProduct>;
}

export interface IOrderModel extends Model<IOrder> {
  createNewFromRequestBody(product: IOrder, id: number | string): Promise<any>;
  getLength(): Promise<number>;
  confirmOrder(id: string): Promise<void>;
}
