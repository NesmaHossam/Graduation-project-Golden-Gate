/*import React from "react";
import "./OverView.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const OverView = () => {
  return (
    <div className="over-view">
      <div className="About-this-course">
        <h2>About this course</h2>
        <p>some important information about this course: what
        the student need to know and will learn in the course </p>
      </div>
      <div className="by-the-num">
      <p>By the numbers</p>
      <ul>
      <li>Skill level: All levels</li>
      <li>Languages: English</li>
      <li>Students: 25</li>
      <li>captions: yes</li>
      <li>Available on</li>
      <li>Lectures: 100</li>
      <li>Total hours: 15 hours</li>
      </ul>
      </div> 
       <div className="Features">
        <p>Features</p>
        <ul>
        <li>
        Available on .............
        </li>
        </ul>
       </div> 
       <div className="Description">
        <p>Description</p>
        <ul>
        <li>
        description in details of the course and what he is doing in the course and every video .
        description in details of the course and what he is doing in the course and every video .
        description in details of the course and what he is doing in the course and every video .
        description in details of the course and what he is doing in the course and every video .
        description in details of the course and what he is doing in the course and every video .
        description in details of the course and what he is doing in the course and every video .
        </li>
        </ul>
       </div>
       <div className="instructor-container">
       <i class="bi bi-person-circle"></i>
        <p>Instructor name</p>
       </div>
       </div>
    );
};

export default OverView;*/

import React from "react";
import "./OverView.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const OverView = ({ title, coursedescription, skillLevel, languages, students, captions, availableOn, lectures, totalHours, features,description ,instructorName }) => {
  return (
    <div className="over-view">
      <div className="About-this-course">
        <h2>{title}</h2>
        <p>{coursedescription}</p>
      </div>
      <div className="by-the-num">
        <p>By the numbers</p>
        <ul>
          <li>Skill level: {skillLevel}</li>
          <li>Languages: {languages}</li>
          <li>Students: {students}</li>
          <li>Captions: {captions}</li>
          <li>Lectures: {lectures}</li>
          <li>Total hours: {totalHours}</li>
        </ul>
      </div>
      <div className="Features">
        <p>Features</p>
        <ul>
          <li>{features}</li>
        </ul>
      </div>
      <div className="Description">
        <p>Description</p>
        <ul>
          <li>{description}</li>
        </ul>
      </div>
      <div className="instructor-container">
        <i className="bi bi-person-circle"></i>
        <p>{instructorName}</p>
      </div>
    </div>
  );
};

export default OverView;