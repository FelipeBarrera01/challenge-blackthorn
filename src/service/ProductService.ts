export interface ProductService {
  getAllProducts(res: any): Promise<any>;
  saveProduct(req: any, res: any): Promise<any>;
}
