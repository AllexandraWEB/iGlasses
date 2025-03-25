import React from 'react'
import Nav from './Nav'
import CartButton from '../ui/CartButton'

const Hero = () => {
  return (
    <section id='home' className='w-full flex flex-col md:flex-row xl:flex-row min-h-screen bg-[url("/Hero-Section.svg")] bg-cover bg-center relative border-2 border-red-500'>
      
        <div className='absolute w-full h-[231px] mt-[40px] flex flex-wrap flex-auto items-start border-2 border-blue-500'>

            <img src="Logo.svg" alt="iGlasses Logo" className='ml-[28px]'/>
            <img src="Logo-Decoration.svg" alt="Decoration Logo" className='hidden lg:block ml-[45px] md:ml-[77px] ld:ml-[77px] mr-[20px]'/>
            <h1 className='text-[50px] md:text-[92px] text-white tracking-[-4px] leading-[43px] md:leading-[78px] uppercase font-inter font-extrabold'>Creating the <br /> future of <br /> vision</h1>
            <Nav /> 
            <CartButton />

          </div>

    </section>
  )
}

export default Hero

// Need to fix the h1 (adding padding in the phone version, if needed to be centered)