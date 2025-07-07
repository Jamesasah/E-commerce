import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex w-[80%] h-[40vh] flex-col items-center justify-center m-auto px-[140px] mb-[150px] gap-[30px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]'>
      <h1 className='text-[#454545] text-[50px] font-medium'> Get Exclusive Offers On Your Email</h1>
      <p className='text-[#454545] text-[18px]'>Subscribe to our newsletter and stay updated</p>
      <div className='flex items-center justify-between bg-white w-[680px] h-[60px] rounded-[80px] border border-[#e3e3e3]'>
        <input className='w-[500px] ml-[30px] border-none outline-none text-[#616161] font-poppins text-[16px]' type="email" placeholder='Your Email Id' />
        <button className='w-[210px] h-[60px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
