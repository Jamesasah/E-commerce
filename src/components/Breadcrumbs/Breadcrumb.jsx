import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrumb = (props) => {
    const {product} = props
  return (
    <div className='flex items-center gap-2 text-[#5e5e5e] text-[14px] font-semibold my-[60px] mx-[170px] capitalize'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrumb
