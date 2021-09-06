import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { PASSWORD_MIN_CHARACTERS } from "../models/user.model";

@InputType()
export class RecoverAccountInput {
  @IsString({ always: true })
  @IsNotEmpty({ always: true })
  @Field(type => String, { nullable: false })
  code: string;

  @IsEmail({}, { always: true, message: 'Invalid email' })
  @IsNotEmpty({ always: true })
  @Field(type => String, { nullable: false })
  email: string

  @IsString({ always: true })
  @IsNotEmpty({ always: true })
  @MinLength(PASSWORD_MIN_CHARACTERS, { message: `Passwords must have at least ${PASSWORD_MIN_CHARACTERS} characters` })
  @Field(type => String, { nullable: true })
  newPassword: string;
}
