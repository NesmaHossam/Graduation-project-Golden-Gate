import React from "react";
import "./Reviews.css"
import { VscQuote, VscSettings } from "react-icons/vsc";
import { FaRegCirclePlay } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsPersonCircle } from "react-icons/bs";

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }



const Reviews =() =>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />
      };

    return(
<div className="reviews">
        <h1 > How students like you achieve their goals </h1>
        
        <div className="con" >
            <Slider {...settings}>
            {data.map((d) => (
           <div className="container">  
              <div className="review-icon-con">  <VscQuote className="review-icon"/> </div>
              <div className="review-con">{d.review}</div>
              <div className="person-info"> <BsPersonCircle className="person-icon"/> <div className="person-name">{d.personName}</div>  </div>
              <div className="course-info"> <FaRegCirclePlay className="play-icon"/> <div className="course-name"><a href="#">{d.course}</a></div> </div>
           </div>
           ))}
           </Slider>
        </div>
    </div>
    );
    
}

const data = [
    {
        personName:`Jason`,
        review:`Student review and what he did in the course Student review and what he did in the course Student review and what he did in the course`,
        course:`Mobile - 2015`
    },
    {
        personName:`Mark`,
        review:`Student review and what he did in the course Student review and what he did in the course Student review and what he did in the course`,
        course:`Front-end - 2020`
    },
    {
        personName:`Harry`,
        review:`Student review and what he did in the course Student review and what he did in the course Student review and what he did in the course`,
        course:`Front-end - 2020`
    },
    {
        personName:`Jonas`,
        review:`Student review and what he did in the course Student review and what he did in the course Student review and what he did in the course`,
        course:`Back-end - 2017`
    },
    {
        personName:`Sara`,
        review:`Student review and what he did in the course Student review and what he did in the course Student review and what he did in the course`,
        course:`Mobile - 2015`
    },
    {
        personName:`Luna`,
        review:`Student review and what he did in the course Student review and what he did in the course Student review and what he did in the course`,
        course:`Back-end - 2017`
    },
    {
        personName:`Holya`,
        review:`Student review and what he did in the course Student review and what he did in the course Student review and what he did in the course`,
        course:`Mobile - 2015`
    },
]

export default Reviews