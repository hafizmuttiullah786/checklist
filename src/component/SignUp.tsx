import React from "react";
import google from "../Assets/imgs/google.webp";

const SignUp = () => {
  return (
    <>
      <div className="__login signup">
        <div className="login-Wraper">
          <div className="container">
            <div className="__form">
              <div className="heading">SIGN UP</div>
              <div className="loginaccount">Create your account</div>
              <div className="blue__line"></div>
              <div className="input_flex">
                <div className="inputField">
                  <label htmlFor="">First Name</label>
                  <input type="text" />
                </div>
                <div className="inputField">
                  <label htmlFor="">Last Name</label>
                  <input type="text" />
                </div>
              </div>
              <div className="input_flex">
                <div className="inputField">
                  <label htmlFor="">Password</label>
                  <input type="text" />
                </div>
                <div className="inputField">
                  <label htmlFor="">Confirm Password</label>
                  <input type="text" />
                </div>
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
                Already have an account? <a href="Login">Login</a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
