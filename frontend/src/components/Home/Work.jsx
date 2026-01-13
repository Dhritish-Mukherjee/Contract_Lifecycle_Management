import React from 'react'
import { motion } from 'motion/react'

const Work = () => {
  return (
    <div className='p-10 sm:p-20 flex flex-col items-center bg-blue-50 gap-10 '>
      <div className='flex flex-col items-center justify-center'>
        <motion.h2 
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className='text-3xl sm:text-4xl text-center'>How It Works</motion.h2>
        <motion.p 
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        className=' text-center sm:text-xl text-zinc-500 '>Simple workflow, powerful results</motion.p>
      </div>
      <div className='flex flex-col sm:flex sm:flex-row items-center gap-8  '>
        <motion.div
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className='flex flex-col items-center gap-1 w-75'>
            <div className='w-10 h-10 p-5 bg-zinc-700 text-white flex justify-center items-center rounded-full font-semibold'>1</div>
            <h3 className='text-2xl text-center'>Upload Contract</h3>
            <p className='text-sm text-neutral-500 text-center'>Upload your contract documents or create them directly in the platform</p>
        </motion.div>

        <motion.div
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        className='flex flex-col items-center gap-1 w-75'>
            <div className='w-10 h-10 p-5 bg-teal-500 text-white flex justify-center items-center rounded-full font-semibold'>2</div>
            <h3 className='text-2xl text-center'>AI Analysis</h3>
            <p className='text-sm text-neutral-500 text-center'>Our AI extracts key clauses, detects risks, and summarizes terms automatically</p>
        </motion.div>

        <motion.div
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        className='flex flex-col items-center gap-1 w-75'>
            <div className='w-10 h-10 p-5 bg-violet-700 text-white flex justify-center items-center rounded-full font-semibold'>3</div>
            <h3 className='text-2xl text-center'>Verify & Approve</h3>
            <p className='text-sm text-neutral-500 text-center'>Review, approve, and verify on blockchain for immutable audit trails</p>
        </motion.div>

        
      </div>
      <div>

      </div>
    </div>
  )
}

export default Work
