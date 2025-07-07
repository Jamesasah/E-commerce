import React from 'react'

const LoginSignup = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-[#fce2fc] pt-[100px]">
      <div className='w-[570px] h-[600px] bg-white m-auto py-[40px] px-[60px]'>
       <h1 className='my-[15px] mx-0 text-[30px] font-semibold'>Sign Up</h1>
       <div className='flex flex-col gap-[29px] mt-[30px] '>
        <input className='h-[60px] w-[100%] pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[15px]' type="text" placeholder='Your Name' />
        <input className='h-[60px] w-[100%] pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[15px]' type="email" placeholder='Email address' />
        <input className='h-[60px] w-[100%] pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[15px]' type="password" placeholder='Password' />
       </div>
       <button className='w-[430px] h-[55px] text-white bg-[#ff4141] mt-[30px] border-none text-[18px] font-medium cursor-pointer'>Continue</button>
       <p className='mt-[20px] text-[#5c5c5c] text-[15px] font-medium'>Already have an account? <span className='text-[#ff4141] font-medium'>Login here</span> </p>
       <div className='flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] text-[15px] font-medium'>
        <input type="checkbox" name="" id="" />
        <p>By continuing, I agree to the terms of use & privacy policy.</p>
       </div>
      </div>
    </div>
  )
}

export default LoginSignup 