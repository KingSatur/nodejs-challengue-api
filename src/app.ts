import express from 'express';
import morgan from 'morgan';
import routes from './routes/api.routes';

import cors from 'cors';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api', routes);

export default app;