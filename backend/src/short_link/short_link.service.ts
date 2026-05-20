import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IConstructorResponse } from './types';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '../../generated/prisma/internal/prismaNamespace';
import { Response } from 'express';
import { IAuthPayload } from '../user/types';

@Injectable()
export class ShortLinkService {
  constructor(private readonly prismaService: PrismaService) {}

  async createShortUrl(originalUrl: string, res: Response) {
    const { userId } = res.locals.user as IAuthPayload;

    try {
      const shortUrl = await this.getShortUrl(originalUrl);

      const newShortUrl = await this.prismaService.shortLink.create({
        data: {
          userId,
          originalLink: originalUrl,
          shortLink: shortUrl,
        },
      });

      return {
        id: newShortUrl.id,
        originalUrl: newShortUrl.originalLink,
        shortUrl: newShortUrl.shortLink,
      };
    } catch (error) {
      console.log(error);
      if (error instanceof PrismaClientKnownRequestError) {
        return {
          statusCode: 400,
          message: 'Таблица не существует в данной базе',
        };
      }
    }
  }

  async getAllShortLinks(res: Response) {
    const { userId } = res.locals.user as IAuthPayload;

    try {
      const shortLinks = await this.prismaService.shortLink.findMany({
        where: {
          userId,
        },
      });

      return (
        shortLinks.map((link) => {
          return {
            id: link.id,
            originalLink: link.originalLink,
            shortLink: link.shortLink,
          };
        }) || []
      );
    } catch (error) {
      throw new InternalServerErrorException('Failed to get all short links');
    }
  }

  private async getShortUrl(originalUrl: string) {
    const response = await fetch('https://spoo.me/api/v1/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        long_url: originalUrl,
      }),
    });

    const { short_url } =
      (await response.json()) as unknown as IConstructorResponse;

    return short_url;
  }
}
