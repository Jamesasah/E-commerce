import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='flex h-[100vh]' style={{ background: 'linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)' }}>
      <div className='flex-1 flex flex-col justify-center gap-5 pl-[180px] leading-[1.1]'>
        <h2 className='text-[#090909] text-[22px] font-medium'>NEW ARRIVALS ONLY</h2>
      <div>
        <div className='flex items-center gap-5'>
          <p className='text-[#171717] text-[90px] font-medium'>new</p>
          <img className='w-[105px]' src={hand_icon} alt="" />
        </div>
        <p className='text-[#171717] text-[90px] font-medium'>collections</p>
        <p className='text-[#171717] text-[90px] font-medium'>for everyone</p>
      </div>
      <div class="flex justify-center items-center gap-[15px] w-[280px] h-[60px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[20px] font-normal">
        <div>Latest collection</div>
        <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={hero_image} alt="" className='w-[700px] h-[700px] object-contain' />
      </div>
    </div>
  )
}

export default Hero
