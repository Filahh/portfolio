'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "118281df-d79e-43cd-9f0f-a06e0098fa19");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 mt-32 bg-[url("/footer-bg-color.png")] bg-cover bg-no-repeat bg-center'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Connect With Me</h4>
        <h2 className='text-center text-5xl font-Ovo'>Get In Touch</h2>

        <p className="text-center max-2xl mx-auto mt-5 mb-12 font-Ovo">
            I would love to hear from you! Whether you have a question, a project in mind, or just want to say hello, feel free to reach out. You can contact me through the form below or connect with me on social media. Let's work together to bring your ideas to life!
        </p>
        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8'>
            <input type="text" placeholder='Enter Your Name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name' />
            <input type="email" placeholder='Enter Your Email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email' />
          </div>
          <textarea rows="6" placeholder="Enter your message..." required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='message'></textarea>

          <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit Now <Image src={assets.right_arrow_white} alt='submit' className='w-4' /> </button>

          <p className="mt-4">{result}</p>
        </form>
    </div>
  )
}

export default contact
