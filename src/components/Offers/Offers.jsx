import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='w-[95%] lg:w-[85%] min-h-[60vh] px-4 lg:px-[140px] flex flex-col lg:flex-row m-auto mb-[100px] lg:mb-[150px] py-8 lg:py-0' style={{ background: 'linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)' }}>
      <div className='flex flex-1 flex-col justify-center text-center lg:text-left'>
        <h1 className='text-[#171717] text-[32px] sm:text-[48px] lg:text-[60px] font-medium'>Exclusive</h1>
        <h1 className='text-[#171717] text-[32px] sm:text-[48px] lg:text-[60px] font-medium'>Offers for you</h1>
         <p className='text-[#171717] text-[14px] sm:text-[16px] lg:text-[18px] font-medium'>ONLY ON BEST SELLERS PRODUCT</p>
         <button className='w-[180px] sm:w-[200px] h-[50px] sm:h-[60px] rounded-[35px] bg-[#ff4141] border-none text-white text-[16px] sm:text-[18px] font-medium mt-[20px] lg:mt-[30px] cursor-pointer mx-auto lg:mx-0'>Check Now</button>
      </div>
      <div className='flex-1 flex items-center justify-center lg:justify-end pt-[30px] lg:pt-[50px]'>
        <img src={exclusive_image} alt="" className='w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] object-contain' />
      </div>
    </div>
  )
}

export default Offers
