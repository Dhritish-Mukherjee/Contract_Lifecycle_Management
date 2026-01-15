import React, { useContext } from 'react'
import { MdSecurity } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {

  const navigate = useNavigate();
  const {token} = useContext(AppContext);

  return (
    <div className='flex justify-between py-3 px-5 sm:px-20 border-b border-gray-300 '>
      <div onClick={() => navigate("/")} className="logo flex justify-center items-center gap-2 cursor-pointer">
        <div className='p-2 bg-green-500 rounded-lg '>
            <MdSecurity className='text-neutral-100' size={20} />
        </div>
        <h1 className='text-2xl '>Trust<span className='text-green-500 '>X</span>tract</h1>
      </div>
      <div>
        <button onClick={() => navigate("/login")} className='px-5 py-2 bg-green-500 rounded-full cursor-pointer hover:bg-green-400 hover:scale-103 transition-all duration-300 flex items-center justify-center gap-1'>{token ? "Dashboard" : "Login"} <FaArrowRightLong className='hidden sm:inline-block ' /></button>
      </div>
    </div>
  )
}

export default Navbar
