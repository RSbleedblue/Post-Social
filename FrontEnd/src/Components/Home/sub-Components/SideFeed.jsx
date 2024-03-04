import React from "react";
import { FaSearch } from "react-icons/fa";
import { RiHome3Line } from "react-icons/ri";
import { PiNotebookFill } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";

function SideFeed() {
  return (
    <div className="w-1/5">
      <div className="p-2 bg-secwhite text-black rounded-2xl flex flex-col gap-2 text-pmpurple opacity-80">
        <div className="rounded-lg flex items-center p-4 hover:text-white hover:bg-pmpurple transition-all duration-100">
          <RiHome3Line className="h-4 sm:h-7 w-[20%] " />
          <p>Feed</p>
        </div>
        <div className="rounded-lg flex items-center p-4 hover:text-white hover:bg-pmpurple transition-all duration-100">
          <FaSearch className="h-4 sm:h-7 w-[20%]" />
          <p>Search</p>
        </div>
        <div className="rounded-lg flex items-center p-4 hover:text-white hover:bg-pmpurple transition-all duration-100">
          <PiNotebookFill className="h-4 sm:h-7 w-[20%]" />
          <p>Posts</p>
        </div>
        <div className="rounded-lg flex items-center p-4 hover:text-white hover:bg-pmpurple transition-all duration-100">
          <FaUserFriends className="h-4 sm:h-7 w-[20%]" />
          <p>Friends</p>
        </div>
      </div>
    </div>
  );
}

export default SideFeed;
