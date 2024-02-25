import React from "react";
import "./ConfirmationCode.css";
import confiramation_code from "../Assests/confirmation_code.png";
import { Link } from "react-router-dom";
const ConfirmationCode = () => {
  return (
    <div className="confirmation-code">
      <div className="confirmation-code-left">
        <h1>Code sent </h1>
        <p>Please enter the 4 digit code </p>
        <div className="confirmation-code-left-input">
          <input type="text" placeholder="_" />
          <input type="text" placeholder="_"/>
          <input type="text" placeholder="_" />
          <input type="text" placeholder="_" />
        </div>

        <Link to="/newpass/:id">
          <button>Enter</button>
        </Link>
      </div>
      <div className="confirmation-code-right">
        <img src={confiramation_code} alt="" />
      </div>
    </div>
  );
};

export default ConfirmationCode;
