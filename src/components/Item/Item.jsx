import React from 'react'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='w-full hover:scale-[1.05] transition-[0.6s] flex flex-col items-center lg:items-start'>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} alt="" className='w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] object-contain' />
      </Link>
      <p className='mt-[6px] mb-0 text-[10px] sm:text-[12px] text-center lg:text-left'>{props.name}</p>
      <div className='flex gap-3 sm:gap-5'>
        <div className='text-[#374151] text-[12px] sm:text-[14px] font-semibold'>
          ${props.new_price}
        </div>
        <div className='text-[#8c8c8c] text-[12px] sm:text-[14px] font-medium line-through'>
          ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
