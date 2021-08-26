import {User, UserStatus} from "./models/user.model";
import {getPrismaClient} from "../main";
import {CreateUserInput} from "./dto/createUserInput";
import {generateRandomCode} from "../_helpers/generateRandomCode";
import * as bcrypt from "bcrypt";
import {sendEmailWithTemplate} from "../services/mailjet";

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

  async getOne(id: string) {
    const prisma = getPrismaClient()
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })

    return user
  }

  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 8)
  }
}
