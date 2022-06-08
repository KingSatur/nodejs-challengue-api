import express, { NextFunction } from 'express';
import morgan from 'morgan';
import routes from './routes/api.routes';
import cors from 'cors';
import SwaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerConfig } from './config/swagger-config';
import handleError from './handler/error.handler';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
const specs = swaggerJSDoc(swaggerConfig);
app.use('/docs', SwaggerUI.serve, SwaggerUI.setup(specs));

app.use('/api', routes);
app.use(handleError);

export default app;
