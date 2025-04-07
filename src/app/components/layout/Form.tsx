import React from 'react'

const Form = () => {
  return (
    <div className="w-[22rem] h-[16.5rem] flex justify-center items-center p-2 bg-white/10 backdrop-blur-md border-white/30 shadow-lg rounded-[4px] border-2">
    <div className="flex flex-col text-start w-full px-6">
      <h1 className="uppercase text-[14px] font-bold">
        join the newsletter
      </h1>

      <p className="uppercase text-[14px] mt-4">name</p>
      <input
        type="text"
        id="name1"
        name="name"
        placeholder="Your Name"
        className="w-full h-[40px] mt-[10px] bg-white text-black pl-3 pr-3 py-5 rounded-[4px] text-[14px] font-bold tracking-[0.29px] uppercase"
      />

      <p className="uppercase text-[14px] mt-4">email</p>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email"
        className="w-full h-[40px] mt-[10px] bg-white text-black pl-3 pr-3 py-5 rounded-[4px] text-[14px] font-bold tracking-[0.29px] uppercase"
      />
    </div>
  </div>
  )
}

export default Form