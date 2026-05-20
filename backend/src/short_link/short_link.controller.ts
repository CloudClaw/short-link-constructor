import {
  Controller,
  Get,
  // Post,
  Body,
  Post,
  HttpCode,
  Res,
  Req,
  Next,
  Param,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { ShortLinkService } from './short_link.service';
import { CreateShortLinkDto } from './dto/create-short_link.dto';
import type { IConstructorResponse } from './types';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';
import { PrismaService } from '../prisma/prisma.service';
// import { CreateShortLinkDto } from './dto/create-short_link.dto';
// import { UpdateShortLinkDto } from './dto/update-short_link.dto';

@Controller('short-link')
export class ShortLinkController {
  constructor(
    private readonly shortLinkService: ShortLinkService,
    private readonly prismaService: PrismaService,
  ) {}

  // @Post()
  // create(@Body() createShortLinkDto: CreateShortLinkDto) {
  //   return this.shortLinkService.create(createShortLinkDto);
  // }

  @Post()
  @HttpCode(201)
  async createShortUrl(@Body() createShortUrlDto: CreateShortLinkDto) {
    try {
      const shortUrl = await this.shortLinkService.getShortUrl(
        createShortUrlDto.originalUrl,
      );

      const newShortUrl = await this.prismaService.shortLink.create({
        data: {
          originalLink: createShortUrlDto.originalUrl,
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
        console.log('Таблица не существует в данной базе');
      }
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.shortLinkService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateShortLinkDto: UpdateShortLinkDto,
  // ) {
  //   return this.shortLinkService.update(+id, updateShortLinkDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.shortLinkService.remove(+id);
  // }
}
