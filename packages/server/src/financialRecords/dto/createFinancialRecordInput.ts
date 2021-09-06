import { Field, InputType } from "@nestjs/graphql";
import { IsArray, IsEnum, IsInt, IsNotEmpty, MinLength } from "class-validator";
import { FinancialRecordType } from "../models/financialRecord.model";

@InputType()
export class CreateFinancialRecordInput {
  @IsInt({ always: true })
  @IsNotEmpty({ always: true })
  @Field(() => Number, { nullable: false })
  amount: number

  @IsEnum(FinancialRecordType, { always: true })
  @Field(() => FinancialRecordType, { nullable: false })
  type: FinancialRecordType

  @IsArray({ always: true })
  @MinLength(1, { always: true, each: true })
  @Field(() => [String], { nullable: false })
  tags: string[]
}
