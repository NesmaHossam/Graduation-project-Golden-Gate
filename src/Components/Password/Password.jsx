import React from "react";
import "./Password.css"

const Password = () =>{
    return(
        <div className="password-container">
            <div>
                <h1>Enter your current password*</h1>
                <input type="password" placeholder="************"/>
            </div>

            <div>
                <h1>Enter your new password*</h1>
                <input type="password" placeholder="************"/>
            </div>

            <div>
                <h1>Confirm your new password*</h1>
                <input type="password" placeholder="************"/>
            </div>
        </div>
    )
}


export default Password