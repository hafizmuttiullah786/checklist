import React, { useState } from "react";
import ForgotPassword from "../component/ForgotPassword";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import { postUserSendOtpService } from "../services/SignUpService";
import { Apinames } from "../utils/Apiname";
import { stat } from "fs";

const ForgotPasswordScreen = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  console.log("state::", state);
  const onSendOtpPressed = async (email: string) => {
    try {
      setIsLoading(true);
      let data = { email };
      let response = await postUserSendOtpService(
        state !== null
          ? Apinames.signUpSendOtp
          : Apinames.forgotPasswordSendOtp,
        data
      );
      if (response.result.toLowerCase() === "success") {
        setIsLoading(false);
        if (state) {
          console.log("response  false::",);

          navigate("/otp", {
            state: {
              signupData: {
                ...state?.signupData,
                email,
                forgotPassword: false,
              },
            },
          });
        } else {
          console.log("response  true::",);
          navigate("/otp", {
            state: { signupData: { email, forgotPassword: true } },
          });
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.log("onSendOtpPressed error ::", error);
      updateErrorMessage(error);
      setIsLoading(false);
    }
  };

  const updateErrorMessage = (error?: any) => {
    if (error) setErrorMessage(error);
    else setErrorMessage("");
  };
  return (
    <ForgotPassword
      errorMessage={errorMessage}
      isLoading={isLoading}
      onSendOtpPressed={onSendOtpPressed}
      updateErrorMessage={updateErrorMessage}
    />
  );
};

export default ForgotPasswordScreen;
