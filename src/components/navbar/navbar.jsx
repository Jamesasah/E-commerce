import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react'
import { ShopContext } from '../../context/ShopContent'

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const {getTotalCartItem} = useContext(ShopContext);
  return (
    <div className="flex space justify-around p-4 shadow-[0_1px_3px_-2px_black] font-poppins">
      <div className="flex items-center gap-10">
        <Link to="/"><img src={logo} alt="" /></Link>
        <p className="text-[38px] font-semibold text-[#171717] font-poppins">SHOPPER</p>
      </div>
      <ul className="flex items-center list-none gap-[50px] text-[#626262] text-[20px] font-medium cursor-pointer font-poppins">
        <li
          onClick={() => {
            setMenu("shop");
          }}
          className="flex flex-col items-center"
        >
          <Link to="/">Shop</Link>
          {menu==='shop' && <hr className="border-none w-[80%] h-[3px] bg-[#ff4141] rounded-[10px] mt-2" />}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
          className="flex flex-col items-center"
        >
          <Link to="/mens">Men</Link>
          {menu==='mens' && <hr className="border-none w-[80%] h-[3px] bg-[#ff4141] rounded-[10px] mt-2" />}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
          className="flex flex-col items-center"
        >
          <Link to="/womens">Women</Link>
          {menu==='womens' && <hr className="border-none w-[80%] h-[3px] bg-[#ff4141] rounded-[10px] mt-2" />}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
          className="flex flex-col items-center"
        >
          <Link to="/kids">Kids</Link>
          {menu==='kids' && <hr className="border-none w-[80%] h-[3px] bg-[#ff4141] rounded-[10px] mt-2" />}
        </li>
      </ul>
      <div className="flex items-center gap-[45px] font-poppins">
        <Link to="/login">
          <button className="border border-[#7a7a7a] px-2 rounded-[75px] w-[157px] h-[58px] outline-none text-[#515151] text-[20px] font-medium bg-white cursor-pointer active:bg-[#f3f3f3]">
            Login
          </button>
        </Link>
        <Link to="/cart" className="relative">
          <img src={cart_icon} alt="" />
          <div className="absolute -top-3 -right-3 w-[22px] h-[22px] rounded-[11px] bg-[#ff4141] text-white flex items-center justify-center text-[14px]">
            {getTotalCartItem()}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
