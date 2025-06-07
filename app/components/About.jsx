import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='about' className='w-full px-[12%] py-10 scroll-mt-20 mt-32'>
      <motion.h4 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className='text-center mb-2 text-lgfont-Ovo'>Introduction</motion.h4>
      <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className='text-center text-5xl font-Ovo'>About Me</motion.h2>

      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </motion.div>
        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}className="flex-1">
            <p className='mb-10 max-2xl font-Ovo'>
                I am an experienced Frontend Developer with a passion for creating dynamic and responsive web applications. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building user-friendly interfaces that enhance the overall user experience. My expertise extends to frameworks like React and Next.js, allowing me to develop scalable and efficient web solutions. I am committed to continuous learning and staying updated with the latest industry trends to deliver high-quality projects that meet client needs.
            </p>

            <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
              {infoList.map(({icon, iconDark, title, description}, index) => (
                <motion.li 
                whileHover={{ scale: 1.05 }}
                className='border-[0.5] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black' key={index}>
                  <Image src={icon} alt={title} className='w-7 mt-3' />
                  <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                  <p className='text-gray-600 text-sm'>{description}</p>
                </motion.li>  
              ))}
            </motion.ul>
            
            <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            >Tools I Use</motion.h4>

            <motion.ul 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool, index)=>(
                <motion.li 
                whileHover={{ scale: 1.1 }}
                key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                  <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                </motion.li>
              ))}
            </motion.ul>

            
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
