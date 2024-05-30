import React from "react";

function ReplyCard({ reply }) {
  console.log("LOGGING", reply);
  return (
    <div className="w-full flex flex-col pl-20">
      <div className="ml-4 bg-white rounded-3xl p-2 w-[70%] flex items-center gap-2 mb-2">
        <img
          src={reply?.commenter?.profileUrl}
          className="h-[10%] w-[10%] rounded-full"
        />
        <span className="text-pmpurple font-semibold text-sm">
          {reply?.commenter?.name}
        </span>
        <span className="text-black text-xs">{reply.text}</span>
      </div>
    </div>
  );
}

export default ReplyCard;
