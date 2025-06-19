import { ICategoriesData, IuserAllPoliciesData } from "./ApiResponses";

export type Nullable<T> = T | null;
export interface IuserBankAccount {
  bankName: Nullable<string>;
  accountNumber: Nullable<number>;
}
export interface IuserData {
  id: Nullable<number>;
  msisdn: Nullable<number>;
  subDate: Nullable<string>;
  name: Nullable<string>;
  gender: Nullable<string>;
  cnic: Nullable<number>;
  email: Nullable<string>;
  dob: Nullable<string>;
  residentialAddress: Nullable<string>;
  profilePicUrl: Nullable<string>;
  accountNumber?: Nullable<string>;
  bankName?: Nullable<string>;
  bankId?: Nullable<number>;
}

export type useContextType = {
  // screenState: number;
  // isInternetConnected: boolean;
  // userData: IuserData;
  // userBankAccount: IuserBankAccount;
  // userPolicies: IuserAllPoliciesData | null;
  // updateUserBankAccount: (val: IuserBankAccount) => void;
  // updateScreenState: (value: number) => void;
  // updateIsInternetConnected: (val: boolean) => void;
  // updateUserData: (data: IuserData) => void;
  // updateUserPolicies: (data: IuserAllPoliciesData | null) => void;
};
