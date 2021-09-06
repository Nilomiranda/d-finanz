import {
  Field,
  ObjectType,
  registerEnumType,
} from "@nestjs/graphql";
import {IsArray, IsEnum, IsInt, IsNotEmpty, IsString} from "class-validator";
import { Tag } from "../../tags/models/tag.model";
import { User } from "../../users/models/user.model";

export enum FinancialRecordType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE'
}
registerEnumType(FinancialRecordType, {
  name: 'FinancialRecordType',
});

@ObjectType()
export class FinancialRecord {
  @Field(() => String, { nullable: false })
  id: string

  @IsInt({ always: true })
  @IsNotEmpty({ always: true })
  @Field(() => Number, { nullable: false })
  amount: number

  @IsString({ always: true })
  @IsNotEmpty({ always: true })
  @Field(() => String, { nullable: false })
  userId: string

  @IsEnum(FinancialRecordType, { always: true })
  @Field(() => FinancialRecordType, { nullable: false })
  type: FinancialRecordType

  @IsArray({ always: true })
  @Field(() => [Tag], { nullable: false, defaultValue: [] })
  tags: Tag[]

  // todo Check if this will be really necessary
  user: User
}
