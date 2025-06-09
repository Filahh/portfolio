'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'motion/react'

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
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5}}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-cover bg-no-repeat bg-center'>
      <motion.h4 
      initial={{ y: -20,opacity: 0}}
      whileInView={{ y:0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5}}
      className='text-center mb-2 text-lg font-Ovo'>Connect With Me</motion.h4>

      <motion.h2 
      initial={{ y: -20,opacity: 0}}
      whileInView={{ y:0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5}}className='text-center text-5xl font-Ovo'>Get In Touch</motion.h2>

        <motion.p 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5}}
        className="text-center max-2xl mx-auto mt-5 mb-12 font-Ovo">
            I would love to hear from you! Whether you have a question, a project in mind, or just want to say hello, feel free to reach out. You can contact me through the form below or connect with me on social media. Let's work together to bring your ideas to life!
        </motion.p>
        <motion.form 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5}}
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8'>
            <motion.input 
            initial={{ x:-50, opacity: 0}}
            whileInView={{ x:0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5}}
            type="text" placeholder='Enter Your Name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name' />
            <motion.input 
            initial={{ x:50, opacity: 0}}
            whileInView={{ x:0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6}}
            type="email" placeholder='Enter Your Email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email' />
          </div>
          <motion.textarea 
          initial={{ y:-100, opacity: 0}}
          whileInView={{ y:0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6}}
          rows="6" placeholder="Enter your message..." required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='message'></motion.textarea>

          <motion.button 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit Now <Image src={assets.right_arrow_white} alt='submit' className='w-4' /> </motion.button>

          <p className="mt-4">{result}</p>
        </motion.form>
    </motion.div>
  )
}

export default contact
