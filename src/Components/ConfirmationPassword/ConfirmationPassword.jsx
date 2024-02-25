import React from "react";
import bro from "../Assests/bro.png";
import "./ConfirmationPassword.css";
import { Link } from "react-router-dom";
const ConfirmationPassword = () => {
  return (
    <div className="confirmation-password">
      <form>
        <div className="confirmation-password-text">
          <h1>Reset your password </h1>
          <p>Please enter the e-mail address you used to register with. </p>
          <input type="email" placeholder="E-mail Address" />
         <Link to="/confirmCode"><button>Send code</button></Link> 
        </div>

        <div>
          <img src={bro} alt="" />
        </div>
      </form>
    </div>
  );
};

export default ConfirmationPassword;
