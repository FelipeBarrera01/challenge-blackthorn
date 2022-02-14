import { ProductAttrs } from "../../entity/Product";
import { CartAttrs } from "./../../entity/Cart";

export class CartHelper {
 static calculateCart(req: any) {
    const products: ProductAttrs[] = req.products;
    const subtotal: number = products
      .map((product) => product.price)
      .reduce((previousValue, currentValue) => previousValue + currentValue);

    const discounts = (subtotal * 5) / 100;
    const taxes = (subtotal * 10) / 100;  
    const total = (subtotal + taxes) - discounts;

    const cart: CartAttrs = {
        subtotal,
        discounts,
        total,
        products,
        taxes,
    };
    return cart;
  }
}
