import React from "react";
import "./ConfirmationCode.css"
import confiramation_code from "../Assests/confirmation_code.png"

const ConfirmationCode =() =>{
    return (
        <div className="confirmation-code">
            <div className="confirmation-code-left">
               <h1>Code sent </h1> 
               <p>Please enter the 4 digit code </p>

            </div>
            <div className="confirmation-code-right">
                <img src={confiramation_code} alt=""/>
            </div>

        </div>
    )
}


export default ConfirmationCode