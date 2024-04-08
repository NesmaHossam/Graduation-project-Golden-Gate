import React from "react";
import "./MyCourses.css";
import Boock_icon from "../Assests/Boock_icon.png";
import { FaPlus } from "react-icons/fa6";

const MyCourses = () => {
  return (
    <div>
      <h1>My Courses</h1>
      <div className="myCourses-container">
      
         
          <div>
            <img src={Boock_icon} alt="" />
            <h2>Name of the course Name of the course</h2>
          </div>
          <div>
            <img src={Boock_icon} alt="" />
            <h2>Name of the course Name of the course</h2>
          </div>
          <div>
            <img src={Boock_icon} alt="" />
            <h2>Name of the course Name of the course</h2>
          </div>
     

        <hr />
        <button>
          <FaPlus />
          Add Course
        </button>
      </div>
    </div>
  );
};

export default MyCourses;
