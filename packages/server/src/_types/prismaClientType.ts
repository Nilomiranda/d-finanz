import { PrismaClient, Prisma } from '@prisma/client'


export type PrismaClientType =  PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation>
