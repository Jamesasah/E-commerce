import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[30px] lg:gap-[50px] px-4 py-8'>
      <div className='flex items-center gap-[10px] lg:gap-[20px]'>
       <img src={footer_logo} alt="logo" className="w-8 h-8 lg:w-auto lg:h-auto" />
       <p className='text-[#383838] text-[24px] sm:text-[32px] lg:text-[45px] font-bold'>SHOPPER</p>
      </div>
      <ul className='flex flex-wrap justify-center list-none gap-[20px] lg:gap-[50px] text-[#252525] text-[14px] sm:text-[16px] lg:text-[20px] cursor-pointer'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-[15px] lg:gap-[20px]">
        <div className='p-[8px] lg:p-[10px] pb-[4px] lg:pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]'>
            <img src={instagram_icon} alt="instagram" className="w-5 h-5 lg:w-auto lg:h-auto" />
        </div>
        <div className='p-[8px] lg:p-[10px] pb-[4px] lg:pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]'>
            <img src={pinterest_icon} alt="pinterest" className="w-5 h-5 lg:w-auto lg:h-auto" />
        </div>
        <div className='p-[8px] lg:p-[10px] pb-[4px] lg:pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]'>
            <img src={whatsapp_icon} alt="whatsapp" className="w-5 h-5 lg:w-auto lg:h-auto" />
        </div>
      </div>
      <div className='flex flex-col items-center gap-[20px] lg:gap-[30px] w-[100%] mb-[20px] lg:mb-[30px] text-[#1a1a1a] text-[12px] sm:text-[14px] lg:text-[16px]'>
        <hr className='w-[90%] lg:w-[80%] border-none rounded-[10px] h-[2px] lg:h-[3px] bg-[#c7c7c7]'/>
        <p className="text-center">Copyright ©2025 | All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
