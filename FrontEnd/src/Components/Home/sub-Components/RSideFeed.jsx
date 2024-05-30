import React from "react";
import luffy from "../../../assets/banner.jpg";
import prof_banner from "../../../assets/profile_banner.jpeg";
import { FaRegUser } from "react-icons/fa";

function RSideFeed() {
  return (
    <div className="flex-1 flex-col relative h-[72%]">
      <div className="w-full h-[40%] rounded-lg over overflow-hidden">
        <img
          src={prof_banner}
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="w-full bg-white h-[60%] rounded-lg">
        <div className="pt-8 text-pmpurple font-semibold text-xl flex justify-center">
          Rivansh
        </div>
        <div className="font-thin px-10 text-justify pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          eveniet cumque accusamus impedit, quaerat pariatur dicta culpa
          distinctio. Quam, iste.
        </div>
        <div className="w-full pt-5 p-4 flex justify-center gap-24">
          <div className="flex flex-col items-center">
            <p className="text-pmpurple font-semibold text-xl">1k</p>
            <p className="font-thin">Likes</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-pmpurple font-semibold text-xl">1560</p>
            <p className="font-thin">Friends</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-pmpurple font-semibold text-xl">10</p>
            <p className="font-thin">Posts</p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className="flex justify-center items-center gap-2 w-[40%] bg-pmpurple p-2 rounded-xl text-white hover:drop-shadow-xl hover:bg-white hover:text-pmpurple transition-all duration-100">
            View Profile
            <FaRegUser />
          </button>
        </div>
      </div>
      <div className="w-[110px] h-[110px] bg-pmpurple absolute overflow-hidden rounded-full top-[42%] -translate-y-1/2 -translate-x-4 border-8 border-bgmain">
        <img src={luffy} />
      </div>
    </div>
  );
}

export default RSideFeed;
