import React from 'react'
import { GiStarShuriken } from "react-icons/gi";
import { GrShieldSecurity } from "react-icons/gr";
import { GrNotes } from "react-icons/gr";
import { SiTicktick } from "react-icons/si";
import { motion } from 'motion/react';

const About = () => {
  return (
    <div className='p-10 sm:p-20 flex flex-col items-center bg-neutral-50 gap-10 '>
      <div className='flex flex-col items-center justify-center'>
        <motion.h2 
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className='text-3xl sm:text-4xl text-center'>Enterprise-Grade <span className='text-green-500 special-font '>Features</span></motion.h2>
        <motion.p
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        className=' text-center sm:text-xl text-zinc-500 '>Everything you need to manage contracts securely and efficiently</motion.p>
      </div>
      <div className='flex flex-col sm:flex sm:flex-row items-center gap-5  '>
        <motion.div
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className='flex flex-col gap-2 p-5 w-75 bg-white border border-zinc-300 rounded-xl hover:scale-103 hover:shadow-lg transition-all duration-300 '>
            <div className='p-3 bg-blue-50 w-fit rounded-lg'><GiStarShuriken className='text-green-800' size={20} /></div>
            <h3 className='text-2xl'>AI-Powered Analysis</h3>
            <p className='text-sm text-neutral-500 '>Automatic risk detection, clause extraction, and contract summarization</p>
        </motion.div>

        <motion.div
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        className='flex flex-col gap-2 p-5 w-75 bg-white border border-zinc-300 rounded-xl hover:scale-103 hover:shadow-lg transition-all duration-300 '>
            <div className='p-3 bg-violet-100 w-fit rounded-lg'><GrShieldSecurity className='text-violet-500' size={20} /></div>
            <h3 className='text-2xl'>Blockchain Verified</h3>
            <p className='text-sm text-neutral-500 '>Immutable audit trails and cryptographic contract verification</p>
        </motion.div>

        <motion.div
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        className='flex flex-col gap-2 p-5 w-75 bg-white border border-zinc-300 rounded-xl hover:scale-103 hover:shadow-lg transition-all duration-300 '>
            <div className='p-3 bg-gray-100 w-fit rounded-lg'><GrNotes className='text-gray-500' size={20} /></div>
            <h3 className='text-2xl'>Version Control</h3>
            <p className='text-sm text-neutral-500 '>Complete history of changes with side-by-side comparison</p>
        </motion.div>

        <motion.div
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1.2}}
        className='flex flex-col gap-2 p-5 w-75 bg-white border border-zinc-300 rounded-xl hover:scale-103 hover:shadow-lg transition-all duration-300 '>
            <div className='p-3 bg-green-100 w-fit rounded-lg'><SiTicktick className='text-green-500' size={20} /></div>
            <h3 className='text-2xl'>Approval Workflows</h3>
            <p className='text-sm text-neutral-500 '>Multi-step review and approval process with role-based access</p>
        </motion.div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default About
