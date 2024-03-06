import React from "react";
import PostFeed from "./sub-Components/PostFeed";
import RSideFeed from "./sub-Components/RSideFeed";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByYXRpa0BnbWFpbC5jb20iLCJ1c2VySWQiOiI2NWU3ZmZiMTZkN2ZlNjg4YmY5MTBjNjAiLCJpYXQiOjE3MDk3MjUzODAsImV4cCI6MTcwOTczMjU4MH0.Y9eWcSOfm743CKzXeQFYq4alPnqZ5-p-SPcU3uofil8";
  const apiCall = await fetch("http://localhost:3000/api/users/posts", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(await apiCall.json());
  return await apiCall.json();
}
export default function DyHome() {
  const data = useLoaderData();
  return (
    <>
      <PostFeed post={data} />
      <RSideFeed post={data} />
    </>
  );
}
