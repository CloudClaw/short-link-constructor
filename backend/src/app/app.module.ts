import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ShortLinkModule } from '../short_link/short_link.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { AuthMiddleware } from '../middlewares/auth';
import { JwtModule, JwtService } from '@nestjs/jwt';
import 'dotenv/config';
import CacheMiddleware from '../middlewares/cacheMiddleware';
import publicCache from '../middlewares/publicCache';

@Module({
  imports: [
    ShortLinkModule,
    PrismaModule,
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '5m' },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  constructor(private readonly jwtService: JwtService) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware(this.jwtService))
      .exclude(
        { path: 'user/create', method: RequestMethod.POST },
        { path: 'user/login', method: RequestMethod.POST },
      )
      .forRoutes({ path: '*', method: RequestMethod.ALL });

    consumer
      .apply(publicCache(), CacheMiddleware(120))
      .forRoutes({ path: 'short-link/get-all', method: RequestMethod.GET });
  }
}
