import React from "react";
import { FaSearch } from "react-icons/fa";
import { RiHome3Line } from "react-icons/ri";
import { PiNotebookFill } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";

function SideFeed() {
  return (
    <div className="w-[18%]">
      <div className="p-4 bg-secwhite hidden sm:flex rounded-2xl flex-col gap-2 text-pmpurple">
        <div className="rounded-2xl flex items-center p-4 hover:text-white hover:bg-pmpurple transition-all duration-100 cursor-pointer">
          <RiHome3Line className="h-10 sm:h-7 w-[17%] pr-2 min-w-[25px]" />
          <p className="text-sm font-semibold">Feed</p>
        </div>
        <div className="rounded-2xl flex items-center p-4 hover:text-white hover:bg-pmpurple transition-all duration-100 cursor-pointer">
          <FaSearch className="h-4 sm:h-5 w-[17%] pr-2 min-w-[25px]" />
          <p className="text-sm font-semibold">Search</p>
        </div>
        <div className="rounded-2xl flex items-center p-4 hover:text-white hover:bg-pmpurple transition-all duration-100 cursor-pointer">
          <PiNotebookFill className="h-4 sm:h-7 w-[17%] pr-2 min-w-[25px]" />
          <p className="text-sm font-semibold">Posts</p>
        </div>
        <div className="rounded-2xl flex items-center p-4 hover:text-white hover:bg-pmpurple transition-all duration-100 cursor-pointer">
          <FaUserFriends className="h-4 sm:h-7 w-[17%] pr-2 min-w-[25px]" />
          <p className="text-sm font-semibold">Friends</p>
        </div>
      </div>
    </div>
  );
}

export default SideFeed;
