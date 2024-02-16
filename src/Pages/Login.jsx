import React from "react";
import "./Css/Login.css";
import Photo1 from "../Components/Assests/Photo1.png";
import face_icon from "../Components/Assests/face_icon.png";
import google_icon from "../Components/Assests/google_icon.png";
import { Link, link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
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
          <a href="https://www.gmail.com/login.php/">
            {" "}
            <img src={google_icon} alt=""/>{" "}
          </a>
          <a href="https://www.facebook.com/login.php/">
            {" "}
            <img src={face_icon}  alt=""/>{" "}
          </a>
        </div>
      </div>

      <div className="signup-right">
        <img src={Photo1} alt=""/>
      </div>
    </div>
  );
};

export default Login;
