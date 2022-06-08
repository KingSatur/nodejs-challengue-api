import { Router } from 'express';
import {
  addProductHandler,
  listProductsHandler,
  purchaseQuantityHandler,
  updateProductQuantityHandler,
} from '../controller/product.controller';
import { AuthenticationMiddleware } from '../middleware/auth.middleware';
import { PermissionMiddleware } from '../middleware/permission.middleware';

const productRouter: Router = Router();

productRouter.post(
  '/inventary/',
  AuthenticationMiddleware.jwt,
  PermissionMiddleware.onlyAdminCanPerformOperation,
  addProductHandler
);
productRouter.get(
  '/inventary/',
  AuthenticationMiddleware.jwt,
  PermissionMiddleware.onlyAdminCanPerformOperation,
  listProductsHandler
);

productRouter.post('/shopping-cart/', AuthenticationMiddleware.jwt, addProductHandler);

productRouter.get('/', AuthenticationMiddleware.jwt, listProductsHandler);

productRouter.put(
  '/inventary/:id',
  AuthenticationMiddleware.jwt,
  PermissionMiddleware.onlyAdminCanPerformOperation,
  updateProductQuantityHandler
);

productRouter.post(
  '/purchase',
  AuthenticationMiddleware.jwt,
  PermissionMiddleware.onlyAdminCanPerformOperation,
  purchaseQuantityHandler
);

productRouter.post(
  '/purchase/customer',
  AuthenticationMiddleware.jwt,
  PermissionMiddleware.onlyAdminCanPerformOperation,
  purchaseQuantityHandler
);

export default productRouter;
