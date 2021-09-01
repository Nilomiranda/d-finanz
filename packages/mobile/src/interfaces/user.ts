export enum UserStatus {
  ACTIVE = 'ACTIVE',
  UNCONFIRMED_ACCOUNT = 'UNCONFIRMED_ACCOUNT'
}

export interface User {
  id: string;
  name: string;
  email: string
  password: string;
  confirmationCode: string;
  status: UserStatus | string;
}