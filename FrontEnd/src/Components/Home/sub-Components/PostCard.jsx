import React from "react";
import logo from "../../../assets/banner.jpg";
import testPhoto from "../../../assets/Logo/Test1.jpg";
import { BsThreeDots } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

export default function PostCard() {
  return (
    <>
      <div className="flex flex-row gap-4 items-center">
        <div className="rounded-full overflow-hidden max-h-[50px] max-w-[50px]">
          <img src={logo} alt="Image" className="w-full h-full object-cover" />
        </div>
        <span className="text-pmpurple text-2xl font-semibold">
          Rivansh Srivastava
        </span>
        <BsThreeDots className="text-pmpurple ml-auto text-2xl cursor-pointer" />
      </div>
      <p className="p-3 text-l text-pmpurple opacity-90">
        Lorem, ipsum 
      </p>
      <div className="text-xl flex w-full justify-center">
        <div className="max-w-screen-lg mx-auto rounded-lg overflow-hidden">
          <img
            src={testPhoto}
            className="w-full h-full object-cover"
            alt="Test Photo"
          />
        </div>
      </div>
      <div className="flex p-2 m-2 flex-row ">
        <FaHeart className="text-pmpurple text-2xl hover:text-hoverLike mb-2 cursor-pointer" />
        <span className="text-pmpurple mr-10 ml-2">10k</span>
        <FaCommentAlt className="text-pmpurple text-2xl hover:text-hoverLike cursor-pointer" />
        <span className="text-pmpurple mr-10 ml-2">2256</span>
        <FaShareAlt className="text-pmpurple text-2xl cursor-pointer" />
      </div>
      <div className="flex p-2 m-2 flex-row gap-1 items-center">
        <span className="text-pmpurple "> Description : Lorem ipsum dolor sit amet consectetur</span>
      </div>
      <div className="flex flex-row gap-1 items-center">
        <div className="rounded-full overflow-hidden max-h-[30px] max-w-[30px]">
          <img src={logo} alt="Image" className="w-full h-full object-cover" />
        </div>
        <span className="text-pmpurple text-xs opacity-50">
          Add Comment....
        </span>
      </div>
    </>
  );
}
