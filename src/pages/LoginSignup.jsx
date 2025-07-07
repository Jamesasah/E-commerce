import React from 'react'

const LoginSignup = () => {
  return (
    <div className="w-[100%] min-h-[100vh] bg-[#fce2fc] pt-[50px] lg:pt-[100px] px-4">
      <div className='w-full max-w-[570px] min-h-[600px] bg-white m-auto py-[30px] lg:py-[40px] px-[30px] lg:px-[60px]'>
       <h1 className='my-[15px] mx-0 text-[24px] lg:text-[30px] font-semibold text-center lg:text-left'>Sign Up</h1>
       <div className='flex flex-col gap-[20px] lg:gap-[29px] mt-[20px] lg:mt-[30px] '>
        <input className='h-[50px] lg:h-[60px] w-[100%] pl-[15px] lg:pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[14px] lg:text-[15px] rounded' type="text" placeholder='Your Name' />
        <input className='h-[50px] lg:h-[60px] w-[100%] pl-[15px] lg:pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[14px] lg:text-[15px] rounded' type="email" placeholder='Email address' />
        <input className='h-[50px] lg:h-[60px] w-[100%] pl-[15px] lg:pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[14px] lg:text-[15px] rounded' type="password" placeholder='Password' />
       </div>
       <button className='w-full lg:w-[430px] h-[50px] lg:h-[55px] text-white bg-[#ff4141] mt-[25px] lg:mt-[30px] border-none text-[16px] lg:text-[18px] font-medium cursor-pointer rounded'>Continue</button>
       <p className='mt-[15px] lg:mt-[20px] text-[#5c5c5c] text-[14px] lg:text-[15px] font-medium text-center lg:text-left'>Already have an account? <span className='text-[#ff4141] font-medium'>Login here</span> </p>
       <div className='flex items-start lg:items-center mt-[20px] lg:mt-[25px] gap-[15px] lg:gap-[20px] text-[#5c5c5c] text-[13px] lg:text-[15px] font-medium'>
        <input type="checkbox" name="" id="" className="mt-1 lg:mt-0" />
        <p>By continuing, I agree to the terms of use & privacy policy.</p>
       </div>
      </div>
    </div>
  )
}

export default LoginSignup 