import {Field, FieldMiddleware, InputType, MiddlewareContext, NextFn} from "@nestjs/graphql";
import {IsEmail, IsNotEmpty, IsString, MinLength} from "class-validator";
import {PASSWORD_MIN_CHARACTERS} from "../models/user.model";
import * as bcrypt from "bcrypt";

const hashPasswordMiddleware: FieldMiddleware = async (context: MiddlewareContext, next: NextFn) => {
  const password = await next()
  console.log('password', password)
  const hashedPassword = await bcrypt.hash(password, 8)
  console.log('hashedPassword', hashedPassword)
  return hashedPassword;
}

@InputType()
export class CreateUserInput {
  @IsString({ always: true })
  @IsNotEmpty({ always: true })
  @Field(type => String, { nullable: true })
  name: string;

  @IsEmail({}, { always: true, message: 'Invalid email' })
  @IsNotEmpty({ always: true })
  @Field(type => String, { nullable: true })
  email: string

  @IsString({ always: true })
  @IsNotEmpty({ always: true })
  @MinLength(PASSWORD_MIN_CHARACTERS, { message: `Passwords must have at least ${PASSWORD_MIN_CHARACTERS} characters` })
  @Field(type => String, { nullable: true, middleware: [hashPasswordMiddleware] })
  password: string;
}
