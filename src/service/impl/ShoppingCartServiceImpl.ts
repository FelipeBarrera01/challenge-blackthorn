import { StatusCode } from "./../../dto/StatusCode";
import { CartHelper } from "./../../utils/CartHelper/CartHelper";
import { CartAttrs } from "./../../entity/Cart";
import { ResponseEntity } from "../../dto/ResponseEntity";
import { CartRepository } from "./../../repository/CartRepository";
import { ShoppingCartService } from "./../ShoppingCartService";

export class ShoppingCartServiceImpl implements ShoppingCartService {
  cartRepository: CartRepository;
  responseEntity: ResponseEntity;

  constructor(cartRepository: CartRepository) {
    this.cartRepository = cartRepository;
    this.responseEntity = new ResponseEntity();
  }

  async getAllShoppingCart(res: any): Promise<any> {
    try {
      const carts = await this.cartRepository.getAllShoppingCart();
      return this.responseEntity
        .setMessage("OK!")
        .setObject(carts)
        .setResponse(res)
        .setStatusCode(StatusCode.OK)
        .build();
    } catch (error) {
      console.log(error);
      return this.responseEntity
        .setMessage("Something has failed!")
        .setObject([])
        .setResponse(res)
        .build();
    }
  }
  async getShoppingCartById(id: string, res: any): Promise<any> {
    try {
      const cart = await this.cartRepository.getShoppingCartById(id);
      if (cart) {
        return this.responseEntity
          .setMessage("OK!")
          .setObject(cart)
          .setResponse(res)
          .setStatusCode(StatusCode.OK)
          .build();
      }
      return this.responseEntity
        .setMessage(`Not found! -> ${id}`)
        .setObject([])
        .setResponse(res)
        .setStatusCode(StatusCode.NOT_FOUND)
        .build();
    } catch (error) {
      console.log(error);
      return this.responseEntity
        .setMessage("Something has failed!")
        .setObject([])
        .setResponse(res)
        .build();
    }
  }

  async saveShoppingCart(req: any, res: any): Promise<any> {
    try {
      const cartBody: CartAttrs = CartHelper.calculateCart(req);
      const cartSaved = await this.cartRepository.saveShoppingCart(cartBody);
      return this.responseEntity
        .setMessage("Created!")
        .setObject(cartSaved)
        .setResponse(res)
        .setStatusCode(StatusCode.CREATED)
        .build();
    } catch (error) {
      console.log(error);
      return this.responseEntity
        .setMessage(`Something has failed!`)
        .setObject([])
        .setResponse(res)
        .build();
    }
  }
}
