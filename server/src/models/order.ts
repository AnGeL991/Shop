import { Schema, model } from 'mongoose';
import { IOrder, IOrderModel } from '../interfaces/order';
import { ProductSchema } from './product';

const OrderSchema: Schema = new Schema({
  id: { type: String },
  paymentStatus: {
    method: { type: String },
    paid: { type: Boolean }
  },
  comment: { type: String },
  deliveryCost: {
    methodPayment: { type: String },
    cost: { type: Number }
  },
  delivery: {
    firstName: { type: String, required: true },
    surName: { type: String, required: true },
    street: { type: String },
    postCode: { type: String },
    phone: { type: Number },
    email: { type: String },
    city: { type: String }
  },
  regulations: { type: Boolean, required: true },
  products: [ProductSchema]
});

OrderSchema.statics.createNewFromRequestBody = async function (props) {
  try {
    const newOrder = new this(props);
    await newOrder.save();
    return newOrder;
  } catch (err) {
    throw new Error(err.message);
  }
};

const OrderModel = model<IOrder, IOrderModel>('Order', OrderSchema);
export default OrderModel;
