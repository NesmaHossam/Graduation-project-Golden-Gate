// Slider.js
import React from "react";
import Slider from "react-slick";
import Course from "./Course";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Components/MostSearched/MostSearched.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
  };

  const courses = [
    {
      title: <a href="your_python_bootcamp_link" class="bootcamp-link">  The Complete Python Bootcamp From Zero to Hero in Python </a>,
      mentor: "Mentor Name",
      rating: 3.5,
      views: "(360,712)",
      price: "400 EGP",
      salePrice: "349 EGP",
      img: "../Assests/pr1.png",
      id: 1,
    },
    {
      title: <a href="your_python_bootcamp_link" class="bootcamp-link">  The Complete Python Bootcamp From Zero to Hero in Python </a>,
      mentor: "Mentor Name",
      rating: 3.5,
      price: "400 EGP",
      views: "(360,712)",
      salePrice: "349 EGP",
      img: "../Assests/pr1.png",
      id: 2,
    },
    {
      title: <a href="your_python_bootcamp_link" class="bootcamp-link">  The Complete Python Bootcamp From Zero to Hero in Python </a>,
      mentor: "Mentor Name",
      rating: 3.5,
      price: "400 EGP",
      views: "(360,712)",
      salePrice: "349 EGP",
      img: "../Assests/pr1.png",
      id: 3,
    },
    {
      title:<a href="your_python_bootcamp_link" class="bootcamp-link">  The Complete Python Bootcamp From Zero to Hero in Python </a>,
      mentor: "Mentor Name",
      rating: 3.5,
      price:"400 EGP",
      views: "(360,712)",
      salePrice: "349 EGP",
      img: "../Assests/pr1.png",
      id: 4,
    },
    {
      title: <a href="your_python_bootcamp_link" class="bootcamp-link">  The Complete Python Bootcamp From Zero to Hero in Python</a>,
      mentor: "Mentor Name",
      rating: 3.5,
      price: "400 EGP",
      views: "(360,712)",
      salePrice: "349 EGP",
      img: "../Assests/pr1.png",
      id: 5,
    },
    {
      title: <a href="your_python_bootcamp_link" class="bootcamp-link"> The Complete Python Bootcamp From Zero to Hero in Python</a>,
      mentor: "Mentor Name" ,
      rating: 3.5,
      price: "400 EGP" ,
      views: "(360,712)",
      salePrice: "349 EGP",
      img: "../Assests/pr1.png",
      id: 6,
    },
  ];
  return (
    <div className="Container">
      <Slider {...settings}>
        {courses.map((el) => (
          <Course
            key={el.id}
            title={el.title}
            mentor={el.mentor}
            price={el.price}
            views={el.views}
            salePrice={el.salePrice}
            img={el.img}
            rating={el.rating}
          />
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;