import React from 'react'
import TextAnimation from './Textanimation'
import Navbar1 from './Navbar1'
import Cat from './Cat'

const Hedder = () => {
  return (
    <>
    <div className='bg-red-500 text-center py-2 overflow-hidden'>
    <TextAnimation/>
    </div>
    <div>
      <Navbar1/>
      <Cat/>
    </div>
    </>
  )
}

export default Hedder