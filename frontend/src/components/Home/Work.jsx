import React from 'react'

const Work = () => {
  return (
    <div className='p-10 sm:p-20 flex flex-col items-center bg-blue-50 gap-10 '>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-3xl sm:text-4xl text-center'>How It Works</h2>
        <p className=' text-center sm:text-xl text-zinc-500 '>Simple workflow, powerful results</p>
      </div>
      <div className='flex flex-col sm:flex sm:flex-row items-center gap-8  '>
        <div className='flex flex-col items-center gap-1 w-75'>
            <div className='w-10 h-10 p-5 bg-zinc-700 text-white flex justify-center items-center rounded-full font-semibold'>1</div>
            <h3 className='text-2xl text-center'>Upload Contract</h3>
            <p className='text-sm text-neutral-500 text-center'>Upload your contract documents or create them directly in the platform</p>
        </div>

        <div className='flex flex-col items-center gap-1 w-75'>
            <div className='w-10 h-10 p-5 bg-teal-500 text-white flex justify-center items-center rounded-full font-semibold'>2</div>
            <h3 className='text-2xl text-center'>AI Analysis</h3>
            <p className='text-sm text-neutral-500 text-center'>Our AI extracts key clauses, detects risks, and summarizes terms automatically</p>
        </div>

        <div className='flex flex-col items-center gap-1 w-75'>
            <div className='w-10 h-10 p-5 bg-violet-700 text-white flex justify-center items-center rounded-full font-semibold'>3</div>
            <h3 className='text-2xl text-center'>Verify & Approve</h3>
            <p className='text-sm text-neutral-500 text-center'>Review, approve, and verify on blockchain for immutable audit trails</p>
        </div>

        
      </div>
      <div>

      </div>
    </div>
  )
}

export default Work
