
import mongoose from 'mongoose';



export interface ProductAttrs {
    _id?: string;
    name: string;
    price: number;
  }
interface ProductModel extends mongoose.Model<ProductDoc> {
    build(attrs: ProductAttrs): ProductDoc;
  
  }
export interface ProductDoc extends mongoose.Document {
    name: string;
    price: number;
 
  }
export const ProductSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      },
    }
  );

const Product = mongoose.model<ProductDoc, ProductModel>('Product', ProductSchema);

export { Product };