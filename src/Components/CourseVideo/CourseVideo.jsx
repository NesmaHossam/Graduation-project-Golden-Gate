import React from "react";
import "./CourseVideo.css";



const CourseVideo = () => {
  return (
    <div className="course-video container">
      <div class="row">
        <div class="col-8">{/* hena code elvideo */}</div>
      </div>

      <div class="row align-items-center">
        <div class="col">
          <h3>Overview</h3>
        </div>
        <div class="col">
          <h3>Comments</h3>
        </div>
        <div class="col">
          <h3>Rooms</h3>
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;
