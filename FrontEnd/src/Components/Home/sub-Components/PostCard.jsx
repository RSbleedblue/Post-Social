import React, { useState } from "react";
import logo from "../../../assets/banner.jpg";
import testPhoto from "../../../assets/Logo/Test1.jpg";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaRegShareFromSquare } from "react-icons/fa6";
import PostModal from "./PostModal";

export default function PostCard({ cardData }) {
  function modalToggle() {
    setToggleModal((toggleModal) => !toggleModal);
    console.log("asoidjsao");
  }

  async function likePost(e) {
    const token = import.meta.env.VITE_JWTOKEN;
    const result = await fetch(
      `http://localhost:3000/api/users/posts/${cardData._id}/updatelike`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (result.ok) {
      setLiked((liked) => !liked);
      setTotalLike((totalLike) => {
        if (liked) totalLike -= 1;
        else totalLike += 1;
        return totalLike;
      });
    }
  }

  const [liked, setLiked] = useState(cardData.didUserLiked);
  const [totalLike, setTotalLike] = useState(cardData.totallikes);
  const [toggleModal, setToggleModal] = useState(false);
  console.log(toggleModal);
  return (
    <>
      <div className="bg-white p-4 m-4 rounded-lg">
        <div className="flex flex-row gap-4 items-center border-gray-300 border-b-2 px-2  py-2">
          <div className="rounded-full overflow-hidden max-h-[50px] max-w-[50px]">
            <img
              src={cardData.profileUrl}
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-pmpurple text-2xl font-semibold">
            {cardData.userName?.charAt(0).toUpperCase() +
              cardData.userName?.slice(1)}
          </span>
          <BsThreeDots className="text-pmpurple ml-auto text-2xl cursor-pointer" />
        </div>
        <p className="p-3 text-l text-pmpurple opacity-90">{cardData.title}</p>
        <div className="text-xl flex w-[100%] justify-center">
          <div className="max-w-screen-lg mx-auto rounded-lg overflow-hidden">
            <img
              onClick={modalToggle}
              src={cardData.imgUrl}
              className="w-full h-full object-cover"
              alt="Test Photo"
            />
          </div>
        </div>
        <div className="flex p-2 m-2 flex-row ">
          {!liked && (
            <FaRegHeart
              className="text-pmpurple text-2xl hover:text-hoverLike mb-2 cursor-pointer"
              onClick={likePost}
            />
          )}
          {liked && (
            <FcLike
              className="text-pmpurple text-2xl hover:text-hoverLike mb-2 cursor-pointer"
              onClick={likePost}
            />
          )}
          <span className="text-pmpurple mr-10 ml-2">{totalLike}</span>
          <FaRegCommentAlt className="text-pmpurple text-2xl hover:text-hoverLike cursor-pointer" />
          <span className="text-pmpurple mr-10 ml-2">2256</span>
          <FaRegShareFromSquare className="text-pmpurple text-2xl hover:text-hoverLike cursor-pointer" />
        </div>
        <div className="flex mb-4 flex-row gap-1 items-center">
          <span className="text-pmpurple ">{cardData.caption}</span>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <div className="rounded-full overflow-hidden max-h-[30px] max-w-[30px]">
            <img
              src={cardData.profileUrl}
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-pmpurple text-xs opacity-50">
            Add Comment....
          </span>
        </div>
      </div>
      {toggleModal && <PostModal card={cardData} toggleModal={modalToggle} />}
    </>
  );
}
