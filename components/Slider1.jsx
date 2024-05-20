"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Productcard1 from "./Productcard1";

const Slider1 = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

  return (
    <Slider {...settings} className="slider-container">
      <div className="p-2">
        <div className=" ">
          <Productcard1
            Images="https://www.sportsdirect.com/images/products/76500203_h.jpg"
            Name="Reebok"
            text="Reebok GT40 S Treadmill"
            Des="Frasers Plus Price £499.99"
            price="£599.99"
          />
        </div>
      </div>
      <div className="p-2">
        <div >
          <Productcard1
            Images="	https://www.sportsdirect.com/images/products/26304103_h.jpg"
            Name="adidas"
            text="adidas Goletto VIII Astro Turf Football Boots"
            Des="Frasers Plus Price £15.00"
            price="£25.00"
          />
        </div>
      </div>
      <div className="p-2">
        <div >
          <Productcard1
            Images="https://www.sportsdirect.com/images/products/62135702_h.jpg
"
            Name="Under Armour"
            text="Under Armour Tech Vent SS"
            Des="Frasers Plus Price £10.00"
            price="£16.00"
          />
        </div>
      </div>
      <div className="p-2">
        <div >
          <Productcard1 Images="https://www.sportsdirect.com/images/products/27124903_h.jpg" Name="Under Armour" text="Under Armour Armour Charged Rogue 3 Trainers Womens" Des="Frasers Plus Price £22.00" price="£36.00" />
        </div>
      </div>
    </Slider>
  );
};

export default Slider1;
