import { Schema, model } from 'mongoose';
import { IProduct, IProductModel } from '../interfaces/product';

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
    star: { type: Number, default: 0 },
    category: { type: String, required: true },
    tags: { type: Array }
  },
  {
    timestamps: true
  }
);

ProductSchema.statics.createNewFromRequestBody = async function (props) {
  try {
    const newProduct = new this(props);
    await newProduct.save();
    return newProduct;
  } catch (err) {
    throw new Error(err.message);
  }
};

ProductSchema.statics.findByCategory = function (category) {
  return this.find({ category: category });
};
ProductSchema.statics.findAllProduct = async function () {
  try {
    return await this.find();
  } catch (err) {
    throw new Error(err.message);
  }
};

const ProductModel = model<IProduct, IProductModel>('Product', ProductSchema);

export default ProductModel;
