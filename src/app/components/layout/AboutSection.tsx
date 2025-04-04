import React from 'react'
import AboutCard from '../ui/AboutCard'

const AboutSection = () => {
  return (
    <section id='about' className='w-full flex flex-col md:flex-row min-h-screen text-black bg-[#E9E9E9] relative' >
      <div className='flex flex-wrap flex-col md:flex-row mt-[10rem] m-auto md:mx-0 text-center md:text-start'>
        <div className='mb-[1rem] md:mb-0'>
          <label htmlFor="#" className='ml-[0px] md:ml-[1.8rem] text-[1rem] uppercase font-bold md:mr-[3.75rem]'>about</label>
        </div>
        <div>
          <h1 className='text-[1.7rem] md:text-[4.8rem] uppercase font-extrabold leading-[90%] md:leading-[80%] tracking-[-1px] md:tracking-[-4px] px-3'>Personalize your <br /> smart glasses for a <br /> unique experience.</h1>
        </div>
        <div className='md:w-[150px] md:h-[126px] uppercase md:font-bold text-[0.75rem] md:ml-[5.75rem] mt-[3rem] leading-[110%] px-3 text-center md:text-start m-auto'>
          <p>Make your smart glasses an extension of your personal style. Choose from a range of elegant lenses and frames.</p>
          <br />
          <p>Customize features to suit your preferences.</p>
        </div>
        <div className='m-auto pb-[4rem]'>
          <AboutCard />
        </div>
      </div>
    </section>
  )
}

export default AboutSection