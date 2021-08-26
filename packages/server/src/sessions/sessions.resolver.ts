import {Args, Parent, ResolveField, Resolver, Query, Mutation} from "@nestjs/graphql";
import {SessionsService} from "./sessions.service";
import {Session} from "./models/session.model";
import {User} from "../users/models/user.model";
import {CreateSessionInput} from "./dto/createSessionInput";

@Resolver(of => Session)
export class SessionsResolver {
  constructor(private sessionsService: SessionsService) {
  }

  @Mutation(returns => Session)
  async createSession(@Args('input') args: CreateSessionInput) {
    return this.sessionsService.create(args)
  }
}
