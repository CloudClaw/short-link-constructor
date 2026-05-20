import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import 'dotenv/config';
import process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  console.log('Приложение запущено на порту', process.env.PORT ?? 3000);
}
bootstrap();
