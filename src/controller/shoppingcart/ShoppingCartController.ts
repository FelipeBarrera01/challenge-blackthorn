import { ShoppingCartService } from "./../../service/ShoppingCartService";

export class ShoppingCartController {
  private shoppingCartService: ShoppingCartService;

  constructor(shoppingCartService: ShoppingCartService) {
    this.shoppingCartService = shoppingCartService;
  }

  async getAllShoppingCart(req: any, res: any) {
    return await this.shoppingCartService.getAllShoppingCart(res);
  }

  async getShoppingCartById(id: string, res: any) {
    return await this.shoppingCartService.getShoppingCartById(id, res);
  }

  async saveShoppingCart(req: any, res: any) {
    return await this.shoppingCartService.saveShoppingCart(req, res);
  }
}
