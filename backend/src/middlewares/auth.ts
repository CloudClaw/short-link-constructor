import { NextFunction, Request, Response } from 'express';
import NotAuthorizedError from '../errors/not-authorized-error';
import 'dotenv/config';
import { JwtService } from '@nestjs/jwt';
import { IAuthPayload } from '../user/types';

export const AuthMiddleware =
  (jwtService: JwtService) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { accessToken } = req.cookies;

    if (!accessToken) {
      return next(new NotAuthorizedError());
    }

    try {
      const payload: IAuthPayload = jwtService.verify(accessToken as string);

      res.locals.user = payload;
      next();
    } catch {
      next(new NotAuthorizedError());
    }
  };

export default AuthMiddleware;
