import {createParamDecorator, ExecutionContext, UnauthorizedException} from "@nestjs/common";
import {GqlExecutionContext} from "@nestjs/graphql";
import { PrismaClient } from '@prisma/client'

export const CurrentUser = createParamDecorator(
  async (data: unknown, context: ExecutionContext) => {
    const gqlContext = GqlExecutionContext.create(context);

    const { userId } = gqlContext?.getContext()?.req

    const prisma = new PrismaClient()

    const user = await prisma?.user?.findUnique({
      where: {
        id: userId
      }
    })

    if (!user) {
      throw new UnauthorizedException("Authenticate first")
    }

    return user;
  }
)
