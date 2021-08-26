import {Field, InputType} from "@nestjs/graphql";
import {IsEmail, IsNotEmpty, IsString, MinLength} from "class-validator";

@InputType()
export class ConfirmAccountInput {
  @IsString({ always: true })
  @IsNotEmpty({ always: true })
  @Field(type => String, { nullable: false })
  code: string;

  @IsEmail({}, { always: true, message: 'Invalid email' })
  @IsNotEmpty({ always: true })
  @Field(type => String, { nullable: false })
  email: string
}
