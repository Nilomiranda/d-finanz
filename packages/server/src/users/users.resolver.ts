import {Args, Parent, ResolveField, Resolver, Query} from "@nestjs/graphql";
import {User} from "./models/user.model";
import {UsersService} from "./users.service";

@Resolver(of => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {
  }

  @Query(returns => User)
  async user(@Args('id', { type: () => String }) id: string) {
    return this.usersService.getOne(id)
  }
}
