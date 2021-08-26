import {BadRequestException, CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {Observable} from "rxjs";
import {GqlExecutionContext} from "@nestjs/graphql";
import * as jwt from 'jsonwebtoken'

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = GqlExecutionContext.create(context)?.getContext()?.req
    const { headers } = request

    const authorizationHeader = headers['Authorization'] || headers['authorization'] || ''

    const [, token] = authorizationHeader?.split(' ')

    if (!token) {
      throw new UnauthorizedException('Login first')
    }

    const { userId } = this.validateToken(token) as Record<string, unknown>

    Object.assign(request, { userId })

    return true
  }

  validateToken(token) {
    try {
      return jwt?.verify(token, process.env.JWT_SECRET)
    } catch (err) {
      throw new UnauthorizedException('Login first')
    }
  }
}
