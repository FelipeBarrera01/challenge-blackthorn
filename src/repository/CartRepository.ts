import { CartAttrs } from './../entity/Cart';


export interface CartRepository{

    getAllShoppingCart(): Promise<any>;
    getShoppingCartById(id: string): Promise<any>;
    saveShoppingCart(cart: CartAttrs): Promise<any>;
    
}