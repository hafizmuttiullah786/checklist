import React from "react";
import { useFormik } from "formik";

interface OtpProps {
  isLoading: boolean;
  disabled: boolean;
  errorMessage: string;
  updateErrorMessage: (error?: any) => void;
  onSubmitOtpPressed: (otp: string) => Promise<void>;
  onResendOtpPressed: () => Promise<void>;
}

const validate = (values: { otp: string }) => {
  const errors: { otp?: string } = {};
  if (!values.otp || values.otp.length !== 4) {
    errors.otp = "OTP must be 4 digits";
  } else if (!/^[0-9]{4}$/.test(values.otp)) {
    errors.otp = "OTP must contain only numbers 0-9";
  }
  return errors;
};

const Otp: React.FC<OtpProps> = (props: OtpProps) => {
  const formik = useFormik({
    initialValues: { otp: "" },
    validate,
    onSubmit: (values) => {
      props.onSubmitOtpPressed(values.otp);
    },
  });

  // Helper to handle input change for each digit
  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const val = e.target.value.replace(/[^0-9]/g, ""); // Only allow 0-9
    if (val.length > 1) return; // Only one digit per input
    const otpArr = formik.values.otp.split("");
    otpArr[idx] = val;
    const newOtp = otpArr.join("");
    formik.setFieldValue("otp", newOtp.padEnd(4, ""));
    // Move to next input if a digit is entered
    if (val && idx < 3) {
      const nextInput = document.getElementById(`otp-input-${idx + 1}`);
      if (nextInput) (nextInput as HTMLInputElement).focus();
    }
  };

  // Helper to handle backspace
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (e.key === "Backspace" && !formik.values.otp[idx] && idx > 0) {
      const prevInput = document.getElementById(`otp-input-${idx - 1}`);
      if (prevInput) (prevInput as HTMLInputElement).focus();
    }
  };

  return (
    <div className="__login">
      <div className="login-Wraper">
        <div className="container">
          <div className="__form forgotPassword">
            <div className="heading">PHONE VERIFICATION </div>
            <div className="loginaccount">Enter OTP code</div>
            <div className="blue__line"></div>
            <form onSubmit={formik.handleSubmit}>
              <div className="otpInputs">
                {[0, 1, 2, 3].map((idx) => (
                  <input
                    key={idx}
                    id={`otp-input-${idx}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={formik.values.otp[idx] || ""}
                    onChange={(e) => {
                      handleOtpChange(e, idx);
                      props.updateErrorMessage("");
                    }}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    autoComplete="one-time-code"
                  />
                ))}
              </div>
              {formik.touched.otp && formik.errors.otp ? (
                <div style={{ color: "red", fontSize: "0.9em" }}>
                  {formik.errors.otp}
                </div>
              ) : null}

              <div style={{ color: "red", fontSize: "0.9em" }}>
                {props.errorMessage}
              </div>
              <div className="dontAccount">
                Didn't receive code?{" "}
                <a
                  onClick={async () => {
                    await props.onResendOtpPressed();
                    // Clear OTP boxes
                    formik.setFieldValue("otp", "");
                    // Focus the first input
                    setTimeout(() => {
                      const firstInput = document.getElementById("otp-input-0");
                      if (firstInput) (firstInput as HTMLInputElement).focus();
                    }, 0);
                  }}
                >
                  Resend again
                </a>
              </div>
              <div className="login_btn">
                <button type="submit">Send OTP</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
