import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  ServiceUnavailableException,
  UnauthorizedException,
} from '@nestjs/common';
import { IConstructorResponse } from './types';
import { PrismaService } from '../prisma/prisma.service';
import { cacheResponse } from '../redis/redis-utils';

@Injectable()
export class ShortLinkService {
  constructor(private readonly prismaService: PrismaService) {}

  async createShortUrl(originalUrl: string, userId: number) {
    if (!userId) {
      throw new UnauthorizedException('Requires authentication');
    }

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
      if (error instanceof ServiceUnavailableException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to create short link');
    }
  }

  async getAllShortLinks(userId: number) {
    if (!userId) {
      throw new UnauthorizedException('Requires authentication');
    }

    try {
      const shortLinks = await this.prismaService.shortLink.findMany({
        where: {
          userId,
        },
      });
      return shortLinks.map((link) => ({
        id: link.id,
        originalLink: link.originalLink,
        shortLink: link.shortLink,
      }));
    } catch {
      throw new InternalServerErrorException('Failed to get all short links');
    }
  }

  async updateShortLink(
    userId: number,
    shortLinkId: number,
    originalUrl: string,
  ) {
    if (!userId) {
      throw new UnauthorizedException('Requires authentication');
    }

    try {
      await this.checkIsOwner(userId, shortLinkId);
      const shortUrl = await this.getShortUrl(originalUrl);

      const updatedUrl = await this.prismaService.shortLink.update({
        where: {
          id: shortLinkId,
        },
        data: {
          originalLink: originalUrl,
          shortLink: shortUrl,
        },
      });

      return {
        updatedUrl,
      };
    } catch {
      throw new InternalServerErrorException('Failed to update short link');
    }
  }

  async removeShortLink(userId: number, shortLinkId: number) {
    if (!userId) {
      throw new UnauthorizedException('Requires authentication');
    }

    try {
      await this.checkIsOwner(userId, shortLinkId);

      const removedShortLink = await this.prismaService.shortLink.delete({
        where: {
          id: shortLinkId,
        },
      });

      return {
        message: `Ссылка с id: ${removedShortLink.id} успешно удалена`,
      };
    } catch {
      throw new InternalServerErrorException('Failed to remove short link');
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
      signal: AbortSignal.timeout(4000),
    });

    if (!response.ok) {
      throw new ServiceUnavailableException(
        'Short link provider is unavailable',
      );
    }

    const { short_url } = (await response.json()) as IConstructorResponse;

    if (!short_url) {
      throw new ServiceUnavailableException(
        'Short link provider is unavailable',
      );
    }

    return short_url;
  }

  private async checkIsOwner(currentUserId: number, shortLinkId: number) {
    const shortLink = await this.prismaService.shortLink.findUnique({
      where: {
        id: shortLinkId,
      },
      select: {
        userId: true,
      },
    });

    if (!shortLink) {
      throw new NotFoundException('Short link does not exist');
    }

    if (shortLink.userId !== currentUserId) {
      throw new ForbiddenException('You cannot edit this short link');
    }
  }
}
