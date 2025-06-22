import { getRequest, postRequest, postRequestMulitiPart } from "./NetworkService";

export const addCheckListService = async (
  endPoint: string,
  requestBody: any
) => {
  let { data }: { data: any } = await postRequestMulitiPart(
    endPoint,
    requestBody
  );
  return data;
};



export const getCheckListService = async (
  endPoint: string
) => {
  let { data }: { data: any } = await getRequest(
    endPoint
  );
  return data;
};