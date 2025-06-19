import React from 'react'

const Otp = () => {
  return (
    <>
      <div className="__login">
        <div className="login-Wraper">
          <div className="container">
            <div className="__form forgotPassword">
              <div className="heading">PHONE VERIFICATION </div>
              <div className="loginaccount">Enter OTP code</div>
              <div className="blue__line"></div>
              <div className="otpInputs">
                <input type="number" placeholder="4" className="active" />
                <input type="number" placeholder="5" className="active" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
              </div>
              <div className="dontAccount">
                Didn’t receive code? <a href="#"> Resend again</a>
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
}

export default Otp
