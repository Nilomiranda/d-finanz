import {User} from "./models/user.model";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class UsersService {
  async getOne(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })

    return user
  }
}
