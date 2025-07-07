import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] h-[90vh]'>
      <h1 className='text-[#171717] text-[40px] font-medium'>POPULAR IN WOMEN</h1>
      <hr className='w-[150px] h-[6px] rounded-[10px] bg-[#252525]'/>
      <div className="flex mt-[50px] gap-[20px]">
      {data_product.map((item, i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
   })}
      </div>
    </div> 
  )
}

export default Popular
