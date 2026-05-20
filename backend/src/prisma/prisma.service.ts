import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client.js';
import 'dotenv/config';

const connectionString = `${process.env.DATABASE_URL}`;

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaPg({ connectionString });
    super({ adapter });
    console.log('Prisma подключена');
  }
}
