import { NextFunction, Request, Response } from 'express';
import { BadRequestException } from '@nestjs/common';
import 'dotenv/config';

export const publicCache =
  () => (req: Request, res: Response, next: NextFunction) => {
    try {
      res.setHeader('Cache-Control', 'public, max-age=86400');
      next();
    } catch {
      next(new BadRequestException());
    }
  };

export default publicCache;
