import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function startPrismaClient() {
  try {
    await prisma.$connect()
    console.log("Prisma client connected")
  } catch (err) {
    console.error("Prisma client connect error", err)
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8090);
  await startPrismaClient()
}
bootstrap();
