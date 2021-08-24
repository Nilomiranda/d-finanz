import {Field, Int, ObjectType, EnumOptions, registerEnumType} from "@nestjs/graphql";

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  UNCONFIRMED_ACCOUNT = 'UNCONFIRMED_ACCOUNT'
}

registerEnumType(UserStatus, {
  name: 'UserStatus',
});

@ObjectType()
export class User {
  @Field(type => String)
  id: string;

  @Field(type => String)
  name: string;

  @Field(type => String)
  email: string

  @Field(type => String)
  password: string;

  @Field(type => String)
  confirmationCode: string;

  @Field(() => UserStatus)
  status: UserStatus;
}
