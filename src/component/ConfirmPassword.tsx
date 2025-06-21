

import React from "react";
import { useFormik } from "formik";
import google from "../Assets/imgs/google.webp";
interface SignUpData {
    password: string;
    confirmPassword: string;
}
interface ConfirmpasswordProps {
    onConfirmPassword: (signupData: SignUpData) => void;
    errorMessage: string
}

const passwordGuideline =
    "Password must be 8-40 characters, include at least one uppercase letter, one lowercase letter, and one number.";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,40}$/;

const validate = (values: {

    password: string;
    confirmPassword: string;
}) => {
    const errors: {

        password?: string;
        confirmPassword?: string;
    } = {};

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

const ConfirmPassword: React.FC<ConfirmpasswordProps> = (props) => {
    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        validate,
        onSubmit: (values) => {
            // Handle sign up logic here
            props.onConfirmPassword(values);
        },
    });

    return (
        <div className="__login signup">
            <div className="login-Wraper">
                <div className="container">
                    <div className="__form">
                        <div className="heading">CONFIRM PASSWORD</div>
                        <div className="loginaccount">Enter Your Password</div>
                        <div className="blue__line"></div>
                        <form onSubmit={formik.handleSubmit}>

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

                            <div className="login_btn">
                                <button type="submit">Submit Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmPassword;
