import React from 'react'

const ContactSection = () => {
  return (
    <section className='w-full flex flex-col min-h-screen bg-[url("/Contact-Section.svg")] bg-cover bg-center relative border-2 border-red-500'>
      <div className='flex flex-wrap flex-col justify-between md:flex-row md:mt-[2.6rem] m-auto md:mx-0 text-center md:text-start border-2 border-amber-400'>
        <div className='flex items-start mb-[1rem] lg:px-6 md:mb-0 border-2 border-blue-500'>
          <img src="/Logo.svg" alt="Logo" className='w-[40px] h-auto' />
          <label htmlFor="#" className='ml-[0px] md:ml-[1.8rem] text-[1rem] uppercase font-bold md:mr-[3.75rem]'>join the community</label>
        </div>
        <div className='md:w-[684px] md:h-[462px] border-amber-500 border-2'>
          <h1 className='text-[1.7rem] md:text-[4.8rem] uppercase font-extrabold leading-[90%] md:leading-[80%] tracking-[-1px] md:tracking-[-4px] px-3'>Explore the world with style and connectivity and discover the future today</h1>
        </div>
       </div>
       <div>
        
       </div>
    </section>
  )
}

export default ContactSection