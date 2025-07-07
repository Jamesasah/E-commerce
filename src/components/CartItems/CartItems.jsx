import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContent'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);

  return (
    <div className='my-[50px] lg:my-[100px] mx-4 lg:mx-[170px]'>
        <div className="hidden lg:grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-[20px] px-0 text-[#454545] text-[18px] font-semibold">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-[3px] bg-[#e2e2e2] border-[0]'/>
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id} className='grid grid-cols-1 lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-4 lg:gap-[75px] py-[20px] px-0 text-[#454545] text-[14px] lg:text-[15px] font-medium border-b border-gray-200 lg:border-none'>
                <div className="flex items-center gap-4 lg:block">
                  <img src={e.image} alt="" className='h-[50px] lg:h-[62px] w-[50px] lg:w-auto object-cover' />
                  <div className="flex-1 lg:hidden">
                    <p className="font-semibold">{e.name}</p>
                    <p className="text-sm">${e.new_price}</p>
                  </div>
                </div>
                <p className="hidden lg:block">{e.name}</p>
                <p className="hidden lg:block">${e.new_price}</p>
                <div className="flex items-center gap-4 lg:block">
                  <span className="lg:hidden text-sm">Qty:</span>
                  <button className='w-[40px] lg:w-[55px] h-[40px] lg:h-[50px] border-[2px] border-[#e2e2e2] bg-[#fff] text-sm lg:text-base'>{cartItems[e.id]}</button>
                </div>
                <div className="flex items-center gap-4 lg:block">
                  <span className="lg:hidden text-sm">Total:</span>
                  <p>${e.new_price * cartItems[e.id]}</p>
                </div>
                <div className="flex items-center gap-4 lg:block">
                  <span className="lg:hidden text-sm">Remove:</span>
                  <img className='w-[15px] my-0 mx-auto lg:mx-[40px] cursor-pointer' src={remove_icon} onClick={() => removeFromCart(e.id)} alt=""/>
                </div>
              </div> 
            )
          }
          return null;
        })}
        <div className="flex flex-col lg:flex-row my-[50px] lg:my-[100px] mx-0 gap-8 lg:gap-0">
            <div className="flex-1 flex flex-col lg:mr-[200px] gap-[30px] lg:gap-[40px]">
                <h1 className="text-xl lg:text-2xl font-bold">Cart Total</h1>
                <div>
                    <div className="flex justify-between py-[15px] px-0 ">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className='flex justify-between py-[15px] px-0 '>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className='flex justify-between py-[15px] px-0 '>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button className='w-full lg:w-[250px] h-[50px] bg-[#ff4141] text-white text-[16px] font-semibold cursor-pointer'>PROCEED TO CHECKOUT</button>
            </div>
            <div className='flex-1 text-[14px] lg:text-[16px] font-medium'>
                <p className='text-[#555] '>If you have a promo code, please enter it here</p>
                <div className='w-full lg:w-[507px] mt-[15px] pl-[20px] h-[51px] bg-[#eaeaea] flex'>
                  <input type="text" placeholder='promo code' className='bg-transparent text-[14px] lg:text-[16px] flex-1 lg:w-[303px] h-[30px] outline-none'/>
                  <button className='w-[100px] lg:w-[183px] h-[51px] text-[14px] lg:text-[16px] bg-black text-white cursor-pointer'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems
