import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="flex gap-4">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;
