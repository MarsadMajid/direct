import React from 'react'

const Productcard1 = (props) => {
  return (
 <div className="max-w-lg rounded overflow-hidden  text-white p-4">
      <img className="w-full h-48 object-contain " src={props.Images} alt="Product" />
      <div className="px-2 py-4">
        <div className="font-bold text-md mb-2">
          {props.Name}
        </div>
        <div className="text-sm mb-4">{props.text}</div>
        <div className="bg-purple-500 text-white text-center font-bold py-1 px-2 rounded mb-2">
         {props.Des}
        </div>
        <div className="text-lg">
          <span className="line-through text-gray-400">{props.price}</span>
        </div>
      </div>
    </div>
  )
}

export default Productcard1