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

/**
 * @swagger
 * tags:
 *  name: Product
 *  description: Product endpoints
 */

/**
 * @swagger
 * /product/inventary:
 *  post:
 *   summary: Add product to inventory
 *   tags: [Product]
 *   requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/'
 *   responses:
 *    200:
 *     description: The list of tasks
 *     content:
 *      application/json:
 *       schema:
 *          $ref: '#/components/schemas/ApiResponse'
 *    401:
 *     description: Bad credentials
 *     content:
 *      application/json:
 *       schema:
 *          $ref: '#/components/schemas/ApiResponse'
 */
productRouter.post(
  '/inventary/',
  AuthenticationMiddleware.jwt,
  PermissionMiddleware.onlyAdminCanPerformOperation,
  addProductHandler
);

/**
 * @swagger
 * /product/inventary:
 *  get:
 *   summary: get products from inventory
 *   tags: [Product]
 *   requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/'
 *   responses:
 *    200:
 *     description: The list of tasks
 *     content:
 *      application/json:
 *       schema:
 *          $ref: '#/components/schemas/ApiResponse'
 *    401:
 *     description: Bad credentials
 *     content:
 *      application/json:
 *       schema:
 *          $ref: '#/components/schemas/ApiResponse'
 */
productRouter.get(
  '/inventary/',
  AuthenticationMiddleware.jwt,
  PermissionMiddleware.onlyAdminCanPerformOperation,
  listProductsHandler
);

productRouter.post('/shopping-cart/', AuthenticationMiddleware.jwt, addProductHandler);

/**
 * @swagger
 * /product/inventary:
 *  get:
 *   summary: get products from inventory
 *   tags: [Product]
 *   requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/'
 *   responses:
 *    200:
 *     description: The list of tasks
 *     content:
 *      application/json:
 *       schema:
 *          $ref: '#/components/schemas/ApiResponse'
 *    401:
 *     description: Bad credentials
 *     content:
 *      application/json:
 *       schema:
 *          $ref: '#/components/schemas/ApiResponse'
 */
productRouter.get('/', AuthenticationMiddleware.jwt, listProductsHandler);

/**
 * @swagger
 * /product/inventary/:id:
 *  put:
 *   summary: update product quantity
 *   tags: [Product]
 *   parameters:
 *       - in : path
 *         name: id
 *         description: user id
 *         schema:
 *           type: integer
 *         required: true
 *   requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/'
 *   responses:
 *    200:
 *     description: The list of tasks
 *     content:
 *      application/json:
 *       schema:
 *          $ref: '#/components/schemas/ApiResponse'
 *    401:
 *     description: Bad credentials
 *     content:
 *      application/json:
 *       schema:
 *          $ref: '#/components/schemas/ApiResponse'
 */
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
