import {
  Field,
  ObjectType,
} from "@nestjs/graphql";
import {User} from "../../users/models/user.model";

@ObjectType()
export class Session {
  @Field(() => String, { nullable: false })
  token: string;

  @Field(() => User, { nullable: false })
  user: User
}
