import { Router } from 'express';
import authRouter from './auth.routes';
import productRouter from './product.routes';
import userRouter from './user.routes';

const router: Router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     BookDto:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: book's title
 *         isbn:
 *           type: string
 *           description: book's isbn
 *         author:
 *           type: string
 *           description: book's author
 *         editorial:
 *           type: string
 *           description: book's editorial
 *     ProductDto:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: product name
 *         price:
 *           type: number
 *           description: product cost
 *         quantity:
 *           type: number
 *           description: product quantity
 *         code:
 *           type: string
 *           description: product code
 *         bookDto:
 *           type: BookDto
 *           description: product book data
 *     PurchaseByCustomerOutputDto:
 *       type: object
 *       properties:
 *         total:
 *           type: string
 *           description: purchased total cost
 *         product:
 *           type: ProductDto
 *           description: purchased product data
 *         quantity:
 *           type: number
 *           description: purchased quantity
 *     PurchaseByCustomerInputDto:
 *       type: object
 *       properties:
 *         productId:
 *           type: number
 *           description: product id to purchase
 *         quantity:
 *           type: number
 *           description: quantity to purchase
 *     PurchaseCreatedDto:
 *       type: object
 *       properties:
 *         price:
 *           type: string
 *           description: description of transaction proccess
 *         purchasedQuantity:
 *           type: number
 *           description: http status operation
 *         productId:
 *           type: number
 *           description: http status operation
 *     PurchaseDto:
 *       type: object
 *       properties:
 *         price:
 *           type: string
 *           description: description of transaction proccess
 *         quantity:
 *           type: number
 *           description: http status operation
 *     UpdateQuantityDto:
 *       type: object
 *       properties:
 *         newQuantity:
 *           type: number
 *           description: quantity to add
 *     UpdateQuantityProductDto:
 *       type: object
 *       properties:
 *         name:
 *           type: number
 *           description: quantity to add
 *         price:
 *           type: number
 *           description: quantity to add
 *         quantity:
 *           type: number
 *           description: quantity to add
 *         code:
 *           type: number
 *           description: quantity to add
 *         bookId:
 *           type: number
 *           description: quantity to add
 *     ApiResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: string
 *           description: user email to log in
 *         data:
 *           type: string
 *           description: user password to log in
 *         transactionData:
 *           type: string
 *           description: user password to log in
 *       example:
 *         email: user@email.com
 *         password: 12312312332
 *     TokenDto:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           description: Jwt token
 *     LoginDto:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: user email to log in
 *         password:
 *           type: string
 *           description: user password to log in
 *       example:
 *         email: user@email.com
 *         password: 12312312332
 *     RegisterUserDto:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - firstName
 *         - lastName
 *         - role
 *       properties:
 *         email:
 *           type: string
 *           description: user email to log in
 *         password:
 *           type: string
 *           description: user password to log in
 *         firstName:
 *           type: string
 *           description: user password to log in
 *         lastName:
 *           type: string
 *           description: user password to log in
 *       example:
 *         email: user@email.com
 *         password: 12312312332
 *         firstName: Pher
 *         lastName: Johnson
 */

router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/product', productRouter);

export default router;
