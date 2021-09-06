import {User, UserStatus} from "./models/user.model";
import {getPrismaClient} from "../main";
import {CreateUserInput} from "./dto/createUserInput";
import {generateRandomCode} from "../_helpers/generateRandomCode";
import * as bcrypt from "bcrypt";
import {sendEmailWithTemplate} from "../services/mailjet";
import {ConfirmAccountInput} from "./dto/confirmAccountInput";
import {NotFoundException} from "@nestjs/common";
import { ForbiddenError } from "apollo-server-errors";
import { RecoverAccountInput } from "./dto/recoverAccountInput";

const ACCOUNT_CONFIRMATION_TEMPLATE_NUMBER = 3125538
const ACCOUNT_RECOVERY_EMAIL_TEMPLATE_NUMBER = 3151724

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

  async resendConfirmationCode(email: string) {
    const prisma = await getPrismaClient()
    const user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
      throw new NotFoundException('Account not found')
    }

    user.confirmationCode = generateRandomCode()

    sendEmailWithTemplate(ACCOUNT_CONFIRMATION_TEMPLATE_NUMBER, [{ Email: user?.email, Name: user?.name }], 'DFinanz account confirmation', { email: user?.email, name: user?.name, confirmationCode: user?.confirmationCode }).catch(err => {
      console.error('Error sending account confirmation error', err)
    })

    return true
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

  async requestAccountRecoveryCode(email: string): Promise<boolean> {
    const prisma = getPrismaClient()

    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (user) {
      const recoveryCode = generateRandomCode()
      sendEmailWithTemplate(ACCOUNT_RECOVERY_EMAIL_TEMPLATE_NUMBER, [{Email: user?.email, Name: user?.name}], 'DFinanz - Account recovery request', { name: user?.name, recoveryCode }).catch(err => {
        console.error('Error sending account recovery email', err)
      })

      await prisma.user.update({
        where: {
          email,
        },
        data: {
          recoveryCode,
        }
      })
    }

    return true
  }

  async recoverAccount(args: RecoverAccountInput) {
    const { email, code, newPassword } = args

    const prisma = getPrismaClient()

    const user = await prisma.user.findFirst({
      where: {
        email,
        recoveryCode: code,
      }
    })

    if (!user) {
      throw new NotFoundException()
    }

    return prisma.user.update({
      where: {
        email: user?.email
      },
      data: {
        recoveryCode: null,
        password: await this.hashPassword(newPassword),
      }
    })
  }

  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 8)
  }
}
