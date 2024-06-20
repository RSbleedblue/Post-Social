import React from "react";
import luffy from "../../assets/banner.jpg";
import prof_banner from "../../assets/profile_banner.jpeg";
import { FaRegUser } from "react-icons/fa";

function RSideFeed() {
  return (
    <div className="flex flex-col w-[25%] gap-2">
      <div className="flex flex-col h-[60%] w-full rounded-lg bg-overlayBlack items-center shadow-xl">
        <div className="h-[100px] w-full">
          <img src={prof_banner} className="w-full h-full object-cover rounded-t-lg opacity-50 z-10" />
        </div>
        <div className="flex flex-col w-full items-center justify-center -mt-10 z-50 shadow-xl text-white gap-3 ">
          <div className="w-24 h-24 rounded-full">
            <img src={luffy} className="w-full h-full rounded-full object-cover" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl">Rivansh</p>
            <p className="text-sm text-gray-500">@rsbleedBlue</p>
          </div>
          <p className="w-[70%] text-justify text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eveniet voluptate porro doloremque deleniti velit, corporis voluptatem consequatur. Unde, sapiente!</p>
          <hr className="w-full opacity-10"></hr>
          <div className="w-[60%] flex justify-between ">
            <div className="flex flex-col items-center justify-center">
              <p>16587</p>
              <p className="text-gray-500">Following</p>
            </div>
            <div className="h-full border border-solid border-gray-700">

            </div>
            <div className="flex flex-col items-center justify-center">
              <p>12 M</p>
              <p className="text-gray-500">Followers</p>
            </div>
          </div>
          <hr className="w-full opacity-10"></hr>
        </div>
        <p className="text-blue-500 mt-4 cursor-pointer">My Profile</p>
      </div>

      <div className="flex flex-col h-[40%] w-full rounded-lg bg-overlayBlack  shadow-xl text-white p-4">
        <p className="text-gray-200 font-bold">Who is to Follow You</p>
        <div className="flex p-4 items-start justify-between w-full gap-3">
            <div className="flex gap-2">
            <img src={luffy} className="w-12 h-12 rounded-full object-cover"/>
            <div className="flex flex-col">
              <p>
                Monkey D Luffy
              </p>
              <p className="text-xs text-gray-500">
                @monkeyDLuffy
              </p>
            </div>
            </div>
            <div className="bg-gray-200 rounded-full p-2  flex">
              <p className="text-overlayBlack text-xs"> Follow</p>
            </div>
        </div>
      </div>
    </div>

  );
}

export default RSideFeed;
