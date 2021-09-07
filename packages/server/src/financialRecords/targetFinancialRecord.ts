import {createParamDecorator, ExecutionContext, NotFoundException, UnauthorizedException} from "@nestjs/common";
import {GqlExecutionContext} from "@nestjs/graphql";
import { PrismaClient } from '@prisma/client'

export const TargetFinancialRecord = createParamDecorator(
  async (data: unknown, context: ExecutionContext) => {
    const gqlContext = GqlExecutionContext.create(context);

    const { userId } = gqlContext?.getContext()?.req

    const { id }: { id: string } = gqlContext?.getArgs()

    const prisma = new PrismaClient()

    const financialRecord = await prisma?.financialRecord?.findFirst({
      where: {
        userId,
        id
      }
    })

    if (!financialRecord) {
      throw new NotFoundException()
    }

    return financialRecord;
  }
)
