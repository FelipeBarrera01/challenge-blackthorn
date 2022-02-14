import { EndPoint } from "./dto/EndPoint";
import { MethodsHttp } from "./dto/MethodsHttp";
import { ProductRepositoryImpl } from "./repository/impl/ProductRepositoryImpl";
import { ProductServiceImpl } from "./service/impl/ProductServiceImpl";
import { ProductController } from "./controller/product/ProductController";
import { ShoppingCartController } from "./controller/shoppingcart/ShoppingCartController";
import { ResponseEntity } from "./dto/ResponseEntity";
import { StatusCode } from "./dto/StatusCode";
import { CartRepositoryImpl } from "./repository/impl/CartRepositoryImpl";
import { ShoppingCartServiceImpl } from "./service/impl/ShoppingCartServiceImpl";

export const routes = async (req: any, res: any) => {
  const url_params = req.url.split("/").filter((path: string) => path);
  const method = req.method;
  const params = url_params[1];
  const body = method === MethodsHttp.POST ? await getBody(req) : [];

  switch (url_params[0]) {
    case EndPoint.SHOPPING_CART:
      const shoppingCartController = new ShoppingCartController(
        new ShoppingCartServiceImpl(new CartRepositoryImpl())
      );
      method === MethodsHttp.GET && params
        ? shoppingCartController.getShoppingCartById(params, res)
        : method === MethodsHttp.GET
        ? shoppingCartController.getAllShoppingCart(req, res)
        : method === MethodsHttp.POST
        ? shoppingCartController.saveShoppingCart(body, res)
        : getFailedResponse("Bad request", res, StatusCode.BAD_REQUEST);
        break;
    case EndPoint.PRODUCTS:
      const productController = new ProductController(
        new ProductServiceImpl(new ProductRepositoryImpl())
      );
      method === MethodsHttp.GET
        ? productController.getAllProducts(req, res)
        : method === MethodsHttp.POST
        ? productController.saveShoppingCart(body, res)
        : getFailedResponse("Bad request", res, StatusCode.BAD_REQUEST);
        break;
    default:
      getFailedResponse(`Not found!`, res, StatusCode.NOT_FOUND);
      break;
  }
};

const getFailedResponse = (
  message: string,
  res: any,
  statusCode: StatusCode
) => {
  return new ResponseEntity()
    .setMessage(message)
    .setObject([])
    .setResponse(res)
    .setStatusCode(statusCode)
    .build();
};

const getBody = async (req: any) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      req.on("data", (chunk: any) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        resolve(JSON.parse(body));
      });
    } catch (error) {
      reject(error);
    }
  });
};


