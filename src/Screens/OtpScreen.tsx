import React, { useEffect, useState } from "react";
import Otp from "../component/Otp";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import { stat } from "fs";
import {
  postForgotPasswordSendOtpService,
  postUserSendOtpService,
  postUserSignUpService,
  verifyOtpService,
} from "../services/SignUpService";
import { Apinames } from "../utils/Apiname";
import { ISignUpPostBody, IVerifyOtpPostBody } from "../types/post/Interface";

const OtpScreen = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  let disabled = state !== null ? true : false;
  useEffect(() => {
    setIsLoading(true);
    if (state === null) {
      navigate(-1);
      setIsLoading(false);
    }
    setIsLoading(false);
    console.log("state ::::::", state);
  }, []);

  const updateErrorMessage = (error?: any) => {
    if (error) setErrorMessage(error);
    else setErrorMessage("");
  };

  const onSubmitOtpPressed = async (otp: string) => {
    try {
      if (state?.signupData.forgotPassword) {

        let data: IVerifyOtpPostBody = {
          email: state?.signupData.email,
          otp: otp
        };
        console.log("signUp Payload ::", data);
        let response = await verifyOtpService(Apinames.forgotPasswordVerifyOtp, data);
        if (response.result && response.result.toLowerCase() === "success") {
          navigate("/login");
           navigate("/confirmpassword", { state: { signupData: data } });
        }

      } else {

        let data: ISignUpPostBody = {
          email: state?.signupData.email,
          password: state?.signupData.password,
          company: state?.signupData.companyName,
          otp: otp,
          name: state?.signupData.firstName + " " + state?.signupData.lastName,
        };
        console.log("signUp Payload ::", data);
        let response = await postUserSignUpService(Apinames.signUp, data);
        if (response.result && response.result.toLowerCase() === "success") {
          navigate("/login");
        }

      }
    } catch (error) {
      console.log("onSubmitOtpPressed error::", error);
      updateErrorMessage(error);
    }
  };

  const onResendOtpPressed = async () => {
    try {
      setIsLoading(true);
      updateErrorMessage("");
      if (state?.signupData.forgotPassword) {
        let response = await postForgotPasswordSendOtpService(
          Apinames.forgotPasswordSendOtp,
          { email: state?.signupData.email }
        );
        if (response.result.toLowerCase() === "success") {
          setIsLoading(false);
        }
      } else if (!state?.signupData.forgotPassword) {
        let response = await postUserSendOtpService(Apinames.signUpSendOtp, {
          email: state?.signupData.email,
        });
        if (response.result) {
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.log("onResendOtpPressed error ::", error);
      updateErrorMessage(error);
    }
  };
  return (
    <Otp
      isLoading={isLoading}
      disabled={disabled}
      errorMessage={errorMessage}
      updateErrorMessage={updateErrorMessage}
      onSubmitOtpPressed={onSubmitOtpPressed}
      onResendOtpPressed={onResendOtpPressed}
    />
  );
};

export default OtpScreen;
