import { getRequest, postRequest } from "./NetworkService";

export const getNotificationAll = async (endPoint: string) => {
  const response: any = await getRequest(endPoint);
  return response;
}; 


export const readNotifications = async (
  endpoint: string,
) => {
  const response = await postRequest(endpoint, {})

  return response
}