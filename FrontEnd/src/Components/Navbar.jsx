import React from 'react'
import logo from '../assets/Logo/logo.png';
import { MdHome } from "react-icons/md";
import { FaCompass } from "react-icons/fa";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

export default function Navbar() {
  return (
    <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-15 justify-center h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-10 flex flex-col overflow-y-auto bg-white items-center">
        <a href="https://flowbite.com/" class="flex items-center ps-2.5 mb-5">
            <img src={logo} class="h-6 sm:h-10" alt="Flowbite Logo" />
        </a>
        <MdHome className='h-6 sm:h-10 w-[60%] p-1 text-gray-900 rounded-lg dark:pmpurple hover:bg-gray-100 mb-2'/>
        <FaCompass className='h-6 sm:h-10 w-[60%] p-1 text-gray-900 rounded-lg dark:pmpurple hover:bg-gray-100 mb-2'/>
        <BiSolidMessageSquareDetail className='h-6  sm:h-11 w-[60%] p-1 text-gray-900 rounded-lg dark:pmpurple hover:bg-gray-100 mb-2'/>
        <IoNotifications className='h-6 sm:h-11 w-[60%] p-1 text-gray-900 rounded-lg dark:pmpurple hover:bg-gray-100 mb-2'/>
        <MdAccountCircle className='h-6 sm:h-11 w-[60%] p-1 text-gray-900 rounded-lg dark:pmpurple hover:bg-gray-100 mb-2 mt-auto'/>
    </div>
   </aside>
  )
}
