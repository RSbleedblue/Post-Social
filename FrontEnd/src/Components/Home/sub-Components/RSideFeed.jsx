import React from "react";
import luffy from "../../../assets/banner.jpg";
import prof_banner from "../../../assets/profile_banner.jpeg";

function RSideFeed() {
  return (
    <div className="rounded-lg text-black h-[480px] flex-1 flex flex-col pl-6 justify-between relative">
      <div className="w-full rounded-xl min-h-[100px] relative overflow-hidden">
        <img
          src={prof_banner}
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="flex flex-col items-center bg-white w-[100%] rounded-xl min-h-[140px] h-full text-xl">
        <p className="ml-4 mt-6 pt-2 font-semibold text-center">
          Rivansh Srivastava
        </p>
        <p className="w-[70%] text-sm  pt-6 pb-4 mx-auto font-thin text-justify ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veniam
          pariatur atque perferendis aut enim
        </p>
        <div className="flex justify-evenly w-full">
          <div className="flex flex-col items-center w-[10%]">
            <p className="font-semibold text-lg">1K</p>
            <p className="font-thin text-sm">Post</p>
          </div>
          <div className="flex flex-col items-center w-[10%]">
            <p className="font-semibold text-lg">1560</p>
            <p className="font-thin text-sm">Likes</p>
          </div>
        </div>
        <button className="w-1/3 mt-2 p-2 bg-pmpurple text-white rounded-xl shadow-2xl text-sm font-semibold ">
          View Profile
        </button>
      </div>
      <div className="bg-white w-[120px] rounded-full h-[120px] absolute -translate-y-1/2 top-[38%] -left-1 border-bgmain border-8 overflow-hidden">
        <img src={luffy} alt="" />
      </div>
    </div>
  );
}

export default RSideFeed;
