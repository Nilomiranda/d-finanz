import { ArgsType, Field, Int } from "@nestjs/graphql";
import { ConnectionArguments as RelayConnectionArguments } from "graphql-relay";

@ArgsType()
export class ConnectionArguments implements RelayConnectionArguments {
  @Field(() => String, { nullable: true })
  before?: string;

  @Field(() => String, { nullable: true })
  after?: string;

  @Field(() => Int, { nullable: true })
  first?: number;

  @Field(() => Int, { nullable: true })
  last?: number;
}
