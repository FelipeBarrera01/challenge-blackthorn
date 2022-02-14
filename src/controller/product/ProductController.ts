import { ProductService } from './../../service/ProductService';


export class ProductController{

    private productService: ProductService;

    constructor(productService: ProductService) {
      this.productService = productService;
    }
    async getAllProducts (req: any, res: any) {
        return await this.productService.getAllProducts(res);
    }

    async saveShoppingCart (req: any, res: any){
        return await this.productService.saveProduct(req, res);
      };
}