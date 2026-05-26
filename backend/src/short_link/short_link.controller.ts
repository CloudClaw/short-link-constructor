import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { ShortLinkService } from './short_link.service';
import { CreateShortLinkDto } from './dto/create-short_link.dto';
import { UpdateShortLinkDto } from './dto/update-short_link.dto';
import type { Response } from 'express';
import { IAuthPayload } from '../user/types';
import { cacheResponse } from '../redis/redis-utils';

@Controller('short-link')
export class ShortLinkController {
  constructor(private readonly shortLinkService: ShortLinkService) {}

  @Post('create')
  @HttpCode(201)
  async createShortUrl(
    @Body() createShortUrlDto: CreateShortLinkDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const userId = this.getUserIdFromLocals(res);
    return this.shortLinkService.createShortUrl(
      createShortUrlDto.originalUrl,
      userId,
    );
  }

  @Get('get-all')
  @HttpCode(200)
  async getAllShortLinks(@Res({ passthrough: true }) res: Response) {
    const userId = this.getUserIdFromLocals(res);
    await cacheResponse(res, this.shortLinkService.getAllShortLinks(userId));

    return this.shortLinkService.getAllShortLinks(userId);
  }

  @Post('update/:id')
  @HttpCode(200)
  async updateShortLink(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateShortLinkDto: UpdateShortLinkDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const userId = this.getUserIdFromLocals(res);
    return this.shortLinkService.updateShortLink(
      userId,
      id,
      updateShortLinkDto.originalUrl,
    );
  }

  @Post('remove/:id')
  @HttpCode(200)
  async removeShortLink(
    @Param('id', ParseIntPipe) id: number,
    @Res({ passthrough: true }) res: Response,
  ) {
    const userId = this.getUserIdFromLocals(res);
    return this.shortLinkService.removeShortLink(userId, id);
  }

  private getUserIdFromLocals(res: Response) {
    const payload = res.locals.user as IAuthPayload | undefined;
    if (!payload?.userId) {
      throw new UnauthorizedException('Requires authentication');
    }

    return payload.userId;
  }
}
