import { Router } from 'express';
import { AuthenticationMiddleware } from '../middleware/auth.middleware';

const productRouter: Router = Router();

productRouter.post('/inventary/', AuthenticationMiddleware.jwt);
productRouter.route('/inventary').all(AuthenticationMiddleware.jwt).get().post();
productRouter.get('/inventary/', AuthenticationMiddleware.jwt);
productRouter.put('/inventary/:id', AuthenticationMiddleware.jwt);
productRouter.post('/purchase', AuthenticationMiddleware.jwt);

export default productRouter;
