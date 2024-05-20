import React from "react";
import Slider1 from "./Slider1";

const Fsection = () => {
  return (
    <>
      <div className="relative flex flex-col md:flex-row bg-gradient-to-r from-[#00003c] to-[#8400d1] p-1 text-white justify-around flex-wrap">
      <div className="flex flex-col justify-center ">
        <p className="text-4xl md:text-5xl font-bold leading-tight">
          FRASERSPLUS <br />EXCLUSIVE
        </p>
        <p className="mt-4 text-lg md:text-xl leading-normal text-wrap">
          Nothing to pay today. Pay in three for interest free. <br /> Representative APR 29.9% (Variable) <br />If you choose to pay over 6 months or longer.
        </p>
        <p className="mt-4 text-lg sm:text-2xl md:text-3xl bg-[#8400d1] rounded-md py-2 px-4 w-max">
          1000's of lines up to 70% off*
        </p>
        <div className="mt-6 flex flex-col sm:flex-row">
          <button className="bg-gray-200 hover:bg-blue-500 duration-300 text-gray-800 p-2 rounded m-2">Shop All</button>
          <button className="bg-gray-200 hover:bg-blue-500 duration-300 text-gray-800 p-2 rounded m-2 mt-0 sm:mt-2">Read More</button>
        </div>
      </div>
      <img src="https://www.sportsdirect.com/images/marketing/frasers-plus-min.png" alt="" className="h-auto md:w-auto hidden lg:block md:h-full md:absolute"/>
      
      <div className="w-full p-6 lg:p-0 md:w-2/5 ">
        <Slider1 />
      </div>
    </div>
    </>
  );
};

export default Fsection;
