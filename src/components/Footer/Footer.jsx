import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[50px] '>
      <div className='flex items-center gap-[20px]'>
       <img src={footer_logo} alt="logo" />
       <p className='text-[#383838] text-[45px] font-bold'>SHOPPER</p>
      </div>
      <ul className='flex list-none gap-[50px] text-[#252525] text-[20px] cursor-pointer'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div class="flex gap-[20px]">
        <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]'>
            <img src={instagram_icon} alt="instagram" />
        </div>
        <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]'>
            <img src={pinterest_icon} alt="pinterest" />
        </div>
        <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]'>
            <img src={whatsapp_icon} alt="whatsapp" />
        </div>
      </div>
      <div className='flex flex-col items-center gap-[30px] w-[100%] mb-[30px] text-[#1a1a1a] text-[16px]'>
        <hr className='w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]'/>
        <p>Copyright ©2025 | All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
