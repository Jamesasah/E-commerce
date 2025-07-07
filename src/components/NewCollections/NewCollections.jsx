import React from 'react'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] mb-[100px] px-4'>
      <h1 className='text-[#171717] text-[24px] sm:text-[32px] lg:text-[40px] font-medium text-center'>NEW COLLECTIONS</h1>
      <hr className='w-[100px] sm:w-[150px] h-[4px] sm:h-[6px] rounded-[10px] bg-[#252525]'/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-[30px] sm:mt-[50px] gap-4 sm:gap-[30px] w-full max-w-6xl">
        {new_collections.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
