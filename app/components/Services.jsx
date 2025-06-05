import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20 mt-32'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>What I Offer</h4>
        <h2 className='text-center text-5xl font-Ovo'>My Services</h2>

        <p className="text-center max-2xl mx-auto mt-5 mb-12 font-Ovo">
            I am a Frontend Developer with over a decade of experience in the field. I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth. My expertise lies in creating visually stunning and user-friendly websites that leave a lasting impression on visitors. 
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10">
            {serviceData.map(({icon, title, description, link},index)=>(
                <div 
                key={index} 
                className="border border-gray-300 rounded-lg px-8 py-12 cursor-pointer transition-transform duration-500 
                shadow-md hover:shadow-xl hover:shadow-black/30 hover:-translate-y-2 bg-white hover:bg-lightHover"
              >
                    <Image src={icon} alt='icon' className='w-10' />
                    <h3 className="text-lg my-4 text-gray-700">{title}</h3>
                    <p className="text-sm text-gray-600 leading-5">{description}</p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read More <Image src={assets.right_arrow} alt='icon' className='w-4' /></a>
                </div>
            ))}

        </div>
        
    </div>
  )
}

export default Services
