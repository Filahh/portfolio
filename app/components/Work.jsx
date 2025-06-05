import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20 mt-32'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
        <h2 className='text-center text-5xl font-Ovo'>My Latest Work</h2>

        <p className="text-center max-2xl mx-auto mt-5 mb-12 font-Ovo">
            Welcome to my portfolio! Here, you can explore a selection of my recent projects that showcase my skills and expertise in web development. Each project reflects my commitment to delivering high-quality work and creating exceptional user experiences. I invite you to take a closer look at my work and see how I can help bring your ideas to life.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 my-10">
            {workData.map((project, index)=>(
                <div key={index}
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
                </div>
            ))}
        </div>
        <a href="" className='w-max flex items-center justify-center gap-2 text-gray-600 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-100 duration-500'>Show More <Image src={assets.right_arrow_bold} alt='right arrow' className='w-4' /> </a>
    </div>
  )
}

export default Work
