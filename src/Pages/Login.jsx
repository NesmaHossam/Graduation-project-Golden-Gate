import React from "react";
import "./Css/Login.css";
import Photo1 from "../Components/Assests/Photo1.png";
import face_icon from "../Components/Assests/face_icon.png";
import google_icon from "../Components/Assests/google_icon.png";
import { Link, link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <form>
        <div className="signup-container">
          <h1>Welcome Back!</h1>
          <h3>LOGIN</h3>
          <div className="loginsignup-fields">
            <input type="text" placeholder="E-mail" />
            <input type="password" placeholder="password" />
            <p className="loginsignup-login">
              Forgot password?{" "}
              <span>
                <Link to="/reset">Reset password</Link>
              </span>
            </p>
          </div>
          <button>LOGIN</button>

          <p className="loginsignup-login">
            Doesn't have an account?{" "}
            <span>
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
          <h4>Or</h4>

          <div>
            <a href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S923061028%3A1708108675629078&theme=glif">
              {" "}
              <img src={google_icon} alt="" />{" "}
            </a>
            <a href="https://www.facebook.com/login.php/">
              {" "}
              <img src={face_icon} alt="" />{" "}
            </a>
          </div>
        </div>

        <div className="signup-right">
          <img src={Photo1} alt="" />
        </div>
      </form>
    </div>
  );
};

export default Login;
