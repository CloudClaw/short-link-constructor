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
// import { CreateShortLinkDto } from './dto/create-short_link.dto';
// import { UpdateShortLinkDto } from './dto/update-short_link.dto';

@Controller('short-link')
export class ShortLinkController {
  constructor(private readonly shortLinkService: ShortLinkService) {}

  // @Post()
  // create(@Body() createShortLinkDto: CreateShortLinkDto) {
  //   return this.shortLinkService.create(createShortLinkDto);
  // }

  @Post()
  @HttpCode(201)
  async createShortUrl(
    @Body() createShortUrlDto: CreateShortLinkDto,
    @Res({ passthrough: true }) res: IConstructorResponse,
    @Next() next,
  ) {
    try {
      const shortUrl = await this.shortLinkService.getShortUrl(
        createShortUrlDto.originalUrl,
      );

      return {
        originalUrl: createShortUrlDto.originalUrl,
        shortUrl,
      };
    } catch (error) {
      console.log(error);
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
