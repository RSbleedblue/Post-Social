import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaComments } from "react-icons/fa6";
import CommentCard from "./CommentCard";

function PostModal({ card, toggleModal }) {
  useEffect(() => {
    async function fetchComment() {
      const result = await fetch(
        `http://localhost:3000/api/users/posts/${card._id}/getcomment`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_JWTOKEN}`,
          },
        }
      );
      const data = await result.json();
      setComments(data.comments);
    }
    fetchComment();
  }, []);

  const [comments, setComments] = useState(null);

  return (
    <div>
      {comments && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black flex justify-center items-center gap-4 px-10 bg-opacity-70">
          <IoMdClose
            className="text-white text-3xl absolute top-10 right-10"
            onClick={toggleModal}
          />
          <div className="relative w-[40%] rounded-lg">
            <div className="w-full bg-black bg-opacity-50 flex items-center rounded-lg mb-2">
              <img
                className="w-[8%] h-[8%] rounded-full opacity-100 m-4"
                src={card.profileUrl}
              />
              <div className="flex flex-col">
                <p className="text-white font-semibold text-2xl">
                  {card.userName}
                </p>
                <p className="text-white opacity-90 font-semibold">
                  {card.caption}
                </p>
              </div>
            </div>
            <img src={card.imgUrl} className="rounded-lg" />
          </div>
          <div className=" w-[30%] h-2/3 flex flex-col gap-2 overflow-y-scroll">
            {/* COMMENT BLOCK */}
            {comments?.map((comment) => (
              <CommentCard comment={comment} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PostModal;
