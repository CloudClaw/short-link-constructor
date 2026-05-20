import { Module } from '@nestjs/common';
import { ShortLinkModule } from '../short_link/short_link.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [ShortLinkModule, PrismaModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
