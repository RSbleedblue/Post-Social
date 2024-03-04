import React from "react";
import luffy from "../../../assets/banner.jpg";

function RSideFeed() {
  return (
    <div className="rounded-lg text-black h-[285px] flex-1 flex flex-col pl-6 justify-between relative">
      <div className="bg-pmpurple w-full rounded-xl h-[140px] relative "></div>
      <div className="bg-white w-[95%] rounded-xl h-[140px] pl-32 text-xl">
        Rivansh Srivastava
      </div>
      <div className="bg-white w-[160px] rounded-full h-[160px] absolute -translate-y-1/2 top-1/2 -left-4 border-bgmain border-8 overflow-hidden">
        <img src={luffy} alt="" />
      </div>
    </div>
  );
}

export default RSideFeed;
