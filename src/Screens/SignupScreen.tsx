import React from "react";
import SignUp from "../component/SignUp";
import { useNavigate } from "react-router-dom";

interface SignUpData {
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}
const SignupScreen = () => {
  const navigate = useNavigate();

  const onSignUpPressed = (signupData: SignUpData) => {
    navigate("/forgotpassowrd", { state: { signupData: signupData } });
  };
  return <SignUp onSignUpPressed={onSignUpPressed} />;
};

export default SignupScreen;
