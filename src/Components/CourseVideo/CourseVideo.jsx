/*import React from "react";
import "./CourseVideo.css";
import video1 from '../Assests/nnn.mp4';


const CourseVideo = () => {
  return (
    <div className="course-video container">
      <div class="row">
        <div class="col-8">
          <video src={video1} controls autoplay muted></video>
        </div>
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

export default CourseVideo;*/

/*import React, { useState, useEffect } from "react";
import "./CourseVideo.css";
import video1 from '../Assests/nnn.mp4';
import OverView from "../OverView/OverView"; 
import { Link } from "react-router-dom";
import Comments from "../Comments/Comments";


/*const CourseVideo = () => {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const response = await fetch("YOUR_API_ENDPOINT"); // Replace with your API endpoint
        const data = await response.json();
        setVideoUrl(data.videoUrl); // Replace 'videoUrl' with the actual property in your API response
      } catch (error) {
        console.error("Error fetching video URL:", error);
      }
    };

    fetchVideoUrl();
  }, []); // Empty dependency array to fetch the video URL once when the component mounts*/
    /*const CourseVideo = () => {
    const [videoUrl, setVideoUrl] = useState("");
  
    useEffect(() => {
      const fetchVideoUrl = async () => {
        // Your API call implementation here
      };
  
      fetchVideoUrl();
    }, []);

  return (
    <div className="course-video container">
      <div className="row">
        <div className="col-8">
          <video src={video1} controls autoPlay muted></video>
        </div>
        </div>
      <div class="align-items-center">
      <div class="row">
        <div class="col">
        <h3><Link to="#overview">Overview</Link></h3>
        <div> <OverView /> </div>
        </div>
        <div class="col">
        <h3><Link to="#comments">Comments</Link></h3>
        <div> <Comments/></div>
        </div>
        <div class="col">
        <h3><Link to="#room">Room</Link></h3>
        </div>
        </div>
        </div>
        </div>
   
  );
};

export default CourseVideo;*/

//import React from "react";
/*import "./CourseVideo.css";
import React, { useState, useEffect } from "react";
import video1 from "../Assests/nnn.mp4";
import VideoInfo from "../OverView/OverView"; // Import the VideoInfo component

const CourseVideo = () => {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchVideoUrl = async () => {
      // Your API call implementation here
    };

    fetchVideoUrl();
  }, []);

  return (
    <div className="course-video-container">
      <video src={video1} controls autoPlay muted></video>
      <div className="course-video-content">
        {/* Existing content goes here }
      </div>
      <VideoInfo /> {/* Add the VideoInfo component here }
    </div>
  );
};

export default CourseVideo;*/


/*import React, { useState, useEffect } from "react";
import "./CourseVideo.css";
import video1 from '../Assests/nnn.mp4';
import OverView from "../OverView/OverView"; 
import Comments from "../Comments/Comments";
import Rooms from "../Rooms/Rooms";

const CourseVideo = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [showOverview, setShowOverview] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [showRooms, setShowRooms] = useState(false);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      // Your API call implementation here
    };

    fetchVideoUrl();
  }, []);

  const handleOverviewClick = () => {
    setShowOverview(true);
    setShowComments(false);
  };

  const handleCommentsClick = () => {
    setShowOverview(false);
    setShowComments(true);
  };
  const handleRoomsClick = () => {
    setShowOverview(false);
    setShowComments(false);
    setShowRooms(true);
  };

  return (
    <div className="course-video">
    <div className="row">
      <div className="col-8">
        <video src={video1} controls autoPlay muted></video>
      </div>
    </div>
    <div className="align-items-center">
        <div className="row">
        <div className="col">
          <h3 onClick={handleOverviewClick} style={{ cursor: "pointer" }}>Overview</h3>
          {showOverview && <OverView/>}
        </div>
        <div className="col">
          <h3 onClick={handleCommentsClick} style={{ cursor: "pointer" }}>Comments</h3>
          {showComments && <Comments/>}
        </div>
        <div className="col">
        <h3 onClick={handleRoomsClick} style={{ cursor: "pointer" }}>Rooms</h3>
          {showRooms && <Rooms/>}
        </div>
        </div>
    </div>
  </div>
  );
};

export default CourseVideo;*/

import React, { useState, useEffect } from "react";
import "./CourseVideo.css";
import video1 from '../Assests/nnn.mp4';
import OverView from "../OverView/OverView"; 
import Comments from "../Comments/Comments";
import Rooms from "../Rooms/Rooms";


const CourseVideo = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const [showOverview, setShowOverview] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [showRooms, setShowRooms] = useState(false);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      // Your API call implementation here
    };

    fetchVideoUrl();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowOverview(tab === "overview");
    setShowComments(tab === "comments");
    setShowRooms(tab === "rooms");
  };
  
  return (
    <div className="course-video">
      <div className="row">
        <div className="col-8">
          <video src={video1} controls autoPlay muted></video>
        </div>
      </div>
      <div className="align-items-center">
        <div className="row">
          <div className="col">
            <h3 onClick={() => handleTabClick("overview")}
              className={activeTab === "overview" ? "active-tab" : ""}
              style={{ cursor: "pointer" }}>
              Overview 
            </h3>
          </div>

          <div className="col">
            <h3  onClick={() => handleTabClick("comments")}
              className={activeTab === "comments" ? "active-tab" : ""}
              style={{ cursor: "pointer" }}>
              Comments
            </h3>
          </div>

          <div className="col">
            <h3 onClick={() => handleTabClick("rooms")}
              className={activeTab === "rooms" ? "active-tab" : ""}
              style={{ cursor: "pointer" }}>
              Rooms
             </h3>
          </div>
        </div>
      </div>


      <div id="overview">
        {showOverview && <OverView
            title="About this course"
            coursedescription="some important information about this course: what the student need to know and will learn in the course"
            skillLevel="All levels"
            languages="English"
            students={25}
            captions="yes"
            lectures={100}
            totalHours="15 hours"
            features="Available on ..."
            description="description in details of the course and what he is doing in the course and every video .
            description in details of the course and what he is doing in the course and every video .
            description in details of the course and what he is doing in the course and every video .
            description in details of the course and what he is doing in the course and every video .
            description in details of the course and what he is doing in the course and every video .
            description in details of the course and what he is doing in the course and every video ."
            instructorName="Instructor Name"/>}
      </div>
      
      <div id="comments">
        {showComments && <Comments
        title="All comments and questions in this course"
         username="Username"
         email="email of the user"
         text=" comment or question of the user in this course, he can put photo or video (media) .............."
         />}
      </div>
      <div id="rooms">
        {showRooms && <Rooms />}
      </div>
    </div>
  );
};

export default CourseVideo;


