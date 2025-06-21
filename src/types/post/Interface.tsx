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

export interface IVerifyOtpPostBody {
  email: string;
  otp: string;
}
export interface IConfirmPasswordBody {
  email: string;
  otp: string;
  newPassword: string;
}


export interface ISendOtpBoyd {
  email: string;
}

export interface IUserProfile {
  id: number;
  status: string
  role: string
  name: string;
  email: string;
  department: string | null;
  token: string;
}
