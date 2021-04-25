import { Schema, model } from 'mongoose';
import { IOrder, IOrderModel } from '../interfaces/order';
import { ProductSchema } from './product';

const OrderSchema: Schema = new Schema({
  id: { type: String || Number, required: true },
  paymentStatus: {
    method: { type: String },
    paid: { type: Boolean },
    id: { type: String }
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
  totalPayment: { type: Number, default: 0 },
  regulations: { type: Boolean, required: true },
  products: [ProductSchema],
  confirm: { type: Boolean, default: false }
});

OrderSchema.statics.createNewFromRequestBody = async function (props, id) {
  try {
    const newOrder = new this(props);
    newOrder.id = id;
    return await newOrder.save();
  } catch (err) {
    throw new Error(err.message);
  }
};

OrderSchema.statics.getLength = async function () {
  try {
    return await this.countDocuments();
  } catch (err) {
    throw new Error(err.message);
  }
};
OrderSchema.statics.confirmOrder = async function (id) {
  try {
    return await this.findOneAndUpdate({ id }, { confirm: true });
  } catch (err) {
    throw new Error(err.message);
  }
};

const OrderModel = model<IOrder, IOrderModel>('Order', OrderSchema);
export default OrderModel;
