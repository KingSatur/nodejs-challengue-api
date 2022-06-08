import { Options } from 'swagger-jsdoc';

export const swaggerConfig: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Nodejs API',
      version: '1.0.0',
      description: 'Simple nodejs API crud functionalities',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};
