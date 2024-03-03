import React from "react";
import "./Css/Profile.css";
import ProfilePicture from "../Components/ProfilePicture/ProfilePicture";
import Arrow_icon from "../Components/Assests/Arrow_icon.png";
import Book_icon from "../Components/Assests/Book_icon.png";
import Lock_icon from "../Components/Assests/Lock_icon.png";
import email_icon from "../Components/Assests/email_icon.png";
import Logout_icon from "../Components/Assests/Logout_icon.png";
import phone_icon from "../Components/Assests/phone_icon.png";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile-main">
      <ProfilePicture />

      <div className="profile-content">
        <div>
          <img src={Book_icon} alt=""  className="profile-icon"/>
          <h2>My Courses</h2>
         <Link to="/myCourses"> <img src={Arrow_icon} alt=""/></Link>
        </div>

        <div>
          <img src={Lock_icon} alt="" className="profile-icon"/>
          <h2>Password</h2>
          <Link to="/password"> <img src={Arrow_icon} alt=""/></Link>
        </div>
        <div>
          <img src={email_icon} alt="" className="profile-icon"/>
          <h2>Email Address</h2>
          <Link to="/emailAddress"> <img src={Arrow_icon} alt=""/></Link>
        </div>
        <div>
          <img src={phone_icon} alt="" className="profile-icon"/>
          <h2>Help and Support</h2>
          <Link to="/helpSupport"> <img src={Arrow_icon} alt=""/></Link>
        </div>
        <div>
          <img src={Logout_icon} alt="" className="profile-icon"/>
          <h2>Logout</h2>
          <Link to="/logout"> <img src={Arrow_icon} alt=""/></Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
