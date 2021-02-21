import mongoose, { Schema } from 'mongoose';
import IProduct from '../interfaces/product';

const ProductSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0, required: true },
    time: { type: String, default: 'Realizacja 2 - 4 tygodnie', required: true },
    amount: { type: Number, default: 1, required: true },
    color: { type: String, default: null },
    description: { type: String, required: true },
    category: { type: String, required: true },
    tags: { type: Array }
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IProduct>('Product', ProductSchema);
