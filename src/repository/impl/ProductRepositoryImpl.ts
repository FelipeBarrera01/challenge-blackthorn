import { Product, ProductAttrs } from '../../entity/Product';
import { ProductRepository } from './../ProductRepository';




export class ProductRepositoryImpl implements ProductRepository{

    async getAllProducts(): Promise<any> {
        return await Product.find({});
    }
    async saveProducts (products: ProductAttrs[]): Promise<any> {
       return await Product.create(products);
    }

}