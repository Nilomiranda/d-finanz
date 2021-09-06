import { UseGuards } from "@nestjs/common";
import {Args, Parent, ResolveField, Resolver, Query, Mutation} from "@nestjs/graphql";
import { AuthGuard } from "../sessions/auth.guard";
import { TagsService } from "../tags/tags.service";
import { CurrentUser } from "../users/currentUser";
import { User } from "../users/models/user.model";
import { CreateFinancialRecordInput } from "./dto/createFinancialRecordInput";
import { FinancialRecordsService } from "./financialRecords.service";
import { FinancialRecord } from "./models/financialRecord.model";

@Resolver(of => FinancialRecord)
export class FinancialRecordsResolver {
  constructor(private financialRecordsService: FinancialRecordsService, private tagsService: TagsService) {
  }

  @Mutation(() => FinancialRecord)
  @UseGuards(AuthGuard)
  async createNewFinancialRecord(@Args('input') args: CreateFinancialRecordInput, @CurrentUser() user: User) {
    return this.financialRecordsService.create(args, user)
  }

  @ResolveField()
  async tags(@Parent() financialRecord: FinancialRecord) {
    const { id } = financialRecord
    return this.tagsService?.findByFinancialRecordId(id)
  }
}
