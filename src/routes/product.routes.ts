import { Router } from 'express';

const productRouter: Router = Router();

productRouter.post('/inventary/', () => {});
productRouter.get('/inventary/');
productRouter.put('/inventary/:id');
productRouter.post('/purchase');

export default productRouter;
