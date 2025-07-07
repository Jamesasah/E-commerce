import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrumb = (props) => {
    const {product} = props
  return (
    <div className='flex items-center gap-1 lg:gap-2 text-[#5e5e5e] text-[12px] lg:text-[14px] font-semibold my-[30px] lg:my-[60px] mx-4 lg:mx-[170px] capitalize flex-wrap'>
      HOME <img src={arrow_icon} alt="" className="w-3 h-3 lg:w-auto lg:h-auto" /> SHOP <img src={arrow_icon} alt="" className="w-3 h-3 lg:w-auto lg:h-auto" /> {product.category} <img src={arrow_icon} alt="" className="w-3 h-3 lg:w-auto lg:h-auto" /> <span className="truncate">{product.name}</span>
    </div>
  )
}

export default Breadcrumb
