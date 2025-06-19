import { ILoginPostBody } from "../types/post/Interface";
import { postRequest } from "./NetworkService";
import { ILoginApiResp } from "../types/get/LoginType";
export const postUserLoginService = async (
  endPoint: string,
  requestBody: ILoginPostBody
) => {
  let { data }: { data: ILoginApiResp } = await postRequest(
    endPoint,
    requestBody
  );
  return data;
};
