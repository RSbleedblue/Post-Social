import React from "react";

export async function loader() {
  try {
    // const token = import.meta.env.VITE_JWTOKEN;
    // const apiCall = await fetch("http://localhost:3000/api/users/getFriends", {
    //   method: "get",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    // if (apiCall.ok) {
    //   return await apiCall.json();
    // }
  } catch (err) {
    console.log(err);
    return err;
  }
}

function ChatBox() {
  return <div>chat</div>;
}

export default ChatBox;
