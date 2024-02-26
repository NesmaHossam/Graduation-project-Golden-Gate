import React from "react";
import "./Css/CoursePlay.css";
import CourseVideo from "../Components/CourseVideo/CourseVideo";
import CourseContent from "../Components/CourseContent/CourseContent";

const CoursePlay = () => {
  return (
    <div className="course-play container-fluid">
      <div className="row row-cols-2">
        <div className="col-8">
          <CourseVideo />
        </div>
        <div className="col-4">
          <CourseContent />
        </div>
      </div>
    </div>
  );
};

export default CoursePlay;
