import { Controller, Body, Post, HttpCode, Res, Get } from '@nestjs/common';
import { ShortLinkService } from './short_link.service';
import { CreateShortLinkDto } from './dto/create-short_link.dto';
import { PrismaService } from '../prisma/prisma.service';
import type { Response } from 'express';

@Controller('short-link')
export class ShortLinkController {
  constructor(
    private readonly shortLinkService: ShortLinkService,
    private readonly prismaService: PrismaService,
  ) {}

  @Post('create')
  @HttpCode(201)
  async createShortUrl(
    @Body() createShortUrlDto: CreateShortLinkDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.shortLinkService.createShortUrl(
      createShortUrlDto.originalUrl,
      res,
    );
  }

  @Get('get-all')
  @HttpCode(200)
  async getAllShortLinks(@Res({ passthrough: true }) res: Response) {
    return await this.shortLinkService.getAllShortLinks(res);
  }
}
