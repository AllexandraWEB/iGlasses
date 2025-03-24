import React from 'react'

const Hero = () => {
  return (
    <section id='home' className='w-full flex flex-col md:flex-row xl:flex-row justify-center min-h-screen bg-[url("/Hero-Section.svg")] bg-cover bg-center relative border-2 border-red-500'>
      
        <div className='w-full h-[231px] mt-5 flex flex-wrap items-start border-2 border-blue-500'>

          <img src="Logo.svg" alt="iGlasses Logo" className='ml-[20px] mr-4'/>
          <img src="Logo-Decoration.svg" alt="Decoration Logo" className='ml-[77px] mr-[20px]'/>
          <h1 className='text-[42px] md:text-[92px] text-white tracking-[-4px] leading-[78px] uppercase font-inter font-extrabold'>Creating the <br /> future of <br /> vision</h1>

        </div>

    </section>
  )
}

export default Hero