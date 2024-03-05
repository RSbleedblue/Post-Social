import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="flex gap-4 h-full">
      <Navbar />
      <div className="flex-1 p-2 pr-4 h-full">
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;
