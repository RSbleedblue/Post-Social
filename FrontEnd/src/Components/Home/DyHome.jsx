import React from "react";
import PostFeed from "./sub-Components/PostFeed";
import RSideFeed from "./sub-Components/RSideFeed";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  try {
    const token = import.meta.env.VITE_JWTOKEN;
    const apiCall = await fetch("http://localhost:3000/api/users/posts", {
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
      <PostFeed post={data} />
      <RSideFeed />
    </>
  );
}
