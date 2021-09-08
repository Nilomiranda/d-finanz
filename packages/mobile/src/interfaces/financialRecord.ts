import { Tag } from "./tag";
import { User } from "./user";

export enum FinancialRecordType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE'
}

export interface FinancialRecord {
  id: string
  amount: number
  name: string
  userId: string
  type: FinancialRecordType
  tags: Tag[]
  user: User
}
