import React from "react";
import PostFeed from "../Components/posts/PostFeed";
import RSideFeed from "../Components/Home/RSideFeed";
import { useLoaderData } from "react-router-dom";
import TrendingFeed from "../Components/Home/TrendingFeed";

export async function loader() {
  try {
    const token = import.meta.env.VITE_JWTOKEN;
    const base_url = import.meta.env.VITE_BASE_URL
    const apiCall = await fetch(`${base_url}/api/users/posts`, {
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
export default function Home() {
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
