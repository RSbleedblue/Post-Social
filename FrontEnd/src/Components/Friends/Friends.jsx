import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  try {
    const token = import.meta.env.VITE_JWTOKEN;
    const apiCall = await fetch("http://localhost:3002/api/users/getFriends", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (apiCall.ok) {
      return await apiCall.json();
    }
  } catch (err) {
    console.log(err);
    return err;
  }
}



function FriendsList() {
  const [forceUpdate,setForceUpdate] = useState(false)
  const friends = useLoaderData().friends;


  async function updateFriend(friendID) {
    const token = import.meta.env.VITE_JWTOKEN;
    const result = await fetch(
      `http://localhost:3002/api/users/${friendID}/updatefriend`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if(result.ok) setForceUpdate(forceUpdate => !forceUpdate)
  }

  return (
    <div className="flex-grow">
      {friends.map((friend) => (
        <div className="w-full h-28 flex items-center gap-10">
          <img src={friend.profileUrl} className="w-16 h-16 rounded-full" />
          <p>{friend.name}</p>
          <button onClick={() => updateFriend(friend._id)}>Unfriend</button>
        </div>
      ))}
    </div>
  );
}

export default FriendsList;
