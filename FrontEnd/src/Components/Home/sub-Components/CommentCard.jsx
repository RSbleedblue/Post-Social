import React, { useEffect, useState } from "react";
import ReplyCard from "./ReplyCard";

function CommentCard({ comment }) {
  async function getReply() {
    const replies = await fetch(
      `http://localhost:3000/api/users/posts/${comment._id}/getreply`,
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
    console.log(reply);
  }

  const [reply, setReply] = useState(null);

  return (
    <>
      <div className="bg-pmpurple rounded-xl text-white">
        <div className="flex gap-4 items-center p-4">
          <img
            src={comment.commenter.profileUrl}
            className="w-[12%] h-[12%] rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">{comment.commenter.name}</p>
            {/* Parent Comment */}
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
