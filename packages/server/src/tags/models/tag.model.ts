import { Field, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@ObjectType()
export class Tag {
  @Field(() => String, { nullable: false })
  id?: string

  @IsString({ always: true })
  @IsNotEmpty({ always: true })
  @Field(() => String, { nullable: false })
  name: string

  @IsString({ always: true })
  @IsNotEmpty({ always: true })
  @Field(() => String, { nullable: false })
  userId: string
}
