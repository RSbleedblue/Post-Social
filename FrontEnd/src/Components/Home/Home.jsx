import React from "react";
import SideFeed from "./sub-Components/SideFeed";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="flex gap-4 pt-10 h-full">
      <SideFeed />
      <Outlet />
    </div>
  );
}

export default Home;
