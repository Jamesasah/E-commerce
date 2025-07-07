import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row min-h-[100vh]' style={{ background: 'linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)' }}>
      <div className='flex flex-1 flex-col justify-center gap-3 lg:gap-5 px-4 lg:pl-[180px] leading-[1.1] text-center lg:text-left'>
        <h2 className='text-[#090909] text-[16px] lg:text-[22px] font-medium'>NEW ARRIVALS ONLY</h2>
        <div>
          <div className='flex items-center justify-center lg:justify-start gap-2 lg:gap-5'>
            <p className='text-[#171717] text-[40px] sm:text-[60px] lg:text-[90px] font-medium'>new</p>
            <img className='w-[50px] sm:w-[80px] lg:w-[105px]' src={hand_icon} alt="" />
          </div>
          <p className='text-[#171717] text-[40px] sm:text-[60px] lg:text-[90px] font-medium'>collections</p>
          <p className='text-[#171717] text-[40px] sm:text-[60px] lg:text-[90px] font-medium'>for everyone</p>
        </div>
        <div className="flex justify-center lg:justify-start items-center w-[200px] sm:w-[280px] h-[50px] sm:h-[60px] rounded-[75px] mt-[20px] lg:mt-[30px] bg-[#ff4141] text-white text-[16px] sm:text-[20px] font-normal mx-auto lg:mx-0 px-4">
          <span>Latest collection</span>
          <img src={arrow_icon} alt="" className="ml-2" />
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center p-4'>
        <img src={hero_image} alt="" className='w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] object-contain' />
      </div>
    </div>
  )
}

export default Hero
