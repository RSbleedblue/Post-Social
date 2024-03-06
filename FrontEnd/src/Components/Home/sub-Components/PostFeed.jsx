import React, { useState } from "react";
import PostCard from "./PostCard.jsx";
function PostFeed({ post }) {
  const [postData, setPostData] = useState(post);
  return (
    <div className="w-[50%] h-full no-scrollbar overflow-y-scroll">
        <div className=" -mt-3 w-[100%]">
          {postData.map((item, index) => (
            <PostCard key={index} cardData={item} />
          ))}
        </div>
      </div>
  );
}

export default PostFeed;
