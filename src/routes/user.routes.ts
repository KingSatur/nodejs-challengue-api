import { Router } from 'express';
import { updateUserHandler } from '../controller/user.controller';
import { AuthenticationMiddleware } from '../middleware/auth.middleware';
import { PermissionMiddleware } from '../middleware/permission.middleware';
import ValidatorsMiddleware from '../middleware/validators.middleware';

const userRouter: Router = Router();

/**
 * @swagger
 * tags:
 *  name: User
 *  description: User profile endpoints
 */

/**
 * @swagger
 * /user/:id:
 *  put:
 *   summary: Edit user profile
 *   tags: [User]
 *   parameters:
 *       - in : path
 *         name: id
 *         description: user id
 *         schema:
 *           type: integer
 *         required: true
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

userRouter.put(
  '/:id',
  AuthenticationMiddleware.jwt,
  PermissionMiddleware.onlySameUserCanPerformOperation,
  ValidatorsMiddleware.validateEditUser,
  updateUserHandler
);

export default userRouter;
