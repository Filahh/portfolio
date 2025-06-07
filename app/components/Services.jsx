import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Services = () => {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1}}
    id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{ y: -20,opacity: 0}}
        whileInView={{ y:0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5}}
        className='text-center mb-2 text-lg font-Ovo'>What I Offer</motion.h4>
        <motion.h2 
        initial={{ y: -20,opacity: 0}}
        whileInView={{ y:0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5}}
        className='text-center text-5xl font-Ovo'>My Services</motion.h2>

        <motion.p 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5}}
        className="text-center max-2xl mx-auto mt-5 mb-12 font-Ovo">
            I am a Frontend Developer with over a decade of experience in the field. I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth. My expertise lies in creating visually stunning and user-friendly websites that leave a lasting impression on visitors. 
        </motion.p>
        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6}}
        className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10">
            {serviceData.map(({icon, title, description, link},index)=>(
                <motion.div 
                whileHover={{ scale: 1.05 }}
                key={index} 
                className="border border-gray-300 rounded-lg px-8 py-12 cursor-pointer transition-transform duration-500 
                shadow-md hover:shadow-xl hover:shadow-black/30 hover:-translate-y-2 bg-white hover:bg-lightHover"
              >
                    <Image src={icon} alt='icon' className='w-10' />
                    <h3 className="text-lg my-4 text-gray-700">{title}</h3>
                    <p className="text-sm text-gray-600 leading-5">{description}</p>
                </motion.div>
            ))}

        </motion.div>
        
    </motion.div>
  )
}

export default Services
