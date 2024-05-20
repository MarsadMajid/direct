import React from 'react'

const Cat = () => {
  return (
    <div>
        <ul className='flex text-center gap-4 flex-wrap items-center justify-center mt-2'>
            <li className='border p-4 hover:border-blue-400 '>mens</li>
            <li className='border p-4 hover:border-blue-400 '>womens</li>
            <li className='border p-4 hover:border-blue-400 '>kids</li>
            <li className='border p-4 hover:border-blue-400 '>EURO kits</li>
            <li className='border p-4 hover:border-blue-400 '>Trending:Nike Trainers</li>
            <li className='border p-4 hover:border-blue-400 '>Football</li>
            <li className='border p-4 hover:border-blue-400 '>Running</li>
            <li className='border p-4 hover:border-blue-400 '>Training</li>
            <li className='border p-4 hover:border-blue-400 '>Outdoor</li>
            <li className='border p-4 hover:border-blue-400 '>Daily Deals</li>
        </ul>
    </div>
  )
}

export default Cat;