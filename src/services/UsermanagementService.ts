import { getRequest, postRequest, putRequest } from "./NetworkService";

export const getUserAllService = async (endPoint: string) => {
  let { data }: { data: any } = await getRequest(endPoint);
  return data;
};

export const updateUserAllService = async (
  endPoint: string,
  requestBody: any
) => {
  let { data }: { data: any } = await putRequest(endPoint, requestBody);
  return data;
};

export const addEmployeeService = async (
  endPoint: string,
  requestBody: any
) => {
  let { data }: { data: any } = await postRequest(endPoint, requestBody);
  return data;
};
