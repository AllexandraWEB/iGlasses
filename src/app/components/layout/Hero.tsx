import React from 'react'
import Nav from './Nav'

const Hero = () => {
  return (
    <section id='home' className='w-full flex flex-col min-h-screen bg-[url("/Hero-Section.svg")] bg-cover bg-center relative'>
          <div className='w-full h-[100px] md:h-[250px]'>
             <Nav /> 
          </div>
          <div className='flex justify-between flex-wrap w-full md:mt-[40vh]'> 
             <h1 className='text-[50px] md:text-[92px] py-5 pl-0 md:pl-[28px] text-center m-auto md:text-start md:m-0 text-white tracking-[-4px] leading-[43px] md:leading-[78px] uppercase font-inter font-extrabold'>Creating <br /> the future <br /> of vision</h1>
             <p className='w-[336px] h-[126px] md:mr-[28px] text-[12px] md:text-[16px] py-5 mt-[58vh] md:mt-0 mx-auto text-center md:text-start font-bold uppercase'>Make your smart glasses an extension of your personal style. Choose from a range of elegant lenses and frames. <br /> <br /> Customize features to suit your preferences.</p>
          </div>
    </section>
  )
}

export default Hero

// Need to add padding px to the title and parahraph