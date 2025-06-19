export interface ILoginPostBody {
  email: string;
  password: string;
}

export interface ISignUpPostBody {
  email: string;
  password: string;
  otp: string;
  name: string;
}

export interface ISendOtpBoyd {
  email: string;
}
