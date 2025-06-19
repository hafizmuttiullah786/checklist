import React, { useState } from "react";
import Login from "../component/Login";
import { ILoginPostBody } from "../types/post/Interface";
import { postUserLoginService } from "../services/LoginService";
import { ILoginApiResp } from "../types/get/LoginType";
import { Apinames } from "../utils/Apiname";
import useUserStore from "../utils/userStore";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const onLoginPressed = async (value: ILoginPostBody) => {
    try {
      let response: ILoginApiResp = await postUserLoginService(
        Apinames.login,
        value
      );
      console.log("response ::", response);
      if (response.result) {
        console.log("resspon");
        setUser(response.result);
        navigate("/profile");
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
