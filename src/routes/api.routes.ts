import { Router } from 'express';
import authRouter from './auth.routes';
import productRouter from './product.routes';
import userRouter from './user.routes';

const router: Router = Router();

router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/product', productRouter);

export default router;
