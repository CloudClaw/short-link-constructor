import { Injectable } from '@nestjs/common';
import { IConstructorResponse } from './types';

@Injectable()
export class ShortLinkService {
  async getShortUrl(originalUrl: string) {
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

  // findAll() {
  //   return `This action returns all shortLink`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} shortLink`;
  // }

  // update(id: number, updateShortLinkDto: UpdateShortLinkDto) {
  //   return `This action updates a #${id} shortLink`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} shortLink`;
  // }
}
