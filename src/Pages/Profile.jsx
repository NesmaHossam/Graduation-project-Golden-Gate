import React, { useState, useEffect } from "react";
import "./Css/Profile.css";
import ProfilePicture from "../Components/ProfilePicture/ProfilePicture";
import Arrow_icon from "../Components/Assests/Arrow_icon.png";
import Book_icon from "../Components/Assests/Book_icon.png";
import Lock_icon from "../Components/Assests/Lock_icon.png";
import email_icon from "../Components/Assests/email_icon.png";
import Logout_icon from "../Components/Assests/Logout_icon.png";
import phone_icon from "../Components/Assests/phone_icon.png";
import { Link } from "react-router-dom";

// import files
import MyCourses from "../Components/MyCourses/MyCourses";
import Password from "../Components/Password/Password";
import EmailAdress from "../Components/EmailAddress/EmailAddress";
import HelpAndSupport from "../Components/HelpAndSupport/HelpAndSupport";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("");
  const [showMyCourses, setShowMyCourses] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showEmailAddress, setShowEmailAddress] = useState(false);
  const [showHelpAndSupport, setShowHelpAndSupport] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowMyCourses(tab === "myCourses");
    setShowPassword(tab === "password");
    setShowEmailAddress(tab === "emailAddress");
    setShowHelpAndSupport(tab === "helpAndSupport");
  };

  return (
    <div className="profile">
      <div className="profile-main ">
        <ProfilePicture />

        <div className="profile-content">
          <div>
            <img src={Book_icon} alt="" className="profile-icon" />
            <h2>My Courses</h2>
            <img
              src={Arrow_icon}
              alt=""
              onClick={() => handleTabClick("myCourses")}
              className={activeTab === "myCourses" ? "active-tab" : ""}
              style={{ cursor: "pointer"}}
            />
          </div>

          <div>
            <img src={Lock_icon} alt="" className="profile-icon" />
            <h2>Password</h2>
            <img
              src={Arrow_icon}
              alt=""
              onClick={() => handleTabClick("password")}
              className={activeTab === "password" ? "active-tab" : ""}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div>
            <img src={email_icon} alt="" className="profile-icon" />
            <h2>Email Address</h2>
            <img
              src={Arrow_icon}
              alt=""
              onClick={() => handleTabClick("emailAddress")}
              className={activeTab === "emailAddress" ? "active-tab" : ""}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div>
            <img src={phone_icon} alt="" className="profile-icon" />
            <h2>Help and Support</h2>
            <img
              src={Arrow_icon}
              alt=""
              
              onClick={() => handleTabClick("helpAndSupport")}
              className={activeTab === "helpAndSupport" ? "active-tab" : ""  }
              style={{ cursor: "pointer" }}
            />
          </div>
          <div>
            <img src={Logout_icon} alt="" className="profile-icon" />
            <h2>Logout</h2>
            <Link to="/logout">
              {" "}
              <img src={Arrow_icon} alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div className="profile-components ">
        <div id="myCourses">{showMyCourses && <MyCourses />}</div>

        <div id="password">{showPassword && <Password />}</div>

        <div id="emailAddress">{showEmailAddress && <EmailAdress />}</div>
      </div>
    </div>
  );
};

export default Profile;
