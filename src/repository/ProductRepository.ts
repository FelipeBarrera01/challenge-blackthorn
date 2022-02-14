import { ProductAttrs } from './../entity/Product';


export interface ProductRepository{

    getAllProducts(): Promise<any>;

    saveProducts(products: ProductAttrs[]): Promise<any>;
    
}