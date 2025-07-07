import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] min-h-[90vh] py-8 px-4'>
      <h1 className='text-[#171717] text-[24px] sm:text-[32px] lg:text-[40px] font-medium text-center'>POPULAR IN WOMEN</h1>
      <hr className='w-[100px] sm:w-[150px] h-[4px] sm:h-[6px] rounded-[10px] bg-[#252525]'/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[20px] mt-[30px] sm:mt-[50px] w-full max-w-6xl">
      {data_product.map((item, i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
   })}
      </div>
    </div> 
  )
}

export default Popular
