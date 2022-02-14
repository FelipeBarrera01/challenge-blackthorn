import { CartAttrs } from './../entity/Cart';


export interface ShoppingCartService{

    getAllShoppingCart(res: any): Promise<any>;
    getShoppingCartById(id: string, res: any): Promise<any>;
    saveShoppingCart(req: any, res: any): Promise<any>;

}

