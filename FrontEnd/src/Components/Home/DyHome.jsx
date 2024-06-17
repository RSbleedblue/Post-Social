import React from "react";
import PostFeed from "./sub-Components/PostFeed";
import RSideFeed from "./sub-Components/RSideFeed";
import { useLoaderData } from "react-router-dom";
import TrendingFeed from "./sub-Components/TrendingFeed";

export async function loader() {
  try {
    const token = import.meta.env.VITE_JWTOKEN;
    const apiCall = await fetch("http://localhost:3002/api/users/posts", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await apiCall.json();
  } catch (error) {
    console.log(error);
  }
}
export default function DyHome() {
  const data = useLoaderData();
  return (
    <>
      <div className="flex w-full gap-2 justify-between">
        <TrendingFeed/>
        <PostFeed post={data} />
        <RSideFeed />
      </div>
    </>
  );
}
