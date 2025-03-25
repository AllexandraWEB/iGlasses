import React from 'react'

const Nav = () => {
  return (
    <ul className='flex flex-col justify-start items-start px-[50px] gap-2 max-lg:hidden cursor-pointer text-[14px] uppercase'>
       <li className="font-bold hover:underline hover:underline-offset-8"><a href="/">Products</a></li>
       <li className="font-bold hover:underline hover:underline-offset-8"><a href="">About</a></li>
       <li className="font-bold hover:underline hover:underline-offset-8"><a href="">Events</a></li>
       <li className="font-bold hover:underline hover:underline-offset-8"><a href="">Press</a></li>
       <li className="font-bold hover:underline hover:underline-offset-8"><a href="">Contact</a></li>
    </ul>
    // Need to add the hamburger icon and phone functionality
  )
}

export default Nav