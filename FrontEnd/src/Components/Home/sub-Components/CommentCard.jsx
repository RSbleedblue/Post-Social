import React, { useEffect, useState } from "react";
import ReplyCard from "./ReplyCard";
import PuffLoader from "react-spinners/PuffLoader";

function CommentCard({ comment }) {
  async function getReply() {
    setLoading((loading) => !loading);
    const replies = await fetch(
      `http://localhost:3002/api/users/posts/${comment._id}/getreply`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_JWTOKEN}`,
        },
      }
    );
    if (replies.ok) {
      const data = await replies.json();
      if (data.comment.length > 0) {
        setReply(data.comment);
      }
    }
    setLoading((loading) => !loading);
  }

  const [reply, setReply] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full z-10 bg-black bg-opacity-45 flex justify-center items-center">
          <PuffLoader color="#36d7b7" loading={loading} />
        </div>
      )}
      <div className="bg-pmpurple rounded-xl text-white">
        {/* Parent Comment */}
        <div className="flex gap-4 items-center p-4">
          <img
            src={comment.commenter.profileUrl}
            className="w-[12%] h-[12%] rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">{comment.commenter.name}</p>
            <p className="">{comment.text}</p>
          </div>
          <div className="ml-auto">
            <p className=" text-xs opacity-60">MAR 3, 2024</p>
            <button className="text-xs font-thin" onClick={getReply}>
              Reply
            </button>
          </div>
        </div>
        {/* Child Comment Block */}
        {reply && reply.map((rep) => <ReplyCard reply={rep} />)}
      </div>
    </>
  );
}

export default CommentCard;
