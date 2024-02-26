import React from "react";
import "./Css/ResetPassword.css";
import Photo1 from "../Components/Assests/reset.png";
import { Link, link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="reset-password">
      <form>
        <div className="reset-password-left">
          <h1>Reset Password</h1>

          <div className="reset-password-fields">
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
          </div>
         <Link to="/"><button>Reset Password</button></Link> 
        </div>

        <div className="reset-password-right">
          <img src={Photo1} alt="" />
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
