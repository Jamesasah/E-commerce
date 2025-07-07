import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex w-[95%] lg:w-[80%] min-h-[40vh] flex-col items-center justify-center m-auto px-4 lg:px-[140px] mb-[100px] lg:mb-[150px] gap-[20px] lg:gap-[30px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] py-8 lg:py-0'>
      <h1 className='text-[#454545] text-[24px] sm:text-[36px] lg:text-[50px] font-medium text-center'> Get Exclusive Offers On Your Email</h1>
      <p className='text-[#454545] text-[14px] sm:text-[16px] lg:text-[18px] text-center'>Subscribe to our newsletter and stay updated</p>
      <div className='flex flex-col sm:flex-row items-center justify-between bg-white w-full max-w-[680px] h-auto sm:h-[60px] rounded-[80px] border border-[#e3e3e3] p-2 sm:p-0'>
        <input className='w-full sm:w-[500px] ml-0 sm:ml-[30px] border-none outline-none text-[#616161] font-poppins text-[14px] sm:text-[16px] px-4 sm:px-0 py-3 sm:py-0' type="email" placeholder='Your Email Id' />
        <button className='w-full sm:w-[210px] h-[50px] sm:h-[60px] rounded-[80px] bg-black text-white text-[14px] sm:text-[16px] cursor-pointer mt-2 sm:mt-0'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
