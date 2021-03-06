import { UseGuards } from "@nestjs/common";
import {Args, Parent, ResolveField, Resolver, Query, Mutation} from "@nestjs/graphql";
import { connectionFromPromisedArray } from "graphql-relay";
import { AuthGuard } from "../sessions/auth.guard";
import { TagsService } from "../tags/tags.service";
import { CurrentUser } from "../users/currentUser";
import { User } from "../users/models/user.model";
import { ConnectionArguments } from "../_types/dto/connection.args";
import { CreateFinancialRecordInput } from "./dto/createFinancialRecordInput";
import { UpdateFinancialRecordInput } from "./dto/updateFinancialRecordInput";
import { FinancialRecordsService } from "./financialRecords.service";
import { FinancialRecordConnection } from "./models/financialRecord.connection";
import { FinancialRecord } from "./models/financialRecord.model";
import { OwnedFinancialRecord } from "./targetFinancialRecord";

@Resolver(() => FinancialRecord)
export class FinancialRecordsResolver {
  constructor(private financialRecordsService: FinancialRecordsService, private tagsService: TagsService) {
  }

  @Mutation(() => FinancialRecord)
  @UseGuards(AuthGuard)
  async createNewFinancialRecord(@Args('input') args: CreateFinancialRecordInput, @CurrentUser() user: User) {
    return this.financialRecordsService.create(args, user)
  }

  @Mutation(() => FinancialRecord)
  @UseGuards(AuthGuard)
  async deleteFinancialRecord(@Args('id') id: string, @OwnedFinancialRecord() financialRecord: FinancialRecord) {
    // id is used in @TargetFinancialRecord decorator
    return this.financialRecordsService.delete(financialRecord)
  }

  @Mutation(() => FinancialRecord)
  @UseGuards(AuthGuard)
  async updateFinancialRecord(@Args('input') args: UpdateFinancialRecordInput, @OwnedFinancialRecord() financialRecord: FinancialRecord, @CurrentUser() user: User) {
    return this.financialRecordsService.update(financialRecord, user, args)
  }

  @Query(() => FinancialRecordConnection)
  @UseGuards(AuthGuard)
  async financialRecords(@CurrentUser() user: User, @Args({ type: () => ConnectionArguments }) args: ConnectionArguments) {
    return connectionFromPromisedArray(this.financialRecordsService?.list(user), args)
  }

  @Query(() => FinancialRecord)
  @UseGuards(AuthGuard)
  async financialRecord(@Args('id') id: string, @OwnedFinancialRecord() financialRecord: FinancialRecord) {
    // id is used in @TargetFinancialRecord decorator
    return financialRecord
  }

  @ResolveField()
  async tags(@Parent() financialRecord: FinancialRecord) {
    const { id } = financialRecord
    return this.tagsService?.findByFinancialRecordId(id)
  }
}
