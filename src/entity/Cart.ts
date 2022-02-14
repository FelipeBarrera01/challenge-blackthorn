import { Product, ProductAttrs } from "./Product";

import mongoose from "mongoose";

export interface CartAttrs {
  _id?: string;
  products: ProductAttrs[];
  subtotal: number;
  discounts: number;
  taxes: number;
  total: number;
}
interface CartModel extends mongoose.Model<CartDoc> {
  build(attrs: CartAttrs): CartDoc;
}
export interface CartDoc extends mongoose.Document {
  name: string;
  products: ProductAttrs[];
  subtotal: number;
  discounts: number;
  taxes: number;
  total: number;
}
const CartSchema = new mongoose.Schema(
  {
    products: [
      {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
    subtotal: {
      type: Number,
      required: true,
      min: 0,
    },
    discounts: {
      type: Number,
      required: true,
      min: 0,
    },
    taxes: {
      type: Number,
      required: true,
      min: 0,
    },
    total: {
      type: Number,
      required: true,
      min: 0,
    },
  }
);

const Cart = mongoose.model<CartDoc, CartModel>("Cart", CartSchema);

export { Cart };
