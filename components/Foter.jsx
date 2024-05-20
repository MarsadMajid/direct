import React from "react";
import { FaCcMastercard } from "react-icons/fa";
const Foter = () => {
  return (
    <div className="bg-[#1d1d1d] text-white">
      <div className="p-8 text-center">
        <p className="text-xl font-bold">Sign up to our newsletter</p>
        <div className="flex gap-4 justify-center p-2 sm:p-4">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email Address"
            className="text-black py-2 pr-100 sm:pr-24 md:pr-36 lg:pr-52 m pl-3 rounded-sm"
          />
          <button className="bg-blue-900 p-1  sm:p-2 md:p-3 lg:p-4 rounded-sm">
            Sign Up
          </button>
        </div>
        <p>
          *By submitting your email address, you agree to receive marketing
          emails from SPORTS DIRECT. Click here to read our privacy policy &
          terms and conditions
        </p>
      </div>
      <div className="p-8 border-t-[0.3px] border-gray-500 border-b-[0.3] flex flex-wrap justify-between gap-8">
        <ul>
          <li>Customer services</li>
          <li>FAQ's</li>
          <li>Orders & payments</li>
          <li>Delivery & returns</li>
          <li>Track order</li>
        </ul>
        <ul className="text-wrap">
          <li>Information</li>
          <li>My account</li>
          <li>Personalisation</li>
          <li>Student & 16-26 discount</li>
          <li>Find your local store</li>
          <li>Sports Advice Hub</li>
          <li>Cookie preferences</li>
        </ul>
        <ul>
          <li>About us</li>
          <li>Careers</li>
          <li>Promotion terms</li>
          <li>Terms & conditions</li>
          <li>Corporate</li>
        </ul>
        <ul>
          <li>Follow us on social</li>
          <li>/sportsdirect</li>
          <li>@sportsdirect</li>
          <li>@sdfootball</li>
          <li>@sportsdirectfootball</li>
          <li>Sports Direct</li>
        </ul>
      </div>
      <div className=" flex flex-wrap  text-center justify-around  border-t-[0.3px] border-gray-500 border-b-[0.3px]">
        <div className="border-r-[0.3px]">
          <p className="p-6 ">United Kingdom (£ GBP) Edit</p>
        </div>
        <div className="border-r-[0.3px]">
          <p className="p-6 "> Store finder</p>
        </div>
        <div>
          <p className="p-6">Customer service</p>
        </div>
      </div>
      <div className="flex justify-between text-center items-center">
        <p className="text-center text-sm  ">
          © 2022 Sports Direct International plc. All rights reserved.
        </p>
        <div className="flex flex-wrap">
        <img src="/pc2.png" alt="" />
        <img src="/pc1.png" alt="" />
        <img src="/pc3.png" alt="" />
        <img src="/pc4.png" alt="" />
        <img src="/pc5.png" alt="" />
        <img src="/pc7.png" alt="" />
        <img src="/pc8.png" alt="" />
        <img src="/pc9.png" alt="" />
      </div>
      </div>
    </div>
  );
};

export default Foter;
