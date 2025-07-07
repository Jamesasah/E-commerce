import React, { useContext } from 'react'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContent'

const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext);
  return (
    <div className="flex my-0 mx-[170px]">
      <div className="flex gap-[17px]">
        <div className="flex flex-col gap-[16px]">
          <img className='h-[125px] w-[180px]' src={product.image} alt="" />
          <img className='h-[125px] w-[180px]' src={product.image} alt="" />
          <img className='h-[125px] w-[180px]' src={product.image} alt="" />
          <img className='h-[125px] w-[180px]' src={product.image} alt="" />
        </div>
        <div className="product-display-images">
          <img
            className="w-[800px] h-[548px]"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="flex my-0 mx-[70px] flex-col">
        <h1 className='text-[#3d3d3d] text-[27px] font-bold'>{product.name}</h1>
        <div className="flex gap-[5px] items-center mt-[13px] text-[#1c1c1c] text-[16px] ">
          <img src={star_icon} alt="" className='w-[15px]' />
          <img src={star_icon} alt="" className='w-[15px]' />
          <img src={star_icon} alt="" className='w-[15px]' />
          <img src={star_icon} alt="" className='w-[15px]' />
          <img src={star_dull_icon} alt="" className='w-[15px]' />
          <p>(122)</p>
        </div>
        <div class="flex my-[20px] mx-0 gap-[30px] text-[20px] font-bold">
          <div className="text-[#818181] line-through">
            ${product.old_price}
          </div>
          <div className="text-[#ff4141]"> 
            ${product.new_price}
          </div>
          </div>
          <div className="text-[13px] font-medium">
            A lightweight, usually Knitted, pullover shirt, close-fitting and
            with a round neckline and short sleeves, worn as an undershirt or an
            outer garment.
          </div>
          <div class="product-display-right-size">
            <h1 className='mt-[55px] text-[#656565] text-[18px] font-semibold'>Select Size</h1>
            <div className='flex my-[25px] mx-0 gap-5 text-[12px]'>
                <div className='py-[14px] px-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>S</div>
                <div className='py-[14px] px-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>M</div>
                <div className='py-[14px] px-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>L</div>
                <div className='py-[14px] px-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>XL</div>
                <div className='py-[14px] px-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>XXI</div>
            </div>
          </div>
            <button className='py-[13px] px-[20px] w-[160px] text-[14px] font-semibold text-white bg-[#ff4141] mb-[40px] border-none outline-none cursor-pointer' onClick={() => addToCart(product.id)}>ADD TO CART</button>
            <p className='mt-[10px] text-[14px]'><span className='font-semibold'>Category:</span> Women, T-shirt, Crop Top</p>
            <p className='mt-[10px] text-[14px]'><span className='font-semibold'>Tags:</span> Modern, Latest</p>
      </div>
    </div>
  );
}

export default ProductDisplay
