import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContent'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);

  return (
    <div className='my-[100px] mx-[170px]'>
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-[20px] px-0 text-[#454545] text-[18px] font-semibold">
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
              <div key={e.id} className=' grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-[20px] px-0 text-[#454545] text-[15px] font-medium'>
                <img src={e.image} alt="" className='h-[62px]' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='w-[55px] h-[50px] border-[2px] border-[#e2e2e2] bg-[#fff]'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img className='w-[15px] my-0 mx-[40px] cursor-pointer' src={remove_icon} onClick={() => removeFromCart(e.id)} alt=""/>
              </div> 
            )
          }
          return null;
        })}
        <div class="flex my-[100px] mx-0">
            <div class="flex-1 flex flex-col mr-[200px] gap-[40px]">
                <h1>Cart Total</h1>
                <div>
                    <div class="flex justify-between py-[15px] px-0 ">
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
                <button className='w-[250px] h-[50px] bg-[#ff4141] text-white text-[16px] font-semibold cursor-pointer'>PROCEED TO CHECKOUT</button>
            </div>
            <div className='flex-1 text-[16] font-medium'>
                <p className='text-[#555] '>If you have a promo code, please enter it here</p>
                <div className='w-[507px] mt-[15px] pl-[20px] h-[51px] bg-[#eaeaea]'>
                  <input type="text" placeholder='promo code' className='bg-transparent text-[16px] w-[303px] h-[30px]'/>
                  <button className='w-[183px] h-[51px] text-[16px] bg-black text-white cursor-pointer'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems
