import React from "react";
import { useFormik } from "formik";
import google from "../Assets/imgs/google.webp";
interface SignUpData {
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}
interface SignUpProps {
  onSignUpPressed: (signupData: SignUpData) => void;
}

const passwordGuideline =
  "Password must be 8-40 characters, include at least one uppercase letter, one lowercase letter, and one number.";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,40}$/;

const validate = (values: {
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}) => {
  const errors: {
    firstName?: string;
    lastName?: string;
    password?: string;
    confirmPassword?: string;
  } = {};
  if (!values.firstName) {
    errors.firstName = "First name is required";
  } else if (/^\s/.test(values.firstName)) {
    errors.firstName = "First name cannot start with a space";
  }
  if (!values.lastName) {
    errors.lastName = "Last name is required";
  } else if (/^\s/.test(values.lastName)) {
    errors.lastName = "Last name cannot start with a space";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!passwordRegex.test(values.password)) {
    errors.password = passwordGuideline;
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }
  return errors;
};

const SignUp: React.FC<SignUpProps> = (props) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      // Handle sign up logic here
      props.onSignUpPressed(values);
    },
  });

  return (
    <div className="__login signup">
      <div className="login-Wraper">
        <div className="container">
          <div className="__form">
            <div className="heading">SIGN UP</div>
            <div className="loginaccount">Create your account</div>
            <div className="blue__line"></div>
            <form onSubmit={formik.handleSubmit}>
              <div className="input_flex">
                <div className="inputField">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div style={{ color: "red", fontSize: "0.9em" }}>
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>
                <div className="inputField">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div style={{ color: "red", fontSize: "0.9em" }}>
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="input_flex">
                <div className="inputField">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div style={{ color: "red", fontSize: "0.9em" }}>
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="inputField">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <div style={{ color: "red", fontSize: "0.9em" }}>
                      {formik.errors.confirmPassword}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="login_btn">
                <button type="submit">Sign Up</button>
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
              Already have an account? <a href="Login">Login</a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
