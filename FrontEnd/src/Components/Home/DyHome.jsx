import React from 'react'
import PostFeed from './sub-Components/PostFeed'
import RSideFeed from './sub-Components/RSideFeed'
import { useLoaderData } from 'react-router-dom';

export async function loader(){
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpdmFuc2g2M0BnbWFpbC5jb20iLCJ1c2VySWQiOiI2NWU2OTZhZjg0ODQ3MmEyZmVhODE4NGQiLCJpYXQiOjE3MDk2Mzg0MDAsImV4cCI6MTcwOTY0NTYwMH0.zP2chzbpksLfLf_ZSvffKbkuG8bflOp0kpm4fxoi7nk";
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
        <RSideFeed />
    </>
  )
}
