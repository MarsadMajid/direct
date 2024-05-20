import React from 'react'

const Card1 = () => {
  return (
<div className="flex flex-col md:flex-row p-4 gap-3">
    <div className="relative w-full md:w-1/2">
        <img src="https://www.sportsdirect.com/images/marketing/arsenal-958x664-240514.jpg" alt="Card image cap" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-end items-center p-4 bg-black bg-opacity-50">
            <p className="text-center font-bold text-xl md:text-lg sm:text-base text-gray-300">Brand Clearance</p>
            <p className="text-center text-gray-300">Discover up to 50% off some quality Nike products - from tops and bottoms to footwear and accessories, shop the range now.</p>
            <button className="bg-gray-200 hover:bg-blue-500 duration-300 text-gray-800 p-2 rounded mt-2">Shop Now</button>
        </div>
    </div>
    <div className="relative w-full md:w-1/2">
        <img src="https://www.sportsdirect.com/images/marketing/puma-man-city-768x600-240514.jpg" alt="Card image cap" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-end items-center p-4 bg-black bg-opacity-50">
            <p className="text-center font-bold text-xl md:text-lg sm:text-base text-gray-300">Deal of the Day</p>
            <p className="text-center text-gray-300">Men's Under Armour Anorak Jacket for just £13.99. Don't miss out, get it while you can!</p>
            <button className="bg-gray-200 hover:bg-blue-500 duration-300 text-gray-800 p-2 rounded mt-2">Shop Now</button>
        </div>
    </div>
</div>
  )
}

export default Card1