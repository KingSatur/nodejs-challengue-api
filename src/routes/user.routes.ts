import { Router } from 'express';
import { createUserHandler, updateUserHandler } from '../controller/user.controller';

const userRouter: Router = Router();

userRouter.post('/', createUserHandler);
userRouter.put('/:id', updateUserHandler);

export default userRouter;
