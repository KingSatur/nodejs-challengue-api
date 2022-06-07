import { NextFunction, Request, Response } from 'express';
import * as JWT from 'jsonwebtoken';
import config from '../config';

export class AuthenticationHelper {
  public static jwt(request: Request, response: Response, next: NextFunction): void {
    const token: string = String(request.headers['access-token']);

    if (token) {
      JWT.verify(token, config.jwt_seed, (error: any, decoded: any) => {
        if (error) {
          response.status(403);
          return response.json({
            message: 'Invalid token',
          });
        } else {
          request.body.decoded = decoded;
          next();
        }
      });
    } else {
      response.status(403);
      response.send({
        message: 'Missing Token',
      });
    }
  }
}
