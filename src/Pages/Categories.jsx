import React from "react";
import "./Css/Categories.css";
import Development_Img from "../Components/Assests/Development_Img.png";
import Business_Img from "../Components/Assests/Business_Img.png"
import Design_img from "../Components/Assests/Designn_Img.png";
import Marketing_img from "../Components/Assests/Marketting_img.png";
import IT_img from "../Components/Assests/IT_img.png";
import Photography_video_img from "../Components/Assests/Photography_video_img.png";
import Finance_img from "../Components/Assests/Finance_img.png";
import Software from "../Components/Assests/Software_img.png";
import Office_img from "../Components/Assests/Office_img.png";
import Personal_img from "../Components/Assests/Personal_img.png";
import Music_img from "../Components/Assests/Music_img.png";
import Lifestyle_img from "../Components/Assests/Lifestyle_img.png";
import Health_fitness_img from "../Components/Assests/Health_fitness_img.png";
const Categories = () => {
  return (
    <div className="categories">
      <h1>Categories</h1>

      <div className="category-fields">
        <div>
          <img src={Development_Img} />
          <h3>Development</h3>
        </div>
        <div>
          <img src={Business_Img} />
          <h3>Business</h3>
        </div>

        <div>
          <img src={Finance_img} />
          <h3>Finance & Accounting</h3>
        </div>
        <div>
          <img src={Software} />
          <h3>IT & Software</h3>
        </div>

        <div>
          <img src={Design_img} />
          <h3>Design</h3>
        </div>

        <div>
          <img src={Marketing_img} />
          <h3>Marketing</h3>
        </div>

        <div>
          <img src={Health_fitness_img} />
          <h3>Health & Fitness</h3>
        </div>

        <div>
          <img src={Lifestyle_img} />
          <h3>LifeStyle</h3>
        </div>

        <div>
          <img src={Photography_video_img} />
          <h3>Photography & Video</h3>
        </div>

        <div>
          <img src={Music_img} />
          <h3>Music</h3>
        </div>

        <div>
          <img src={Personal_img} />
          <h3>Personal development</h3>
        </div>

        <div>
          <img src={Office_img} />
          <h3>Office Productivity</h3>
        </div>
      </div>
    </div>
  );
};

export default Categories;
