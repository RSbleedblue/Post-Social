import React from "react";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div className="flex gap-4 h-full bg-mainBackground">
      <Outlet />
    </div>
  );
}

export default HomeLayout;
