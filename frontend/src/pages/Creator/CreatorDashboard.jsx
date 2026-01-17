import React from "react";
import { MdSecurity } from "react-icons/md";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { IoCreateOutline, IoDocumentTextOutline, IoHome, IoPersonOutline } from "react-icons/io5";

const CreatorDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {};

  return (
    <div className="w-full h-screen">
      <div className="w-full ">
        <div className="flex justify-between py-3 px-5 sm:px-20 border-b border-gray-300 ">
          <div
            onClick={() => navigate("/")}
            className="logo flex justify-center items-center gap-2 cursor-pointer"
          >
            <div className="p-2 bg-green-500 rounded-lg ">
              <MdSecurity className="text-neutral-100" size={20} />
            </div>
            <h1 className="text-2xl ">
              Trust<span className="text-green-500 ">X</span>tract
            </h1>
          </div>
          <div>
            <button
              onClick={logout}
              className="px-5 py-2 bg-green-500 rounded-full cursor-pointer hover:bg-green-400 hover:scale-103 transition-all duration-300 flex items-center justify-center gap-1"
            >
              Logout
              <LuLogOut className="hidden sm:inline-block " />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center  w-full">
        <div className="w-[15%] sidebar hidden p-3 border-r border-gray-300 sm:flex sm:flex-col sm:gap-3">
          <div>
            <h3 className="text-xl text-center bg-green-500 text-white py-1 rounded-lg ">
              Dashboard
            </h3>
          </div>
          <div className="flex flex-col items-center gap-3 min-h-screen h-auto">
            {/* OVERVIEW */}
            <Link
              to="/dashboard"
              className="flex items-center gap-5 cursor-pointer hover:bg-green-50 px-3 py-2 w-full rounded-lg"
            >
              <IoHome />
              <span>Overview</span>
            </Link>

            {/* CREATE CONTRACT */}
            <Link
              to="/dashboard/contracts/create"
              className="flex items-center gap-5 cursor-pointer hover:bg-green-50 px-3 py-2 w-full rounded-lg"
            >
              <IoCreateOutline />
              <span>Create Contract</span>
            </Link>

            {/* MY CONTRACTS */}
            <Link
              to="/dashboard/contracts"
              className="flex items-center gap-5 cursor-pointer hover:bg-green-50 px-3 py-2 w-full rounded-lg"
            >
              <IoDocumentTextOutline />
              <span>My Contracts</span>
            </Link>

            {/* PROFILE */}
            <Link
              to="/dashboard/profile"
              className="flex items-center gap-5 cursor-pointer hover:bg-green-50 px-3 py-2 w-full rounded-lg"
            >
              <IoPersonOutline />
              <span>Profile</span>
            </Link>
          </div>
        </div>
        <div className="w-[85%] px-2 py-5 sm:p-5 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;
