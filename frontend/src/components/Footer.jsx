import React from 'react'
import { MdSecurity } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='p-5 sm:p-20 flex flex-col gap-3 sm:flex sm:flex-row sm:justify-between bg-zinc-800 text-white '>
      <div className='sm:w-1/2 flex flex-col items-start gap-3 '>
        <div className="logo flex justify-center items-center gap-2 cursor-pointer">
              <div className='p-2 bg-green-500 rounded-lg '>
                  <MdSecurity className='text-neutral-100' size={20} />
              </div>
              <h1 className='text-2xl '>Trust<span className='text-green-500 '>X</span>tract</h1>
        </div>
        <p className='text-sm text-zinc-400 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore nisi voluptate quam eaque rerum, odio quae aliquam eveniet temporibus reprehenderit</p>
        <p className='text-sm sm:text-lg '>Copyright 2026 &copy; TrustXtract - All Right Reserved.</p>
      </div>
      <div className='flex flex-col sm:flex sm:flex-row gap-5 sm:gap-10 justify-between'>
        <ul className='flex flex-col gap-1'>
            <li>Quick Links</li>
            <li className='text-zinc-400 text-sm hover:underline cursor-pointer '>Home</li>
            <li className='text-zinc-400 text-sm hover:underline cursor-pointer '>Best Sellers</li>
            <li className='text-zinc-400 text-sm hover:underline cursor-pointer '>Offers & Deals</li>
            <li className='text-zinc-400 text-sm hover:underline cursor-pointer '>Contact Us</li>
            <li className='text-zinc-400 text-sm hover:underline cursor-pointer '>FAQs</li>
        </ul>
        <ul className='flex flex-col gap-1'>
            <li>Need Help?</li>
            <li className='text-zinc-400 text-sm hover:underline cursor-pointer '>Delivery Information</li>
            <li className='text-zinc-400 text-sm hover:underline cursor-pointer '>Return & Return Policy</li>
            <li className='text-zinc-400 text-sm hover:underline cursor-pointer '>Payments Methods</li>
            <li className='text-zinc-400 text-sm hover:underline cursor-pointer '>Tract your Contract</li>
            <li className='text-zinc-400 text-sm hover:underline cursor-pointer '>Contact Us</li>
        </ul>
        <ul className='flex flex-col gap-1'>
            <li>Follow Us</li>
            <li className='text-zinc-400 text-sm hover:underline cursor-pointer '>instagram</li>
            <li className='text-zinc-400 text-sm hover:underline cursor-pointer '>Twitter</li>
            <li className='text-zinc-400 text-sm hover:underline cursor-pointer '>Facebook</li>
            <li className='text-zinc-400 text-sm hover:underline cursor-pointer '>Youtube</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
