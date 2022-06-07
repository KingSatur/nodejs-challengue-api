import { Router } from 'express';
import { updateUserHandler } from '../controller/user.controller';
import { AuthenticationMiddleware } from '../middleware/auth.middleware';
import { PermissionMiddleware } from '../middleware/permission.middleware';

const userRouter: Router = Router();

userRouter.put(
  '/:id',
  [AuthenticationMiddleware.jwt, PermissionMiddleware.onlySameUserCanPerformOperation],
  updateUserHandler
);

export default userRouter;
