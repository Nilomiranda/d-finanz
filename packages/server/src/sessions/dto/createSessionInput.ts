import {Field, InputType} from "@nestjs/graphql";
import {IsEmail, IsNotEmpty, IsString} from "class-validator";

@InputType()
export class CreateSessionInput {
  @IsEmail({}, { always: true, message: 'Invalid email' })
  @IsNotEmpty({ always: true })
  @Field(type => String, { nullable: true })
  email: string

  @IsString({ always: true })
  @IsNotEmpty({ always: true })
  @Field(type => String, { nullable: true })
  password: string;
}
