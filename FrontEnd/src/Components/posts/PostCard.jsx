import React, { useState } from "react";
import { MdOutlinePersonAdd } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart, FaRegCommentAlt, FaHeart, FaShareAlt, FaComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaRegShareFromSquare } from "react-icons/fa6";
import PostModal from "./PostModal";
import { useAuth } from "../Auth/AuthContext";

export default function PostCard({ cardData }) {
  const { token } = useAuth();

  const [liked, setLiked] = useState(cardData.didUserLiked);
  const [totalLike, setTotalLike] = useState(cardData.totallikes);
  const [toggleModal, setToggleModal] = useState(false);
  const [friend, setFriend] = useState(cardData.isCurUserFriend);

  function modalToggle() {
    setToggleModal((toggleModal) => !toggleModal);
  }

  async function updateFriend() {
    const base_url = import.meta.env.VITE_BASE_URL
    try {
      const result = await fetch(
        `${base_url}/api/users/${cardData.user}/updatefriend`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (result.ok) {
        setFriend((friend) => !friend);
      }
    } catch (error) {
      console.error("Error updating friend:", error);
    }
  }

  async function likePost() {
    const base_url = import.meta.env.VITE_BASE_URL
    try {
      const result = await fetch(
        `${base_url}/api/users/posts/${cardData._id}/updatelike`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (result.ok) {
        setLiked((liked) => !liked);
        setTotalLike((totalLike) => {
          if (liked) return totalLike - 1;
          else return totalLike + 1;
        });
      }
    } catch (error) {
      console.error("Error liking post:", error);
    }
  }

  return (
    <>
      <div className="bg-overlayBlack p-4 rounded-xl w-full flex gap-2">
        <div className="rounded-full overflow-hidden w-10 h-10">
          <img
            src={cardData.profileUrl}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full flex gap-2 items-center justify-between">
            <div>
              <div className="flex gap-4 items-center w-full">
                <span className="text-white text-xl font-semibold">
                  {cardData.userName?.charAt(0).toUpperCase() + cardData.userName?.slice(1)}
                </span>
                <p className="text-gray-400 text-xs">@userTag</p>
              </div>
              {!cardData.isCurUserPost && !friend && (
                <div
                  className="flex items-center gap-2 border-[1px] p-1 rounded-lg border-slate-500 text-[11px] border-opacity-30 cursor-pointer hover:bg-gray-100 transition-all w-[60%] mt-2 hover:text-black"
                  onClick={updateFriend}
                >
                  <MdOutlinePersonAdd className="text-slate-400" />
                  <p className="text-slate-400">Add Friend</p>
                </div>
              )}
            </div>
            <BsThreeDots className="text-white text-sm cursor-pointer" />
          </div>
          {/* Post Data */}
          <div className="flex flex-col mt-4 gap-2">
            <p className="text-sm text-white">{cardData.title}</p>
            <div className="w-full flex justify-center">
              <div className="w-full max-w-screen-lg h-[300px] rounded-lg overflow-hidden">
                <img
                  onClick={modalToggle}
                  src={cardData.imgUrl}
                  className="w-full h-full object-cover"
                  alt="Post"
                />
              </div>
            </div>
            {/* Like Info */}
            <div className="flex gap-1 mt-2 items-center">
              <div className="rounded-full p-2 flex items-center bg-hazedBlack">
                <FaHeart className="text-white text-xs" />
              </div>
              <div className="rounded-full p-2 flex items-center bg-hazedBlack">
                <FaShareAlt className="text-white text-xs" />
              </div>
              <div className="rounded-full p-2 flex items-center bg-hazedBlack">
                <FaComment className="text-white text-xs" />
              </div>
              {/* Calculate total Data */}
              <div className="w-full justify-between flex">
                <p className="text-sm ml-2 text-white">{totalLike}</p>
                <p className="text-sm ml-2 text-white">Comments</p>
              </div>
            </div>
            <div className="flex p-2 m-2 justify-between items-center w-full">
              <div className="flex gap-2 items-center bg-hazedBlack cursor-pointer rounded-lg p-2 w-[30%] justify-center hover:bg-mainBackground transition-all hover:text-gray-300 text-white">
                {!liked && (
                  <FaHeart
                    className="text-lg cursor-pointer"
                    onClick={likePost}
                  />
                )}
                {liked && (
                  <FaHeart
                    className="text-lg cursor-pointer"
                    onClick={likePost}
                  />
                )}
                <span className="text-xs font-semibold">Like</span>
              </div>
              <div className="flex gap-2 items-center bg-hazedBlack rounded-lg p-2 w-[30%] justify-center cursor-pointer hover:bg-mainBackground transition-all hover:text-gray-300 text-white">
                <FaRegCommentAlt className="text-lg cursor-pointer" />
                <span className="text-xs font-semibold">Comment</span>
              </div>
              <div className="flex gap-2 items-center bg-hazedBlack rounded-lg p-2 w-[30%] justify-center cursor-pointer hover:bg-mainBackground transition-all hover:text-gray-300 text-white">
                <FaRegShareFromSquare className="text-lg cursor-pointer" />
                <span className="text-xs font-semibold">Share</span>
              </div>
            </div>
            <div className="flex mb-4 flex-row gap-2 items-center rounded-lg p-2 bg-hazedBlack text-white">
              <p className="font-semibold">{cardData.userName}</p>
              <p className="text-white text-xs">{cardData.caption}</p>
            </div>
          </div>
        </div>
      </div>
      {toggleModal && <PostModal card={cardData} toggleModal={modalToggle} />}
    </>
  );
}
