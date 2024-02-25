import React from "react";
import bro from "../Assests/bro.png";
import "./ConfirmationPassword.css";

const ConfirmationPassword = () => {
  return (
    <div className="confirmation-password">
      <form>
        <div className="confirmation-password-text">
          <h1>Reset your password </h1>
          <p>Please enter the e-mail address you used to register with. </p>
          <input type="email" placeholder="E-mail Address" />
          <button>Send code</button>
        </div>

        <div>
          <img src={bro} alt="" />
        </div>
      </form>
    </div>
  );
};

export default ConfirmationPassword;
