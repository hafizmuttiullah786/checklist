import { ISignUpPostBody, ISendOtpBoyd, IVerifyOtpPostBody, IConfirmPasswordBody } from "../types/post/Interface";
import { postRequest, putRequest } from "./NetworkService";

export const postUserSignUpService = async (
  endPoint: string,
  requestBody: ISignUpPostBody
) => {
  let { data }: { data: any } = await postRequest(endPoint, requestBody);
  return data;
};

export const verifyOtpService = async (
  endPoint: string,
  requestBody: IVerifyOtpPostBody
) => {
  let { data }: { data: any } = await postRequest(endPoint, requestBody);
  return data;
};

export const ConfirmPasswordService = async (
  endPoint: string,
  requestBody: IConfirmPasswordBody
) => {
  let { data }: { data: any } = await putRequest(endPoint, requestBody);
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
