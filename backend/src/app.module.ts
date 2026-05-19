import { Module } from '@nestjs/common';
import { ShortLinkModule } from './short_link/short_link.module';

@Module({
  imports: [ShortLinkModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
