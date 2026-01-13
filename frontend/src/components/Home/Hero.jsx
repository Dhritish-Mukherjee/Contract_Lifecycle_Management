import React from 'react'
import { BsStars } from "react-icons/bs";
import  { motion } from "motion/react"


const Hero = () => {
  return (
    <div className='flex flex-col items-center gap-5 p-10 sm:p-30 bg-neutral-100 h-auto'>
      <motion.div
      initial={{opacity: 0, y: 10}}
      whileInView={{opacity:1, y:0}}
      transition={{duration: 0.4}}
      className='flex justify-center items-center gap-1 px-3 py-1 border border-zinc-300  bg-white rounded-full text-xs sm:text-sm text-neutral-500'>
        <BsStars className='text-green-500' />
        AI-Powered Contract Intelligence 
      </motion.div>
      <div className='flex flex-col items-center justify-center gap-1 sm:gap-3 '>
        <motion.h2 
        initial={{opacity: 0, y:10 }}
        whileInView={{opacity : 1, y:0}}
        transition={{duration : 0.6}}
        className='text-4xl sm:text-7xl text-center'>Secure, Intelligent <br /> <span className='special-font bg-linear-to-r from-zinc-800 via-green-500 to-violet-500 bg-clip-text text-transparent'>Contract Management</span></motion.h2>
        <motion.p 
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration : 0.8}}
        className='text-sm sm:text-xl sm:w-[75%] text-center text-neutral-500'>
          Create, review, analyze and verify contracts with enterprise-grade security, AI powered insights and blockchain audibility.
        </motion.p>
      </div> 
      
      <motion.div
      initial={{opacity: 0, y: 10}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1}}
      className="buttons flex justify-center items-center gap-3 ">
        <motion.button
        whileTap={{scale: 0.95}}
        className='px-5 py-2 bg-green-500 rounded-full text-white cursor-pointer hover:bg-green-400 hover:scale-103 transition-all duration-300 text-xs sm:text-sm'>Start Now</motion.button>
        <button className='px-5 py-2 rounded-full border border-zinc-300 cursor-pointer text-xs sm:text-sm '>View Demo</button>
      </motion.div>
    </div>
  )
}

export default Hero
