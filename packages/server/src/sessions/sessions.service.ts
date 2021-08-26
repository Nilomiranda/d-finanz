import {CreateSessionInput} from "./dto/createSessionInput";
import { getPrismaClient } from "../main";
import {NotFoundException} from "@nestjs/common";
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import {User} from "../users/models/user.model";
import {Session} from "./models/session.model";

export class SessionsService {
  async create(args: CreateSessionInput): Promise<Session> {
    const prisma = getPrismaClient()

    const { email, password } = args

    const user = await prisma.user.findUnique({
      where: {
        email,
      }
    })

    if (!user) {
      throw new NotFoundException()
    }

    await this.validatePassword(user, password)

    return {
      user,
      token: await this.generateToken(user)
    }
  }

  async generateToken(user: User): Promise<string> {
    return jwt.sign({
      userId: user?.id
    }, process.env.JWT_SECRET, { expiresIn: '1 day', algorithm: 'HS256' })
  }

  async validatePassword(user: User, givenPassword: string) {
    if (!givenPassword || !(await bcrypt.compare(givenPassword, user?.password))) {
      throw new NotFoundException()
    }
  }
}
