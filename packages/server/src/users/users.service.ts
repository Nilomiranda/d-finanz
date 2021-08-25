import {User, UserStatus} from "./models/user.model";
import {getPrismaClient} from "../main";
import {CreateUserInput} from "./dto/createUserInput";
import {generateRandomCode} from "../_helpers/generateRandomCode";

export class UsersService {
  async create(args: CreateUserInput) {
    const prisma = getPrismaClient()
    return prisma.user.create({
      data: { ...args, status: UserStatus.UNCONFIRMED_ACCOUNT, confirmationCode: generateRandomCode() },
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
}
