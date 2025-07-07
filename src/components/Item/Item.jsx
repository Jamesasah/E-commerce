import React from 'react'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='w-[280px] hover:scale-[1.05] transition-[0.6s]'>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} alt="" className='w-[350px] h-[350px] object-contain' />
      </Link>
      <p className='mt-[6px] mb-0 text-[12px]'>{props.name}</p>
      <div className='flex gap-5'>
        <div className='text-[#374151] text-[14px] font-semibold'>
          ${props.new_price}
        </div>
        <div className='text-[#8c8c8c] text-[14px] font-medium line-through'>
          ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
