import React from 'react'

const AboutCard = () => {
  return (
  <div className='flex flex-col flex-wrap md:flex-row justify-between md:gap-[55px] m-auto'>
    <div className='w-[340px] h-[440px] md:w-[407px] md:h-[493px] truncate mx-auto my:0.5 md:my-3 mt-[5rem] md:mt-[10rem] bg-white text-black'>
        <div className='w-[407px] h-[378px]'>
            <img src="/Glasses-1.svg" alt="Glasses-1" className='w-[340px] md:w-[440px]' />
        </div>
        <div className='flex place-content-between uppercase font-bold leading-[110%] px-[0.7rem] md:mt-[3.3rem]'>
            <div className='flex flex-col'>
                <div><p className='text-[0.8rem] opacity-[50%]'>Intelligent glasses</p></div>
                <div><h1 className='text-[1.1rem] text-start'>Sync2 x-m</h1></div>
            </div>
            <div className='md:mt-[0.4rem]'><p>$<label htmlFor="price" className='text-[3rem] font-bold text-[#DD954B]'>324</label>USD</p></div>
        </div>
    </div>
    <div className='w-[340px] h-[440px] md:w-[407px] md:h-[493px] truncate mx-auto my:0.5 md:my-3 mt-[5rem] md:mt-[10rem] bg-white text-black'>
        <div className='w-[407px] h-[378px]'>
            <img src="/Glasses-1.svg" alt="Glasses-1" className='w-[340px] md:w-[440px]' />
        </div>
        <div className='flex place-content-between uppercase font-bold leading-[110%] px-[0.7rem] md:mt-[3.3rem]'>
            <div className='flex flex-col'>
                <div><p className='text-[0.8rem] opacity-[50%]'>Intelligent glasses</p></div>
                <div><h1 className='text-[1.1rem] text-start'>Sync2 x-m</h1></div>
            </div>
            <div className='md:mt-[0.4rem]'><p>$<label htmlFor="price" className='text-[3rem] font-bold text-[#DD954B]'>324</label>USD</p></div>
        </div>
    </div>
    <div className='w-[340px] h-[440px] md:w-[407px] md:h-[493px] truncate mx-auto my:0.5 md:my-3 mt-[5rem] md:mt-[10rem] bg-white text-black'>
        <div className='w-[407px] h-[378px]'>
            <img src="/Glasses-1.svg" alt="Glasses-1" className='w-[340px] md:w-[440px]' />
        </div>
        <div className='flex place-content-between uppercase font-bold leading-[110%] px-[0.7rem] md:mt-[3.3rem]'>
            <div className='flex flex-col'>
                <div><p className='text-[0.8rem] opacity-[50%]'>Intelligent glasses</p></div>
                <div><h1 className='text-[1.1rem] text-start'>Sync2 x-m</h1></div>
            </div>
            <div className='md:mt-[0.4rem]'><p>$<label htmlFor="price" className='text-[3rem] font-bold text-[#DD954B]'>324</label>USD</p></div>
        </div>
    </div>
  </div>
  )
}

export default AboutCard