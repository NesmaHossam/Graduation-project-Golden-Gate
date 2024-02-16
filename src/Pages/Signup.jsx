import React from "react";
import "./Css/Signup.css";
import Photo1 from "../Components/Assests/Photo1.png";
import face_icon from "../Components/Assests/face_icon.png";
import google_icon from "../Components/Assests/google_icon.png";

import { Link, link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-left">
        <h1>SIGN UP</h1>

        <div className="signup-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="E-mail" />
          <input type="number" placeholder="Age" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>

        <button>SIGN UP</button>
        <p className="loginsignup-login">
          Already have an account?{" "}
          <span>
            <Link to="/login">Login here</Link>
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
            <img src={face_icon} alt=""/>{" "}
          </a>
        </div>
      </div>

      <div className="signup-right">
        <img src={Photo1} alt=""/>
      </div>
    </div>
  );
};

export default Signup;
