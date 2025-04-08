import React from 'react'

const LinkForm = () => {
  return (
    <div className='w-[338px] h-[330px] text-[14px] mt-[4rem] md:mt-0 mx-2 my-2 font-bold uppercase mb-[100px] md:mb-0'>
        <div className='flex flex-col flex-wrap justify-around gap-[20px]'>
            <h1>social links</h1>
            <ul className='flex flex-col justify-around gap-[30px]'>
                <li className='py-[12px]'><a href="#">
                  Instagram
                <span className="block w-full h-[2px] bg-white mt-1"></span>
                </a></li>
                <li className='py-[12px]'><a href="#">
                  Twitter
                <span className="block w-full h-[2px] bg-white mt-1"></span>
                </a></li>
                <li className='py-[12px]'><a href="#">
                  Email
                <span className="block w-full h-[2px] bg-white mt-1"></span>
                </a></li>
                <li className='py-[12px]'><a href="#">
                  Medium
                <span className="block w-full h-[2px] bg-white mt-1"></span>
                </a></li>
            </ul>
        </div>
    </div>
  )
}

export default LinkForm