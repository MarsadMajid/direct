import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
const Navbar1 = () => {
  return (
    <>
      <div className="bg-black flex justify-between p-3 flex-wrap">
          <div className="w-auto">
            <div className="bg-blue-500 text-white text-center">𝑺𝑷𝑶𝑹𝑻𝑺</div>
            <div className="bg-red-500 text-white text-center">𝑫𝑰𝑹𝑬𝑪𝑻</div>
          </div>
        <div>
        <div className="relative mx-auto max-w-lg">
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="text-gray-500" />
      </div>
    </div>
        </div>
        <div className="flex text-white ">
          <FaRegHeart className="" size={35} />
          <MdPerson className="" size={35} />
          <MdOutlineShoppingBag className="" size={40} />
        </div>
      </div>
      <div className="bg-gray-800 text-center items-center p-3">
        <ul className='text-white flex text-center gap-4 flex-wrap items-center justify-center'>
          <li>men</li>
          <li>women</li>
          <li>kids</li>
          <li>sports</li>
          <li>outdoor</li>
          <li>brands</li>
          <li className="bg-yellow-400 ">outlet</li>
          <li>games</li>
          <li>usc</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar1;
