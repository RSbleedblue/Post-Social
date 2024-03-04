import React from "react";
import logo from "../assets/logo/logo.png";
import { MdHome } from "react-icons/md";
import { FaCompass } from "react-icons/fa";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

export default function Navbar() {
  return (
    <aside
      id="logo-sidebar"
      className="flex flex-wrap h-screen"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-10 flex flex-col overflow-y-auto bg-white items-center">
        <a href="#" class="flex items-center ps-2.5 mb-5">
          <img src={logo} class="h-6 sm:h-10" alt="Flowbite Logo" />
        </a>
        <div className="flex flex-col items-center w-full mb-2 hover:bg-gray-100 rounded-lg">
          <MdHome className="h-6 sm:h-10 w-[60%] p-1 text-pmpurple rounded-lg dark:pmpurple  " />
          <GoDotFill size={10} />
        </div>
        <FaCompass className="h-6 sm:h-10 w-[60%] p-1 text-pmpurple rounded-lg dark:pmpurple hover:bg-gray-100 mb-2" />
        <BiSolidMessageSquareDetail className="h-6  sm:h-11 w-[60%] p-1 text-pmpurple rounded-lg dark:pmpurple hover:bg-gray-100 mb-2" />
        <IoNotifications className="h-6 sm:h-11 w-[60%] p-1 text-pmpurple rounded-lg dark:pmpurple hover:bg-gray-100 mb-2" />
        <MdAccountCircle className="h-6 sm:h-11 w-[60%] p-1 text-pmpurple rounded-lg dark:pmpurple hover:bg-gray-100 mb-2 mt-auto" />
      </div>
    </aside>
  );
}
