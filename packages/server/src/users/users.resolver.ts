import {Args, Parent, ResolveField, Resolver, Query, Mutation} from "@nestjs/graphql";
import {User} from "./models/user.model";
import {UsersService} from "./users.service";
import {CreateUserInput} from "./dto/createUserInput";

@Resolver(of => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {
  }

  @Query(returns => User)
  async user(@Args('id', { type: () => String }) id: string) {
    return this.usersService.getOne(id)
  }

  @Mutation(returns => User)
  async createUser(@Args('input') args: CreateUserInput) {
    return this.usersService.create(args)
  }
}
