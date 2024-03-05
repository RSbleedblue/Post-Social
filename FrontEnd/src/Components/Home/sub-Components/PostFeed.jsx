import React from "react";
import PostCard from "./PostCard.jsx";
function PostFeed() {
  return (
    <div className="w-[50%]">
      <div className="flex rounded-xl  bg-white text-white flex-col">
        <div>
          <PostCard />
        </div>
      </div>
    </div>
  );
}

export default PostFeed;
