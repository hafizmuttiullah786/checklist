import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <div className="__login">
        <div className="login-Wraper">
          <div className="container">
            <div className="__form forgotPassword">
              <div className="heading">VERIFY EMAIL OR PHONE NUMBER</div>
              <div className="loginaccount">Enter Email or Password</div>
              <div className="blue__line"></div>
              <div className="inputField">
                <label htmlFor="">Password or Email</label>
                <input type="passord" />
              </div>
              <div className="login_btn">
                <button>Send OTP</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
