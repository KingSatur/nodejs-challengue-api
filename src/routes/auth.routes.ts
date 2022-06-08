import { Router } from 'express';
import { login, registerUser } from '../controller/auth.controller';
import validatorMiddleware from '../middleware/validators.middleware';

const authRouter: Router = Router();

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Auth endpoints
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
authRouter.post('/login', validatorMiddleware.validateLoginUser, login);

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
authRouter.post('/register', validatorMiddleware.validateRegisterUser, registerUser);

export default authRouter;
