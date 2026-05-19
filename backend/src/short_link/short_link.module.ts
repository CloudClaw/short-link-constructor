import { Module } from '@nestjs/common';
import { ShortLinkService } from './short_link.service';
import { ShortLinkController } from './short_link.controller';

@Module({
  controllers: [ShortLinkController],
  providers: [ShortLinkService],
})
export class ShortLinkModule {}
