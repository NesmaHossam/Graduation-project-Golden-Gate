import React from "react";
import "./YourFuture.css";
import rafiki from "../Assests/rafiki.png";

const YourFuture = () => {
  return (
    <div className="your-future">
      <div className="your-future-text">
        <h1>Step forward for your future !</h1>
        <p>Learn new skills for your present and your future. </p>
        <p>explore courses that fit your passion and pace.</p>
      </div>

      <div className="your-future-img">
        <img src={rafiki} alt=""/>
      </div>
    </div>
  );
};

export default YourFuture;
