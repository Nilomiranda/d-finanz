import { Field, InputType } from "@nestjs/graphql";
import { IsArray, IsEmpty, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Tag } from "../../tags/models/tag.model";
import { FinancialRecordType } from "../models/financialRecord.model";

@InputType()
export class UpdateFinancialRecordInput {
  @IsString({ always: true })
  @IsNotEmpty({ always: true })
  @Field(() => String, { nullable: false })
  id: string;

  @IsOptional({ always: true })
  @IsInt({ always: true })
  @Field(() => Number, { nullable: true })
  amount?: number

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Field(() => String, { nullable: true })
  name?: string

  @IsOptional({ always: true })
  @IsEnum(FinancialRecordType, { always: true })
  @Field(() => FinancialRecordType, { nullable: true })
  type?: FinancialRecordType

  @IsOptional({ always: true })
  @IsArray({ always: true })
  @Field(() => [String], { nullable: true, defaultValue: [] })
  tags?: string[]
}
