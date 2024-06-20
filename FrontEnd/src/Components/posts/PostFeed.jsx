import React, { useState } from "react";
import PostCard from "./PostCard.jsx";
import { FaPhotoFilm } from "react-icons/fa6";
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaArrowLeft, FaPlayCircle, FaVideo } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
function PostFeed({ post }) {
  const [postData, setPostData] = useState(post);
  return (
    <div className="w-[50%] h-full no-scrollbar overflow-y-scroll flex flex-col gap-3">
      {/* User can Post */}
    <div className="w-full bg-overlayBlack rounded-xl p-4 flex gap-4"> 
        <div className="rounded-full overflow-hidden w-14 h-14">
              <img
                src="http://res.cloudinary.com/dxquzx2ep/image/upload/v1709703432/jqamytkykkgpfpwbzxjj.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
        </div>
        <div className="flex flex-col w-full  gap-2">
          <div className="w-full rounded-lg bg-hazedBlack p-3 flex items-center justify-center">
            <input className="w-full bg-transparent focus:outline-none text-white" placeholder="Whats Happening?"></input>
            <IoIosSend className="text-white"/>
          </div>
          {/* Upload Options */}
          <div className="w-full flex gap-4">
              <div className="rounded-full border border-gray-300 border-opacity-10 flex gap-2 p-2 w-[20%] justify-center items-center text-sm text-white">
                <MdAddPhotoAlternate className="text-xl text-emerald-600"/>
                <p>Photo</p>
              </div>
              <div className="rounded-full border border-gray-300 border-opacity-10 flex gap-2 p-2 w-[20%] justify-center items-center text-sm text-white">
                <FaPlayCircle className="text-xl text-blue-500"/>
                <p>Video</p>
              </div>
          </div>
        </div>
      <div>

      </div>
    </div>
        {postData?.map((item, index) => (
          <PostCard key={index} cardData={item} />
        ))}
      </div>
  );
}

export default PostFeed;
