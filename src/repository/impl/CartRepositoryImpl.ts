import { CartAttrs } from './../../entity/Cart';
import { Cart } from "../../entity/Cart";
import { CartRepository } from '../CartRepository';
import { Product, ProductAttrs } from '../../entity/Product';

export class CartRepositoryImpl implements CartRepository{


    
    async getAllShoppingCart(): Promise<any> {
        return await Cart.find({}).populate('products');
    }
    async getShoppingCartById(id: string): Promise<any> {
        return await Cart.findOne({_id: id}).populate('products');
    }
    async saveShoppingCart(cart: CartAttrs): Promise<any> {
        const cartSaved = new Cart({...cart});
        return await cartSaved.save();
    }
    
}