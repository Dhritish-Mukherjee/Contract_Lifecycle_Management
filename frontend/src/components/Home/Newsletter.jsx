import React from 'react'
import{ motion } from "motion/react"

const Newsletter = () => {
  return (
    <div className='p-10 sm:p-20 flex flex-col items-center gap-5 '>
      <div className='flex flex-col items-center '>
        <motion.h3
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className='text-3xl sm:text-4xl'>Never miss an update!</motion.h3>
        <motion.p 
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        className='text-zinc-500 text-sm sm:text-xl text-center '>Subcribe to get the latest news, new features, and exclusive updates.</motion.p>
    </div> 
    <div>
        <motion.div
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        className="p-0 border border-zinc-300 rounded  ">
            <input className="text-sm sm:text-lg px-1 sm:px-3 sm:w-[500px] outline-none " type="text" placeholder='Enter your email id' />
            <button className="px-2 py-1 sm:px-5 sm:py-2 bg-green-500 font-semibold text-white hover:bg-green-600 cursor-pointer  ">Subscribe</button>
        </motion.div>
    </div>
    </div>
  )
}

export default Newsletter
