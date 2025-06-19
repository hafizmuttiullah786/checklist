import { ISignUpPostBody, ISendOtpBoyd } from "../types/post/Interface";
import { postRequest } from "./NetworkService";

export const postUserSignUpService = async (
  endPoint: string,
  requestBody: ISignUpPostBody
) => {
  let { data }: { data: any } = await postRequest(endPoint, requestBody);
  return data;
};

export const postUserSendOtpService = async (
  endPoint: string,
  requestBody: ISendOtpBoyd
) => {
  let { data }: { data: any } = await postRequest(endPoint, requestBody);
  return data;
};

export const postForgotPasswordSendOtpService = async (
  endPoint: string,
  requestBody: ISendOtpBoyd
) => {
  let { data }: { data: any } = await postRequest(endPoint, requestBody);
  return data;
};
