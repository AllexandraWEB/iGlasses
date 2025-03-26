"use client";
import React, { useState } from 'react';
import CartButton from '../ui/CartButton';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

    return (
    <header className='relative padding-x py-8 z-10 w-full bg-light-gray'>
      <nav className='flex justify-between items-start regular-container'>
                  <div className="">
                   <img 
                   src='Logo.svg' 
                   alt='Logo' 
                   className="ml-[30px] md:ml-[28px]"/>
                  </div>
                  <div>
                  <img 
                  src="Logo-Decoration.svg" 
                  alt="Decoration Logo" 
                  className='hidden lg:block ml-[45px] md:ml-[77px] ld:ml-[77px] mr-[20px]'/>
                  </div>
            
              {showMenu && (
          <div className="md:hidden fixed top-0 left-0 w-full h-screen overscroll-none bg-white z-50 flex justify-center items-center">
            <ul className="p-4 flex flex-col items-center space-y-10 text-[16px] text-nav-color">
              <li>
                <button className="px-4 py-2" onClick={closeMenu}>
                {showMenu ? (
                              <img src="/close.svg" alt="Hamburger" width={25} height={25} className=''/>
                            ) : (
                              <img src="/hamburger.svg" alt="Hamburger" width={25} height={25} className=''/>
                            )}
                </button>
              </li>
              <li>
                <a href='/' onClick={toggleMenu}>Product</a>
              </li>
              <li className='mb-4 hover:underline-offset-8'>
                <a href='/pricing' onClick={toggleMenu}>Pricing</a>
              </li>
              <li className='mb-4 hover:underline-offset-8'>
                <a href='/company' onClick={toggleMenu}>Company</a>
              </li>
              <li className='mb-4 hover:underline-offset-8'>
                <a href='/blog' onClick={toggleMenu}>Blog</a>
              </li>
              <li className='mb-4 hover:underline-offset-8'>
                <a href='/contact' onClick={toggleMenu}>Contact</a>
              </li>
              <li className='mb-4 hover:underline-offset-8'>
                {/* <BlueButton /> */}
              </li>
              <li className=''>
                {/* <WhiteButton /> */}
              </li>
            </ul>
          </div>
        )}
         <ul className='flex-1 flex justify-start items-center px-9 gap-6 max-lg:hidden text-nav-color cursor-pointer text-[13px] uppercase font-bold'>
              <li className="px-5 ml-[180px] hover:underline hover:underline-offset-8"><a href="/">Product</a></li>
              <li className="px-5 hover:underline hover:underline-offset-8"><a href="/pricing">Pricing</a></li>
              <li className="px-5 hover:underline hover:underline-offset-8"><a href="/company"> Company</a></li>
              <li className="px-5 hover:underline hover:underline-offset-8"><a href="/blog">Blog</a></li>
              <li className="px-5 hover:underline hover:underline-offset-8"><a href="/contact">Contact</a></li>
          </ul>
  
          <ul className='flex justify-end items-center gap-5 max-lg:hidden text-nav-color text-[16px] mr-0 md:mr-[90px]'> 
              <CartButton />
              <div className='w-[10px]'>
              {/* <BlueButton /> */}
              </div>
          </ul>
          <div className='hidden max-lg:block'> 
            <button onClick={toggleMenu}>
              <img src="/hamburger.svg" alt="Hamburger" width={25} height={25} className='mr-5'/>            
           </button>
          </div>
      </nav>
  </header>
    )
  }
  
  export default Nav