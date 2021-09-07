import { ObjectType } from "@nestjs/graphql";
import {Connection} from "../../_types/models/connection.model";
import { FinancialRecord } from "./financialRecord.model";

@ObjectType()
export class FinancialRecordConnection extends Connection<FinancialRecord>(FinancialRecord) {
}
