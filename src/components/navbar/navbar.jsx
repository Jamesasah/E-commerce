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

  const handleMenuClick = (menuType) => {
    setMenu(menuType);
    setIsMobileMenuOpen(false);
  };

  const handleLoginClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative flex justify-between items-center p-4 shadow-[0_1px_3px_-2px_black] font-poppins bg-white">
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
          className="md:hidden flex flex-col justify-center items-center w-6 h-6 z-50"
        >
          <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleMobileMenu}></div>
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-[#171717]">Menu</h2>
            <button 
              onClick={toggleMobileMenu}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 p-6">
            <Link to="/login" onClick={handleLoginClick} className="block mb-6">
              <button className="w-full border border-[#7a7a7a] px-4 py-3 rounded-[75px] outline-none text-[#515151] text-[16px] font-medium bg-white cursor-pointer hover:bg-gray-50 transition-colors">
                Login
              </button>
            </Link>
            
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  onClick={() => handleMenuClick("shop")} 
                  className={`flex items-center py-3 px-4 rounded-lg transition-colors ${menu === 'shop' ? 'bg-[#ff4141] text-white' : 'text-[#626262] hover:bg-gray-100'}`}
                >
                  <span className="text-[18px] font-medium">Shop</span>
                  {menu === 'shop' && <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>}
                </Link>
              </li>
              <li>
                <Link 
                  to="/mens" 
                  onClick={() => handleMenuClick("mens")} 
                  className={`flex items-center py-3 px-4 rounded-lg transition-colors ${menu === 'mens' ? 'bg-[#ff4141] text-white' : 'text-[#626262] hover:bg-gray-100'}`}
                >
                  <span className="text-[18px] font-medium">Men</span>
                  {menu === 'mens' && <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>}
                </Link>
              </li>
              <li>
                <Link 
                  to="/womens" 
                  onClick={() => handleMenuClick("womens")} 
                  className={`flex items-center py-3 px-4 rounded-lg transition-colors ${menu === 'womens' ? 'bg-[#ff4141] text-white' : 'text-[#626262] hover:bg-gray-100'}`}
                >
                  <span className="text-[18px] font-medium">Women</span>
                  {menu === 'womens' && <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>}
                </Link>
              </li>
              <li>
                <Link 
                  to="/kids" 
                  onClick={() => handleMenuClick("kids")} 
                  className={`flex items-center py-3 px-4 rounded-lg transition-colors ${menu === 'kids' ? 'bg-[#ff4141] text-white' : 'text-[#626262] hover:bg-gray-100'}`}
                >
                  <span className="text-[18px] font-medium">Kids</span>
                  {menu === 'kids' && <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>}
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200">
            <div className="text-center text-sm text-gray-500">
              © 2025 SHOPPER
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
