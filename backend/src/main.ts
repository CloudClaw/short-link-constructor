import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import process from 'process';
import cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import 'dotenv/config';
import { initRedis } from './redis/redis-client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  const appRun = async () => {
    try {
      await initRedis();
      await app.listen(process.env.PORT ?? 3000, () => {
        console.log('Приложение запущено на порту', process.env.PORT ?? 3000);
      });
    } catch (error) {
      console.error('Error on server init', error);
    }
  };

  appRun();
}
bootstrap();
