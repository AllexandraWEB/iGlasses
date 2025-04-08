import React from "react";
import Form from "./Form";
import LinkForm from "./LinkForm";

const ContactSection = () => {
  return (
    <section className='w-full flex flex-col min-h-screen bg-[url("/Contact-Section.svg")] bg-cover bg-center relative'>
      <div className="flex flex-wrap flex-col justify-between md:flex-row md:mt-[2.6rem] m-auto md:mx-0 text-center md:text-start">
        <div className="flex items-start mb-[1rem] m-auto md:m-0 lg:px-6 md:mb-0 py-6 md:py-2">
          <img src="/Logo.svg" alt="Logo" className="w-[40px] h-auto" />
          <label
            htmlFor="#"
            className="ml-[0px] md:ml-[1.8rem] text-[1rem] uppercase font-bold md:mr-[3.75rem]">
            join the community
          </label>
        </div>

        <div className="md:w-[684px] md:h-[462px] py-5 md:py-2 mt-[90px] md:mt-0">
          <h1 className="text-[1.7rem] md:text-[4.8rem] uppercase font-extrabold leading-[90%] md:leading-[80%] tracking-[-1px] md:tracking-[-4px] px-3">
            Explore the world with style and connectivity and discover the
            future today
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap flex-col md:flex-row md:w-[75%] justify-between m-auto md:ml-[9rem] px-2">
       <Form />
       <LinkForm />
      </div>
    </section>
  );
};

export default ContactSection;

// bg-white/10 backdrop-blur-md border-white/30 shadow-lg rounded-[4px] border-2
