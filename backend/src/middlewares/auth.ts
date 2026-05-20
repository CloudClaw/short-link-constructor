import { NextFunction, Request, Response } from 'express';
import NotAuthorizedError from '../errors/not-authorized-error';
import { NestMiddleware } from '@nestjs/common/interfaces/middleware/nest-middleware.interface';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import 'dotenv/config';
import { JwtService } from '@nestjs/jwt';
import { IAuthPayload } from '../user/types';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { accessToken } = req.cookies;

    if (!accessToken) {
      return next(new NotAuthorizedError());
    }

    const tokenSecret = process.env.JWT_SECRET as string;

    try {
      const payload: IAuthPayload = new JwtService().verify(
        accessToken as string,
        {
          secret: tokenSecret,
        },
      );
      res.locals.user = payload;
      next();
    } catch {
      next(new NotAuthorizedError());
    }
  }
}
