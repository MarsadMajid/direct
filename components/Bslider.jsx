'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useEffect,useState } from 'react';

import Bcard from './Bcard';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrNext
      className={className}
      style={{ ...style, display: "block", color: "blue", backgroundColor:"rgba(255,255,240)", boxShadow: "0px 0px 10px 0px rgb(0 0 0 / 5%)"  }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrPrevious
      className={className}
      style={{ ...style, display: "block", color: "blue", backgroundColor:"rgba(255,255,240)", boxShadow: "0px 0px 10px 0px rgb(0 0 0 / 5%)"}}
      onClick={onClick}
    />
  );
}


const Bslider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(1);
  const settings = {
    className: "center",
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>, 
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    afterChange: (current) => setTotalSlides(current + 1),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    setTotalSlides(document.querySelectorAll('.slick-slide').length - 2); // Adjust for clone slides
  }, []);

  const progress = (currentSlide / (totalSlides - 1)) * 100;

  return (
    <>
    <Slider {...settings} className="slider-container text-black">
      <div className="p-2">
        <div className=" rounded-lg shadow-lg">
          <Bcard image="https://www.sportsdirect.com/images/marketing/t-shirts-240514-v5.jpg" text="Tops & T-shirts"/>
        </div>
      </div>
      <div className="p-2">
        <div className=" rounded-lg shadow-lg ">
        <Bcard image="https://www.sportsdirect.com/images/marketing/trainers-240514-v2.jpg" text="Footwear"/>
        </div>
      </div>
      <div className="p-2">
        <div className=" rounded-lg shadow-lg ">
        <Bcard image="https://www.sportsdirect.com/images/marketing/hoodies-240514-v2.jpg" text="Hoodies & Sweatshirts"/>
        </div>
      </div>
      <div className="p-2">
        <div className=" rounded-lg shadow-lg ">
        <Bcard image="https://www.sportsdirect.com/images/marketing/shorts-240514-v2.jpg" text="Shorts"/>
        </div>
      </div>
      <div className="p-2">
        <div className=" rounded-lg shadow-lg ">
        <Bcard image="https://www.sportsdirect.com/images/marketing/trousers-240514-v2.jpg" text="Trousers"/>
        </div>
      </div>
      <div className="p-2">
        <div className=" rounded-lg shadow-lg">
        <Bcard image="https://www.sportsdirect.com/images/marketing/jackets-240514-v2.jpg" text="Jackets & coats"/>
        </div>
      </div>
    </Slider>
    <div className="w-full h-2 bg-gray-300 rounded mt-4 overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
};

export default Bslider;
