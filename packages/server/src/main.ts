import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client'
import {PrismaClientType} from "./_types/prismaClientType";
import {ValidationPipe} from "@nestjs/common";

const prisma = new PrismaClient({
  log: [
    { level: 'query', emit: 'event' }
  ]
})

prisma.$on('query', (event) => {
  console.log('Query:', event?.query)
  console.log('Duration: ', `${event?.duration} ms`)
})

export function getPrismaClient(): PrismaClientType {
  return prisma;
}

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
  app.useGlobalPipes(new ValidationPipe({}));
  await app.listen(8090);
  await startPrismaClient()
}
bootstrap();
