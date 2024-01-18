import React from 'react';
import logo from '../images/logo.png';
import lens from '../images/lens.png';    
import profile from '../images/profile.png';
import arrow from '../images/arrow.png';

const Navbar = () => {
  return (
    <div className='flex items-center p-3 shadow-lg h-20'>
      <img src={logo} className='w-14 h-14' />
      <p className='font-bold text-md underline ml-5'>Order</p>
      <p className='text-md ml-3'>Location</p>
      <img src={arrow} className="w-7 h-7" />
      <img src={lens} className='w-5 h-5 ml-96' />
      <p className='ml-3'>Search</p>
      <img src={profile} className='w-7 h-7 ml-28' />
      <p className='ml-3'>Sign In</p>
    </div>
  )
}

export default Navbar
