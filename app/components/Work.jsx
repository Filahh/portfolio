import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Work = () => {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{ y: -20,opacity: 0}}
        whileInView={{ y:0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5}}
        className='text-center mb-2 text-lg font-Ovo'>My Portfolio</motion.h4>
        <motion.h2 
        initial={{ y: -20,opacity: 0}}
        whileInView={{ y:0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5}}
        className='text-center text-5xl font-Ovo'>My Latest Work</motion.h2>

        <motion.p 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5}}
        className="text-center max-2xl mx-auto mt-5 mb-12 font-Ovo">
            Welcome to my portfolio! Here, you can explore a selection of my recent projects that showcase my skills and expertise in web development. Each project reflects my commitment to delivering high-quality work and creating exceptional user experiences. I invite you to take a closer look at my work and see how I can help bring your ideas to life.
        </motion.p>

        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5}}
        className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 my-10">
            {workData.map((project, index)=>(
                <motion.a 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                key={index}
                href={project.link}
                target="_blank"
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                style={{ backgroundImage: `url(${project.bgImage})` }} >
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <div className='border rounded-b-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-200 transition'>
                            <Image src={assets.send_icon} alt='send icon' className='w-5' />
                        </div>
                    </div>
                </motion.a>
            ))}
        </motion.div>
        <motion.a 
        initial={{ opacity: 0}}
        whileInView={{  opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        href="" className='w-max flex items-center justify-center gap-2 text-gray-600 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-100 duration-500'>Show More <Image src={assets.right_arrow_bold} alt='right arrow' className='w-4' /> </motion.a>
    </motion.div>
  )
}

export default Work
