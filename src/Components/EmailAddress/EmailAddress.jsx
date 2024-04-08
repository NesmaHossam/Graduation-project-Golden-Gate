import React from "react";
import "./EmailAddress.css";

const EmailAddress = () => {
  return (
    <div className="emailAddres-container">
      <h1>Your e-mail</h1>

      <input type="email" placeholder="email of the user "/>
      <button>Change E-mail</button>
    </div>
  );
};

export default EmailAddress;
