import React from "react";
import logo from "../assets/Logo/logo.png";
import { MdHome } from "react-icons/md";
import { FaCompass } from "react-icons/fa";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

export default function Navbar() {
  return (
    <aside id="logo-sidebar" className="flex h-full" aria-label="Sidebar">
      <div class="h-full px-3 py-10 flex flex-col overflow-y-auto bg-white items-center">
        <a href="#" class="flex items-center ps-2.5 mb-5">
          <img src={logo} class="h-6 sm:h-10" alt="Flowbite Logo" />
        </a>
        <MdHome className="h-6 sm:h-10 w-[60%] p-1 text-pmpurple rounded-lg dark:pmpurple hover:bg-gray-100 mb-2 cursor-pointer" />
        <FaCompass className="h-6 sm:h-10 w-[60%] p-1 text-pmpurple rounded-lg dark:pmpurple hover:bg-gray-100 mb-2 cursor-pointer" />
        <BiSolidMessageSquareDetail className="h-6  sm:h-11 w-[60%] p-1 text-pmpurple rounded-lg dark:pmpurple hover:bg-gray-100 mb-2 cursor-pointer" />
        <IoNotifications className="h-6 sm:h-11 w-[60%] p-1 text-pmpurple rounded-lg dark:pmpurple hover:bg-gray-100 mb-2 cursor-pointer" />
        <MdAccountCircle className="h-6 sm:h-11 w-[60%] p-1 text-pmpurple rounded-lg dark:pmpurple hover:bg-gray-100 mb-2 mt-auto cursor-pointer" />
      </div>
    </aside>
  );
}
