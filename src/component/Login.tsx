import React from "react";
import google from "../Assets/imgs/google.webp";

const Login = () => {
  return (
    <>
      <div className="__login">
        <div className="login-Wraper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="__form">
                  <div className="heading">LOGIN</div>
                  <div className="loginaccount">Login into your account</div>
                  <div className="blue__line"></div>
                  <div className="inputField">
                    <label htmlFor="">Email</label>
                    <input type="text" />
                  </div>
                  <div className="inputField">
                    <label htmlFor="">Password</label>
                    <input type="text" />
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
                    <button>Login</button>
                  </div>
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
                    Don’t have an account? <a href="signup">Sign Up</a>{" "}
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
    </>
  );
};

export default Login;
