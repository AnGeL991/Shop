import { Document, Model } from 'mongoose';
import { IProduct } from './product';

export interface IOrder extends Document {
  id: string;
  paymentStatus: {
    method: string;
    paid: boolean;
    id: string;
  };
  comment: string;
  deliveryCost: {
    methodPayment: string;
    cost: number;
  };
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
  confirmPayment(id: string): Promise<void>;
}
