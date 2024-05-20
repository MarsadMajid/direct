import React from 'react';

const Bcard = (props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img className="w-full" src={props.image}alt="Product" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.text}</div>
      </div>
      <div className="px-6 pb-4">
        <button className="bg-white text-black font-semibold py-2 px-4 border border-black rounded hover:bg-black hover:text-white transition duration-300">
          Shop now
        </button>
      </div>
    </div>
  );
}

export default Bcard;
