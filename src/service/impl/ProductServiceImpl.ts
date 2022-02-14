import { StatusCode } from "./../../dto/StatusCode";
import { ProductRepository } from "./../../repository/ProductRepository";
import { ResponseEntity } from "./../../dto/ResponseEntity";
import { ProductService } from "./../ProductService";

export class ProductServiceImpl implements ProductService {
  private productRepository: ProductRepository;
  private responseEntity: ResponseEntity;

  constructor(cartRepository: ProductRepository) {
    this.productRepository = cartRepository;
    this.responseEntity = new ResponseEntity();
  }

  async getAllProducts(res: any): Promise<any> {
    try {
      const products = await this.productRepository.getAllProducts();
      return this.responseEntity
        .setMessage("OK!")
        .setObject(products)
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
  async saveProduct(req: any, res: any): Promise<any> {
    try {
      const productsSaved = await this.productRepository.saveProducts(req);
      return this.responseEntity
        .setMessage("Created!")
        .setObject(productsSaved)
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
