import React from "react";
import "./TopCategories.css";
import Design_img from "../Assests/Design_img.png";
import Development_img from "../Assests/Development-img.png";
import Marketing_img from "../Assests/Marketing_img.png";
import Business_img from "../Assests/Business.png";
import IT_img from "../Assests/IT_img.png";
import Photography_img from "../Assests/Photography_img.png";

const TopCategories = () => {
  return (
    <div className="top-categories">
      <h1>Top Categories</h1>

      <div className="top-category-fields">
        <div>
          <img src={Design_img} />
          <h3>Design</h3>
        </div>
        <div>
          <img src={Development_img} />
          <h3>Development</h3>
        </div>

        <div>
          <img src={Marketing_img} />
          <h3>Marketing</h3>
        </div>
        <div>
          <img src={Business_img} />
          <h3>Business</h3>
        </div>
        <div>
          <img src={IT_img} />
          <h3>IT & Software</h3>
        </div>
        <div>
          <img src={Photography_img} />
          <h3>Photography</h3>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
