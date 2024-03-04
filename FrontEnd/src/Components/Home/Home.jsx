import React from "react";
import PostFeed from "./sub-Components/PostFeed";
import SideFeed from "./sub-Components/SideFeed";
import RSideFeed from "./sub-Components/RSideFeed";

function Home() {
  return (
    <div className="flex gap-4 py-10">
      <SideFeed />
      <PostFeed />
      <RSideFeed />
    </div>
  );
}

export default Home;
