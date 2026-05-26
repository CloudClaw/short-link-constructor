import { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import { getFromRedis } from '../redis/redis-utils';
import { CacheError } from '../errors/cache-error';

export const CacheMiddleware =
  (ttl = 60) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const cacheKey = req.originalUrl;

    try {
      const cachedData = await getFromRedis(cacheKey);

      if (cachedData) {
        console.log('Data from cache is being used with', cachedData);
        return res.json(JSON.parse(cachedData));
      }

      res.locals.cacheKey = cacheKey;
      res.locals.ttl = ttl;

      next();
    } catch {
      next(new CacheError('Cannot read from Redis'));
    }
  };

export default CacheMiddleware;
