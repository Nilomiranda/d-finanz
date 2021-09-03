import {User, UserStatus} from "./models/user.model";
import {getPrismaClient} from "../main";
import {CreateUserInput} from "./dto/createUserInput";
import {generateRandomCode} from "../_helpers/generateRandomCode";
import * as bcrypt from "bcrypt";
import {sendEmailWithTemplate} from "../services/mailjet";
import {ConfirmAccountInput} from "./dto/confirmAccountInput";
import {NotFoundException} from "@nestjs/common";
import { ForbiddenError } from "apollo-server-errors";

const ACCOUNT_CONFIRMATION_TEMPLATE_NUMBER = 3125538

export class UsersService {
  async create(args: CreateUserInput) {
    const prisma = getPrismaClient()
    const user = await prisma.user.create({
      data: { ...args, password: await this.hashPassword(args?.password),  status: UserStatus.UNCONFIRMED_ACCOUNT, confirmationCode: generateRandomCode() },
    })

    sendEmailWithTemplate(ACCOUNT_CONFIRMATION_TEMPLATE_NUMBER, [{ Email: user?.email, Name: user?.name }], 'DFinanz account confirmation', { email: user?.email, name: user?.name, confirmationCode: user?.confirmationCode }).catch(err => {
      console.error('Error sending account confirmation error', err)
    })

    return user
  }

  async confirmAccount(args: ConfirmAccountInput) {
    const { email, code } = args
    const prisma = getPrismaClient()
    const userToConfirm = await prisma.user.findFirst({
      where: {
        email,
        confirmationCode: code
      }
    })

    if (!userToConfirm) {
      throw new NotFoundException()
    }

    return prisma.user.update({
      where: {
        id: userToConfirm?.id,
      },
      data: {
        confirmationCode: '',
        status: UserStatus.ACTIVE
      },
    })
  }

  async getOne(id: string) {
    const prisma = getPrismaClient()
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })

    return user
  }

  async deleteOne(id: string, requestingUser: User) {
    const prisma = getPrismaClient()

    if (requestingUser?.id !== id) {
      throw new ForbiddenError("Not allowed")
    }

    return prisma.user.delete({ where: { id } })
  }

  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 8)
  }
}
