import { NextFunction, Request, Response } from 'express';
import * as JWT from 'jsonwebtoken';
import { ApiResponse } from '../dto/api-response.dto';
import properties from '../config/properties';
export class AuthenticationMiddleware {
  public static jwt(request: Request, response: Response, next: NextFunction): void {
    const token: string = String(request.headers['authorization']).split(' ')[1];
    if (token) {
      JWT.verify(token, properties.jwt_seed, (error: any, decoded: any) => {
        if (error) {
          response.status(403);
          const apiResponse: ApiResponse<any> = {
            success: false,
            transactionData: {
              message: 'Unauthorized',
              status: 403,
            },
          };
          response.json(apiResponse);
        } else {
          request.body.decoded = decoded;
          next();
        }
      });
    } else {
      response.status(403);
      const apiResponse: ApiResponse<any> = {
        success: false,
        transactionData: {
          message: 'Unauthorized',
          status: 403,
        },
      };
      response.json(apiResponse);
    }
  }
}
