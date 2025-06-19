import React, { useState } from "react";
import Login from "../component/Login";
import { ILoginPostBody } from "../types/post/Interface";
import { postUserLoginService } from "../services/LoginService";
import { ILoginApiResp } from "../types/get/LoginType";
import { Apinames } from "../utils/Apiname";
const LoginScreen = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const onLoginPressed = async (value: ILoginPostBody) => {
    try {
      console.log("submit pressed ::", value.email);
      let response: ILoginApiResp = await postUserLoginService(
        Apinames.login,
        value
      );
      if (response.result) {
      }
    } catch (error: any) {
      console.log("onSubmitPressed error ::", error);
      updateErrorMessage(error);
    }
  };

  const updateErrorMessage = (error?: any) => {
    if (error) setErrorMessage(error);
    else setErrorMessage("");
  };
  return (
    <Login
      errorMessage={errorMessage}
      onLoginPressed={onLoginPressed}
      updateErrorMessage={updateErrorMessage}
    />
  );
};

export default LoginScreen;
