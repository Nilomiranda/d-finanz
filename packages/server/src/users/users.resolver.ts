import {Args, Parent, ResolveField, Resolver, Query, Mutation} from "@nestjs/graphql";
import {User} from "./models/user.model";
import {UsersService} from "./users.service";
import {CreateUserInput} from "./dto/createUserInput";
import {ConfirmAccountInput} from "./dto/confirmAccountInput";
import {UseGuards} from "@nestjs/common";
import {AuthGuard} from "../sessions/auth.guard";
import {CurrentUser} from "./currentUser";
import { RecoverAccountInput } from "./dto/recoverAccountInput";
import { UpdatePasswordInput } from "./dto/updatePasswordInput";

@Resolver(of => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {
  }

  @Query(returns => User)
  @UseGuards(AuthGuard)
  async user(@CurrentUser() user: User) {
    return user
  }

  @Mutation(returns => User)
  async createUser(@Args('input') args: CreateUserInput) {
    return this.usersService.create(args)
  }

  @Mutation(returns => User)
  async confirmAccount(@Args('input') args: ConfirmAccountInput) {
    return this.usersService.confirmAccount(args)
  }

  @Mutation(returns => Boolean)
  async resendConfirmationCode(@Args('email') email: string) {
    return this.usersService.resendConfirmationCode(email)
  }

  @Mutation(returns => User)
  @UseGuards(AuthGuard)
  async deleteAccount(@Args('id') id: string, @CurrentUser() user: User) {
    return this.usersService.deleteOne(id, user)
  }

  @Mutation(returns => Boolean)
  async requestRecoveryCode(@Args('email') email: string) {
    return this.usersService.requestAccountRecoveryCode(email)
  }

  @Mutation(returns => User)
  async recoverAccount(@Args('input') args: RecoverAccountInput) {
    return this.usersService.recoverAccount(args)
  }

  @Mutation(returns => User)
  @UseGuards(AuthGuard)
  async updatePassword(@Args('input') args: UpdatePasswordInput, @CurrentUser() user: User) {
    return this.usersService.updatePassword(args, user)
  }
}
