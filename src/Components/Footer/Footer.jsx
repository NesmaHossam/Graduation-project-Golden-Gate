import React from "react";
import "./Footer.css";

import Logo_Icon from "../Assests/Logo_icon.png";
import devicon_linkedin from "../Assests/devicon_linkedin.png";
import devicon_facebook from "../Assests/devicon_facebook.png";
import icon_park_mail_open from "../Assests/icon_park_mail_open.png";
import clarity_world_line from "../Assests/clarity_world_line.png"
import Vector from "../Assests/Vector.png"

const Footer = () => {
  return (
    <div className="footer ">
      <div className="log-icon ">
        <img src={Logo_Icon} alt="" />
        <p>&copy; copy rights reserved</p>

      </div>

      <div className="Links-footer">
        <div>
          <h3>Explore</h3>
          <ul>
            <li>About us </li>
            <li>Privacy policy</li>
            <li>Help and Support</li>
          </ul>
        </div>

        <div className="contact-us">
          <h3>Contact us</h3>
          <ul>
            <li>
              <img src={devicon_linkedin} alt="" />
              LinkedIn{" "}
            </li>
            <li><img src={devicon_facebook} alt=""/>Facebook</li>
            <li><img src={icon_park_mail_open} alt=""/>E-mail</li>
          </ul>
        </div>
      </div>

      <div className="language">
        <div className="language-icon">
            <img src={clarity_world_line} alt=""/>
            <h2>English</h2>

        </div>

      
      </div>
    </div>
  );
};

export default Footer;
