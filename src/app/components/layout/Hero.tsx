import React from 'react'

const Hero = () => {
  return (
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen'>
      <div className="bg-[url('/Hero-Section.svg')] bg-cover bg-center h-screen relative">
        {/* Logo Container */}
        <div className='absolute top-0 left-0 w-full h-[231px] mt-[40px] flex flex-wrap items-start border-2'>
          <img src="Logo.svg" alt="iGlasses Logo" className='ml-[28px]'/>
          <img src="Logo-Decoration.svg" alt="Decoration Logo" className='ml-[77px] mr-[20px]'/>
          <h1 className='text-[92px] text-primary-grey tracking-[-4px] leading-[78px] uppercase font-inter font-extrabold'>Creating the <br /> future of <br /> vision</h1>
        </div>
      </div>  
    </section>
  )
}

export default Hero