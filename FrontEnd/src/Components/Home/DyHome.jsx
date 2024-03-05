import React from "react";
import PostFeed from "./sub-Components/PostFeed";
import RSideFeed from "./sub-Components/RSideFeed";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpdmFuc2g2M0BnbWFpbC5jb20iLCJ1c2VySWQiOiI2NWU2OTZhZjg0ODQ3MmEyZmVhODE4NGQiLCJpYXQiOjE3MDk2MzAxMTIsImV4cCI6MTcwOTYzNzMxMn0.h6lk5PvJaCnsZaTeGJRPn0FPlxp-NHlC3MndBsvqqlY";

  const result = await fetch("http://localhost:3000/api/users/posts", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = result.json();
  return data;
}

export default function DyHome() {
  let postData = useLoaderData();
  return (
    <>
      <PostFeed post={postData} />
      <RSideFeed />
    </>
  );
}
