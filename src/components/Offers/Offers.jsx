import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='w-[85%] h-[60vh] px-[140px] flex m-auto mb-[150px]' style={{ background: 'linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)' }}>
      <div className='flex flex-1 flex-col justify-center'>
        <h1 className='text-[#171717] text-[60px] font-medium'>Exclusive</h1>
        <h1 className='text-[#171717] text-[60px] font-medium'>Offers for you</h1>
         <p className='text-[#171717] text-[18px] font-medium'>ONLY ON BEST SELLERS PRODUCT</p>
         <button className='w-[200px] h-[60px] rounded-[35px] bg-[#ff4141] border-none text-white text-[18px] font-medium mt-[30px] cursor-pointer'>Check Now</button>
      </div>
      <div className='flex-1 flex items-center justify-end pt-[50px]'>
        <img src={exclusive_image} alt="" className='w-[400px] h-[400px] object-contain' />
      </div>
    </div>
  )
}

export default Offers
