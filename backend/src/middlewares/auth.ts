import { NextFunction, Request, Response } from 'express';
import NotAuthorizedError from '../errors/not-authorized-error';
import { NestMiddleware } from '@nestjs/common/interfaces/middleware/nest-middleware.interface';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import 'dotenv/config';
import { JwtService } from '@nestjs/jwt';
import { IAuthPayload } from '../user/types';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { accessToken } = req.cookies;

    if (!accessToken) {
      return next(new NotAuthorizedError());
    }

    try {
      const payload: IAuthPayload = this.jwtService.verify(
        accessToken as string,
      );

      res.locals.user = payload;
      next();
    } catch {
      next(new NotAuthorizedError());
    }
  }
}
