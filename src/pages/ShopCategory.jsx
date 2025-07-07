import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContent'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className="shop-category">
      <img className='block my-[20px] lg:my-[30px] mx-auto w-[95%] lg:w-[84%]' src={props.banner} alt="" />
      <div className='flex flex-col sm:flex-row my-0 mx-4 lg:mx-[115px] justify-between items-center gap-4 sm:gap-0'>
        <p className='text-[12px] sm:text-[13px] text-center sm:text-left'>
          <span className='font-semibold'>Showing 1-12</span> Out of 36 products
        </p>
        <div className='py-[6px] sm:py-[8px] px-[8px] sm:px-[10px] rounded-[40px] border border-[#888] flex items-center gap-1'>
          <span className='text-[12px] sm:text-[13px]'>Sort by</span> <img src={dropdown_icon} alt="" className="w-4 h-4" />
        </div>
      </div>
      <div className='my-[20px] mx-4 lg:mx-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-[40px] lg:gap-y-[80px] justify-items-center'>
        {all_product.map((item, i) => {
          if(props.category === item.category){
            return  <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}
            />
          }
          else{
            return null;
          }
        })}
      </div>
      <div className='flex justify-center items-center my-[60px] lg:my-[100px] mx-auto w-[180px] sm:w-[200px] h-[50px] sm:h-[60px] rounded-[75px] bg-[#ededed] text-[#787878] text-[14px] sm:text-[15px] font-medium'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory 