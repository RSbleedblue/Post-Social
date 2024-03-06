import React from 'react'
import PostFeed from './sub-Components/PostFeed'
import RSideFeed from './sub-Components/RSideFeed'
import { useLoaderData } from 'react-router-dom';

export async function loader(){
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByYXRpazEyM0BnbWFpbC5jb20iLCJ1c2VySWQiOiI2NWU4MGQwYTU2ZmFiYzI2M2ExN2UwMWUiLCJpYXQiOjE3MDk3MDY1MjIsImV4cCI6MTcwOTcxMzcyMn0.CX7kEUNRmALV7DAENidvA9Fr9K3SE2xynRzytpyKMco";
     const apiCall = await fetch("http://localhost:3000/api/users/posts",
                    {method:'get',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                // console.log(await apiCall.json());
     return  await apiCall.json(); 
}
export default function DyHome() { 
   const data =  useLoaderData();
  return (
    <>
        <PostFeed post = {data}/>
        <RSideFeed post = {data}/>
    </>
  )
}
