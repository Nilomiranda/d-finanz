import {User} from "./models/user.model";
import {getPrismaClient} from "../main";

export class UsersService {
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
