import React, { useContext } from 'react'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContent'

const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext);
  return (
    <div className="flex flex-col lg:flex-row my-0 mx-4 lg:mx-[170px] gap-8 lg:gap-0">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-[17px]">
        <div className="flex flex-row lg:flex-col gap-2 lg:gap-[16px] order-2 lg:order-1">
          <img className='h-[80px] w-[120px] lg:h-[125px] lg:w-[180px] object-cover' src={product.image} alt="" />
          <img className='h-[80px] w-[120px] lg:h-[125px] lg:w-[180px] object-cover' src={product.image} alt="" />
          <img className='h-[80px] w-[120px] lg:h-[125px] lg:w-[180px] object-cover' src={product.image} alt="" />
          <img className='h-[80px] w-[120px] lg:h-[125px] lg:w-[180px] object-cover' src={product.image} alt="" />
        </div>
        <div className="product-display-images order-1 lg:order-2">
          <img
            className="w-full lg:w-[800px] h-[300px] lg:h-[548px] object-cover"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="flex my-0 mx-0 lg:mx-[70px] flex-col">
        <h1 className='text-[#3d3d3d] text-[20px] lg:text-[27px] font-bold'>{product.name}</h1>
        <div className="flex gap-[5px] items-center mt-[13px] text-[#1c1c1c] text-[14px] lg:text-[16px] ">
          <img src={star_icon} alt="" className='w-[12px] lg:w-[15px]' />
          <img src={star_icon} alt="" className='w-[12px] lg:w-[15px]' />
          <img src={star_icon} alt="" className='w-[12px] lg:w-[15px]' />
          <img src={star_icon} alt="" className='w-[12px] lg:w-[15px]' />
          <img src={star_dull_icon} alt="" className='w-[12px] lg:w-[15px]' />
          <p>(122)</p>
        </div>
        <div className="flex my-[20px] mx-0 gap-[20px] lg:gap-[30px] text-[16px] lg:text-[20px] font-bold">
          <div className="text-[#818181] line-through">
            ${product.old_price}
          </div>
          <div className="text-[#ff4141]"> 
            ${product.new_price}
          </div>
          </div>
          <div className="text-[12px] lg:text-[13px] font-medium">
            A lightweight, usually Knitted, pullover shirt, close-fitting and
            with a round neckline and short sleeves, worn as an undershirt or an
            outer garment.
          </div>
          <div className="product-display-right-size">
            <h1 className='mt-[30px] lg:mt-[55px] text-[#656565] text-[16px] lg:text-[18px] font-semibold'>Select Size</h1>
            <div className='flex my-[15px] lg:my-[25px] mx-0 gap-3 lg:gap-5 text-[11px] lg:text-[12px] flex-wrap'>
                <div className='py-[10px] lg:py-[14px] px-[12px] lg:px-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>S</div>
                <div className='py-[10px] lg:py-[14px] px-[12px] lg:px-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>M</div>
                <div className='py-[10px] lg:py-[14px] px-[12px] lg:px-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>L</div>
                <div className='py-[10px] lg:py-[14px] px-[12px] lg:px-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>XL</div>
                <div className='py-[10px] lg:py-[14px] px-[12px] lg:px-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>XXI</div>
            </div>
          </div>
            <button className='py-[10px] lg:py-[13px] px-[15px] lg:px-[20px] w-[140px] lg:w-[160px] text-[12px] lg:text-[14px] font-semibold text-white bg-[#ff4141] mb-[30px] lg:mb-[40px] border-none outline-none cursor-pointer' onClick={() => addToCart(product.id)}>ADD TO CART</button>
            <p className='mt-[10px] text-[12px] lg:text-[14px]'><span className='font-semibold'>Category:</span> Women, T-shirt, Crop Top</p>
            <p className='mt-[10px] text-[12px] lg:text-[14px]'><span className='font-semibold'>Tags:</span> Modern, Latest</p>
      </div>
    </div>
  );
}

export default ProductDisplay
