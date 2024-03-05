import React, { useState } from "react";
import PostCard from "./PostCard.jsx";
function PostFeed({ post }) {
  const [postData, setPostData] = useState(post);

  return (
    <div className="w-[50%] h-full no-scrollbar overflow-y-scroll">
      <div className="p-2 flex rounded-xl min-w-[320px] bg-white text-white flex-col">
        <div className="p-4 m-2 w-[100%]">
          {postData.map((item, index) => (
            <PostCard key={index} cardData={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostFeed;
