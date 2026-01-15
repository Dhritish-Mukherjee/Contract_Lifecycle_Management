import React, { useState } from 'react'
import { MdSecurity } from 'react-icons/md'
import { motion } from 'motion/react';

const Login = () => {
    const [state, setState] = useState('signup');

    const handleSubmit = (e) => {
        e.preventDefault();
    }


  return (
    <div className='flex justify-center '>
      <div
      className='hidden sm:h-screen w-1/2 bg-linear-to-br from-blue-950 to-green-950 sm:flex sm:justify-center sm:items-center p-30 '>
        <motion.div
         initial={{opacity : 0, y: 10}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        className='flex flex-col items-start justify-center gap-5 '>
            <div className="logo flex justify-center items-center gap-2">
                    <div className='p-2 bg-green-500 rounded-lg '>
                        <MdSecurity className='text-neutral-100' size={20} />
                    </div>
                    <h1 className='text-2xl text-white'>Trust<span className='text-green-500 '>X</span>tract</h1>
            </div>
            <h2 className='text-4xl text-neutral-200  '>AI-Powered Contract Management</h2>
            <p className='text-neutral-300 text-lg '>Create, review, analyze, and verify contracts with enterprise-grade security and blockchain auditability.</p>
            <div className='flex flex-col gap-3 text-neutral-300 '>
                <div className='flex  items-center gap-3 '>
                    <div className='w-2 h-2 rounded-full bg-teal-500'></div>
                    <p className='text-lg'>AI-powered risk detection & clause extraction</p>
                </div>
                <div className='flex  items-center gap-3 '>
                    <div className='w-2 h-2 rounded-full bg-violet-500'></div>
                    <p className='text-lg'>Blockchain-verified audit trails</p>
                </div>
                <div className='flex items-center gap-3 '>
                    <div className='w-2 h-2 rounded-full bg-green-500'></div>
                    <p className='text-lg'>Multi-step approval workflows</p>
                </div>
            </div>
        </motion.div>
      </div>

      <div className='w-full sm:w-1/2 sm:flex sm:justify-center sm:items-center py-20 px-5 sm:p-0  '>
        <motion.div
         initial={{opacity : 0, y: 10}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        className='flex flex-col gap-1 p-5 '>
            <h3 className='text-3xl text-center'>{state === 'signup' ? 'Create your account' : 'Welcome back'}</h3>
            <p className='text-lg text-center  text-zinc-500'>Start managing contracts securely</p>

            <form onSubmit={handleSubmit} className='py-5 flex flex-col gap-2'>
                {state === 'signup' && 
                <div className='flex flex-col gap-1 '>
                    <label>Full Name</label>
                    <input className='px-3 py-2 w-full outline-none border border-zinc-400 rounded-lg text-sm' type="text" placeholder='John Doe' required />
                </div> }
                <div className='flex flex-col gap-1 '>
                    <label>Email</label>
                    <input className='px-3 py-2 w-full outline-none border border-zinc-400 rounded-lg text-sm' type="email" placeholder='you@gmail.com' required />
                </div>
                <div className='flex flex-col gap-1 '>
                    <label>Password</label>
                    <input className='px-3 py-2 w-full outline-none border border-zinc-400 rounded-lg text-sm' type="password" placeholder='use a strong one' required />
                </div>
                {state === 'signup' && (
                    <div className='flex flex-col gap-1 '>
                    <label>Role (required)</label>
                    <select className='px-3 py-2 w-full outline-none border border-zinc-400 rounded-lg text-sm' name="" id="" required>
                        <option value="select role">select role</option>
                        <option value="creator">creator</option>
                        <option value="reviewer">reviewer</option>
                        <option value="approver">approver</option>
                    </select>
                </div>
                )}

                <button type='submit' className='px-3 py-2 w-full bg-blue-500 rounded-lg cursor-pointer text-white hover:scale-103 hover:bg-blue-400 transition-all duration-300 font-semibold '>Create Account</button>
                <p className='text-sm text-center text-zinc-600'>{state === 'signup' ? 'already have an account?' : "don't have an account?"} <span onClick={() => state === 'signup' ? setState('login') : setState('signup')} className='text-blue-500 underline cursor-pointer'>{state === 'signup' ? 'Login' : 'Sign Up'}</span></p>
            </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Login
