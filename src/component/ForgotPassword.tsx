import React from "react";
import { useFormik } from "formik";

interface ForgotPasswordProps {
  errorMessage: string;
  isLoading: boolean;
  onSendOtpPressed: (email: string) => void;
  updateErrorMessage: (error?: any) => void;
}
const validate = (values: { email: string }) => {
  const errors: { email?: string } = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const ForgotPassword: React.FC<ForgotPasswordProps> = (
  props: ForgotPasswordProps
) => {
  const formik = useFormik({
    initialValues: { email: "" },
    validate,
    onSubmit: (values) => {
      props.onSendOtpPressed(values.email);
    },
  });

  return (
    <div className="__login">
      <div className="login-Wraper">
        <div className="container">
          <div className="__form forgotPassword">
            <div className="heading">VERIFY EMAIL</div>
            <div className="loginaccount">Enter your Email</div>
            <div className="blue__line"></div>
            <form onSubmit={formik.handleSubmit}>
              <div className="inputField">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={formik.values.email}
                  onChange={(e) => {
                    formik.handleChange(e);
                    props.updateErrorMessage("");
                  }}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: "red", fontSize: "0.9em" }}>
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div style={{ color: "red", fontSize: "0.9em" }}>
                {props.errorMessage}
              </div>
              <div className="login_btn">
                <button type="submit" disabled={props.isLoading}>
                  {props.isLoading ? "Loading..." : "Send OTP"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
