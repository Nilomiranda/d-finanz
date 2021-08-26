import {
  Field,
  ObjectType,
  registerEnumType,
} from "@nestjs/graphql";
import {IsEmail, IsEnum, IsNotEmpty, IsString, MinLength} from "class-validator";

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  UNCONFIRMED_ACCOUNT = 'UNCONFIRMED_ACCOUNT'
}
registerEnumType(UserStatus, {
  name: 'UserStatus',
});

export const PASSWORD_MIN_CHARACTERS = 8

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
  password: string;

  @IsString({ always: true })
  @Field(type => String, { nullable: true })
  confirmationCode: string;

  @IsEnum(UserStatus, { always: true })
  @Field(() => UserStatus, { nullable: false, defaultValue: UserStatus.UNCONFIRMED_ACCOUNT })
  status: UserStatus;
}
