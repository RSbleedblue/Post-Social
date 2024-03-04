import React from "react";
import PostCard from "./PostCard.jsx";
function PostFeed() {
  return (
  <div className="w-[50%]">
      <div className="p-2 flex rounded-xl min-w-[320px] bg-white text-white flex-col">
        <div className="p-4 m-2 w-[100%]">
          <PostCard/>
        </div>
      </div>
    </div>
  );
}

export default PostFeed;
