import React from "react";
import PostFeed from "./sub-Components/PostFeed";
import SideFeed from "./sub-Components/SideFeed";

function Home() {
  return (
    <div className="flex gap-4">
      <SideFeed />
      <PostFeed />
    </div>
  );
}

export default Home;
