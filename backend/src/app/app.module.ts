import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ShortLinkModule } from '../short_link/short_link.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { AuthMiddleware } from '../middlewares/auth';

@Module({
  imports: [ShortLinkModule, PrismaModule, UserModule],
  controllers: [],
  providers: [AuthMiddleware],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).exclude('user/create', 'user/login');
  }
}
