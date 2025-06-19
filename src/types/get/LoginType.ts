export interface ILoginApiResp {
  result: ILoginApiResult;
}

export interface ILoginApiResult {
  id: number;
  status: string;
  role: string;
  name: string;
  email: string;
  token: string;
}
