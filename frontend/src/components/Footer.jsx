import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
        <img src={assets.logo} alt="" className='mb-5 w-32' />
        <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis obcaecati facilis ipsa exercitationem? Nostrum laborum soluta reprehenderit omnis explicabo officia odio? Quo quaerat cum a provident magnam corporis repudiandae illum!</p>
      </div>
      <div>
        <p className='text-xl mb-5 font-medium'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <p className='text-xl mb-5 font-medium'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+92 3243453772</li>
            <li>rafayahmedrtech@gmail.com</li>
        </ul>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @forever.com - All Right Reserved.</p>
      </div>

    </div>
    </div>
  )
}

export default Footer
