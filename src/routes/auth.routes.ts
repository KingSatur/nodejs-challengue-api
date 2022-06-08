import { Router } from 'express';
import { login, registerUser } from '../controller/auth.controller';

const authRouter: Router = Router();

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Auth endpoints
 */

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
 *         role:
 *           type: string
 *           description: user password to log in
 *       example:
 *         email: user@email.com
 *         password: 12312312332
 *         firstName: Pher
 *         lastName: Johnson
 *         role: CUSTOMER
 */

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new book
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /auth/login:
 *  post:
 *   summary: Log in an user
 *   tags: [Auth]
 *   requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginDto'
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
authRouter.post('/login', login);

/**
 * @swagger
 * /auth/register:
 *  post:
 *   summary: Register an user
 *   tags: [Auth]
 *   requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterUserDto'
 *   responses:
 *    200:
 *     description: User successfully created
 *     content:
 *      application/json:
 *       schema:
 *          $ref: '#/components/schemas/ApiResponse'
 *    500:
 *     description: Internal error
 *     content:
 *      application/json:
 *       schema:
 *          $ref: '#/components/schemas/ApiResponse'
 */
authRouter.post('/register', registerUser);

export default authRouter;
