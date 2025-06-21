import axios from "axios";
import { baseUrl } from "../Configs/Constants";
import { initializeAuthToken, logout } from "../utils/Common";

export const getRequest = async (endPoint: string) => {
  initializeAuthToken(); 
  try {
    const response = await axios({
      url: `${baseUrl}${endPoint}`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
        // Connection: "close",
        Authorization: "Bearer " + global.authToken,
      },
    });
    return response;
  } catch (error: any) {
    console.log("Error in getRequest:", error);
    if (error.response?.status === 401) {
      console.log("Error 401: Unauthorized access");
      logout("network");
    }
    throw error;
  }
};

export const postRequest = async (endPoint: string, data: any) => {
  console.log("basurl", baseUrl + endPoint);
  initializeAuthToken(); 
  try {
    const response = await axios({
      url: `${baseUrl}${endPoint}`,
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        // Connection: "close",
        Authorization: "Bearer " + global.authToken,
      },
      data: data,
      // timeout: requestTimeout,
    });
    return response;
  } catch (error: any) {
    if (error.response?.status === 401) {
      logout("network");
    } else if (error.response?.status === 400) {
      if (error.response?.data?.result) {
        console.log(error.response?.data?.result.toLowerCase());
        throw error.response?.data?.result.toLowerCase();
      }
    }
    throw error;
  }
};

export const putRequest = async (endPoint: string, data: any) => {
  console.log("basurl", baseUrl + endPoint);
  initializeAuthToken(); 
  try {
    const response = await axios({
      url: `${baseUrl}${endPoint}`,
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        // Connection: "close",
        Authorization: "Bearer " + global.authToken,
      },
      data: data,
      // timeout: requestTimeout,
    });
    return response;
  } catch (error: any) {
    if (error.response?.status === 401) {
      logout("network");
    } else if (error.response?.status === 400) {
      if (error.response?.data?.result) {
        console.log(error.response?.data?.result.toLowerCase());
        throw error.response?.data?.result.toLowerCase();
      }
    }
    throw error;
  }
};


export const postRequestMulitiPart = async (endPoint: string, data: {}) => {
  initializeAuthToken(); 
  try {
    const response = await axios({
      url: `${baseUrl}${endPoint}`,
      method: "POST",

      headers: {
        "Content-Type": "multipart/form-data",
        // Connection: "close",
        Authorization: "Bearer " + global.authToken,
      },
      data: data,
      // timeout: requestTimeout,
    });
    return response;
  } catch (error: any) {
    if (error.response?.status === 401) {
      logout("network");
    }
    throw error;
  }
};
