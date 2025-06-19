import React from "react";
import { useFormik } from "formik";
import google from "../Assets/imgs/google.webp";

interface LoginProps {
  errorMessage: string;
  onLoginPressed: (value: { email: string; password: string }) => void;
  updateErrorMessage: (error?: any) => void;
}

const passwordGuideline =
  "Password must be 8-40 characters, include at least one uppercase letter, one lowercase letter, and one number.";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,40}$/;

const validate = (values: { email: string; password: string }) => {
  const errors: { email?: string; password?: string } = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      "Password must be 8-40 characters, include at least one uppercase letter, one lowercase letter, and one number.";
  }
  return errors;
};

const Login: React.FC<LoginProps> = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      props.updateErrorMessage("");
      props.onLoginPressed(values);
    },
  });

  return (
    <div className="__login">
      <div className="login-Wraper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="__form">
                <div className="heading">LOGIN</div>
                <div className="loginaccount">Login into your account</div>
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
                  <div className="inputField">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={formik.values.password}
                      onChange={(e) => {
                        formik.handleChange(e);
                        props.updateErrorMessage("");
                      }}
                      onBlur={formik.handleBlur}
                    />
                    {(formik.touched.password || formik.submitCount > 0) &&
                    formik.errors.password ? (
                      <div style={{ color: "red", fontSize: "0.9em" }}>
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                  <div style={{ color: "red", fontSize: "0.9em" }}>
                    {props.errorMessage}
                  </div>
                  <div className="remember_forgot flex">
                    <div className="flex-gap">
                      <input type="checkbox" />
                      <span>Remember Me</span>
                    </div>
                    <a href="forgotpassowrd" className="forgot__password">
                      Forgot Password
                    </a>
                  </div>
                  <div className="login_btn">
                    <button type="submit">Login</button>
                  </div>
                </form>
                <div className="OR">
                  <span className="loginwith">OR Log in with</span>
                </div>
                <div className="loginGoogle">
                  <button>
                    <span>
                      <img src={google} alt="google" className="googleImg" />
                    </span>
                    Log in with google
                  </button>
                </div>
                <div className="dontAccount">
                  Don't have an account? <a href="signup">Sign Up</a>{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="loginRightSide">
                <div className="welconeText">WELCOME TO </div>
                <div className="myCheckList">MyChecklist</div>
                <div className="loginDesc">
                  Welcome aboard! Your pocket-sized checklist boss is
                  here—organized, compliant, and ready to roll
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
