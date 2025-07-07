import React from 'react'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] mb-[100px]'>
      <h1 className='text-[#171717] text-[40px] font-medium'>NEW COLLECTIONS</h1>
      <hr className='w-[150px] h-[6px] rounded-[10px] bg-[#252525]'/>
      <div className="grid grid-cols-4 mt-[50px] gap-[30px]">
        {new_collections.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
