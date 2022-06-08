import { Router } from 'express';
import authRouter from './auth.routes';
import productRouter from './product.routes';
import userRouter from './user.routes';

const router: Router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     TransactionDto:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: description of transaction proccess
 *         status:
 *           type: number
 *           description: http status operation
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
