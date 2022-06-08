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
 * /auth/login:
 *  post:
 *   summary: Return tasks list
 *   tags: [Task]
 *   responses:
 *    200:
 *     description: The list of tasks
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *          $ref: '#/components/schemas/Task'
 */
authRouter.post('/login', login);

/**
 * @swagger
 * /auth/register:
 *  post:
 *   summary: Register an user
 *   tags: [Auth]
 *   responses:
 *    200:
 *     description: The user token to log in
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *          $ref: '#/components/schemas/Task'
 */
authRouter.post('/register', registerUser);

export default authRouter;
