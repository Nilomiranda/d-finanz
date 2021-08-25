import {
  Field,
  Int,
  ObjectType,
  EnumOptions,
  registerEnumType,
  FieldMiddleware,
  MiddlewareContext, NextFn
} from "@nestjs/graphql";
import {IsEmail, IsEnum, IsNotEmpty, IsString, MinLength} from "class-validator";
import * as bcrypt from 'bcrypt'

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  UNCONFIRMED_ACCOUNT = 'UNCONFIRMED_ACCOUNT'
}
registerEnumType(UserStatus, {
  name: 'UserStatus',
});

export const PASSWORD_MIN_CHARACTERS = 8

const hashPasswordMiddleware: FieldMiddleware = async (context: MiddlewareContext, next: NextFn) => {
  const password = await next()
  console.log('password', password)
  const hashedPassword = await bcrypt.hash(password, 8)
  console.log('hashedPassword', hashedPassword)
  return hashedPassword;
}

@ObjectType()
export class User {
  @Field(type => String, { nullable: true })
  id: string;

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

  @IsString({ always: true })
  @Field(type => String, { nullable: true })
  confirmationCode: string;

  @IsEnum(UserStatus, { always: true })
  @Field(() => UserStatus, { nullable: false, defaultValue: UserStatus.UNCONFIRMED_ACCOUNT })
  status: UserStatus;
}
