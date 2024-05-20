import Link from 'next/link'
import React from 'react'
import Bslider from './Bslider'
import Bcard from './Bcard'

const Bsection = () => {
  return (
    <div className='p-8'>
        <div className='flex justify-between '>
            <p className='font-bold text-2xl'>ADIDAS BRAND CLEARANCE - UP TO 50% OFF</p>
            <Link href="./" className='hover:text-blue-400'>Shop now</Link>
        </div>
        <div className='p-4'>
            <Bslider/>
        </div>
        <div className='flex gap-6 items-center justify-center mt-16 flex-wrap'>
          <div className='w-80'><Bcard image="https://www.sportsdirect.com/images/marketing/hp-thumb-daily-deals-402x402.jpg" text="New products every day" /></div>
          <div className='w-80'><Bcard image="https://www.sportsdirect.com/images/marketing/liverpool-240514.jpg" text="Liverpool Home Kit 2024 2025" /></div>
          <div className='w-80'><Bcard image="https://www.sportsdirect.com/images/marketing/adidas-240514.jpg" text="adidas House of Tiro Nations Pack" /></div>
          <div className='w-80'><Bcard image="https://www.sportsdirect.com/images/marketing/hp-thumb-3-240411.jpg" text="England Kit" /></div>
        </div>
    </div>
  )
}

export default Bsection