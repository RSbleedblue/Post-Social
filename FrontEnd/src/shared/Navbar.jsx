import React from "react";
import logo from "../assets/Logo/logoWhite.png";
import { MdHome } from "react-icons/md";
import { FaCompass } from "react-icons/fa";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

export default function Navbar() {
  return (
    <aside id="logo-sidebar" className="flex h-full w-[10%]  transition-all bg-overlayBlack" aria-label="Sidebar">
      <div className="h-full flex flex-col bg-overlayBlack items-center w-full justify-between">
        <a href="#" className="flex items-center ps-2.5 mt-10">
          <img src={logo} className="h-6 sm:h-10" alt="Flowbite Logo" />
        </a>
        <div className="w-full flex flex-col text-2xl items-center gap-4 transition-all">
          <div className="w-full flex items-center text-white  hover:border-hazedBlack cursor-pointer hover:bg-hazedBlack rounded-r-lg p-2 gap-2">
            <MdHome className="" />
            <p className="text-sm font-semibold">Home</p>
          </div>
          <div className="w-full flex items-center text-white  hover:border-hazedBlack cursor-pointer hover:bg-hazedBlack rounded-r-lg p-2 gap-2">
            <FaCompass className=" " />
            <p className="text-sm font-semibold">Explore</p>
          </div>
          <div className="w-full flex items-center text-white  hover:border-hazedBlack cursor-pointer hover:bg-hazedBlack rounded-r-lg p-2 gap-2">
            <BiSolidMessageSquareDetail className=" " />
            <p className="text-sm font-semibold">Messages</p>
          </div>
          <div className="w-full flex items-center text-white  hover:border-hazedBlack cursor-pointer hover:bg-hazedBlack rounded-r-lg p-2 gap-2">
            <IoNotifications className=" " />
            <p className="text-sm font-semibold">Notification</p>
          </div>
        </div>
          <MdAccountCircle className="text-white text-[40px] hover:bg-gray-100 rounded-full p-1 cursor-pointer" />
      
      </div>
    </aside>
  );
}
