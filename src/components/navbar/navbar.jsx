import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../context/ShopContent'

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {getTotalCartItem} = useContext(ShopContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 shadow-[0_1px_3px_-2px_black] font-poppins bg-white">
      {/* Logo and Brand */}
      <div className="flex items-center gap-2 md:gap-10">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-8 h-8 md:w-auto md:h-auto" />
        </Link>
        <p className="text-[20px] md:text-[38px] font-semibold text-[#171717] font-poppins">SHOPPER</p>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center list-none gap-[50px] text-[#626262] text-[20px] font-medium cursor-pointer font-poppins">
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

      {/* Right side - Login and Cart */}
      <div className="flex items-center gap-4 md:gap-[45px] font-poppins">
        <Link to="/login" className="hidden sm:block">
          <button className="border border-[#7a7a7a] px-2 rounded-[75px] w-[120px] md:w-[157px] h-[45px] md:h-[58px] outline-none text-[#515151] text-[16px] md:text-[20px] font-medium bg-white cursor-pointer active:bg-[#f3f3f3]">
            Login
          </button>
        </Link>
        <Link to="/cart" className="relative">
          <img src={cart_icon} alt="Cart" className="w-6 h-6 md:w-auto md:h-auto" />
          <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-[18px] h-[18px] md:w-[22px] md:h-[22px] rounded-[11px] bg-[#ff4141] text-white flex items-center justify-center text-[12px] md:text-[14px]">
            {getTotalCartItem()}
          </div>
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-6 h-6"
        >
          <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 md:hidden">
          <div className="flex flex-col p-4">
            <Link to="/login" className="mb-4">
              <button className="w-full border border-[#7a7a7a] px-2 rounded-[75px] h-[45px] outline-none text-[#515151] text-[16px] font-medium bg-white cursor-pointer active:bg-[#f3f3f3]">
                Login
              </button>
            </Link>
            <ul className="flex flex-col gap-4 text-[#626262] text-[18px] font-medium cursor-pointer font-poppins">
              <li
                onClick={() => {
                  setMenu("shop");
                  setIsMobileMenuOpen(false);
                }}
                className="flex flex-col items-center py-2"
              >
                <Link to="/">Shop</Link>
                {menu==='shop' && <hr className="border-none w-[80%] h-[3px] bg-[#ff4141] rounded-[10px] mt-2" />}
              </li>
              <li
                onClick={() => {
                  setMenu("mens");
                  setIsMobileMenuOpen(false);
                }}
                className="flex flex-col items-center py-2"
              >
                <Link to="/mens">Men</Link>
                {menu==='mens' && <hr className="border-none w-[80%] h-[3px] bg-[#ff4141] rounded-[10px] mt-2" />}
              </li>
              <li
                onClick={() => {
                  setMenu("womens");
                  setIsMobileMenuOpen(false);
                }}
                className="flex flex-col items-center py-2"
              >
                <Link to="/womens">Women</Link>
                {menu==='womens' && <hr className="border-none w-[80%] h-[3px] bg-[#ff4141] rounded-[10px] mt-2" />}
              </li>
              <li
                onClick={() => {
                  setMenu("kids");
                  setIsMobileMenuOpen(false);
                }}
                className="flex flex-col items-center py-2"
              >
                <Link to="/kids">Kids</Link>
                {menu==='kids' && <hr className="border-none w-[80%] h-[3px] bg-[#ff4141] rounded-[10px] mt-2" />}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
