import React from 'react';
import logo from '../../../assets/Logo/SlackPic.png';
import testPhoto from '../../../assets/Logo/Test1.jpg';
import { BsThreeDots } from 'react-icons/bs';
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

export default function PostCard() {
  return (
    <>
      <div className='flex flex-row gap-4 items-center'>
        <img src={logo} alt='Image' className='rounded-full h-16' />
        <span className='text-pmpurple text-2xl font-semibold'>Rivansh Srivastava</span>
        <BsThreeDots className='text-pmpurple ml-auto text-2xl cursor-pointer' />
      </div>
      <p className='p-4 text-l text-pmpurple opacity-90'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, fugit! Maxime esse accusamus quia laudantium placeat corrupti pariatur, magnam eligendi.</p>
      <div className='text-xl flex '>
        <div className='max-w-screen-lg mx-auto'>
          <img src={testPhoto} className='rounded-lg w-full max-h-[300px] max-w-[600px]' alt='Test Photo' />
        </div>
      </div>
      <div className='flex p-4 m-4 flex-row '>
            <FaHeart className='text-pmpurple text-2xl hover:text-hoverLike mb-2 cursor-pointer'/>
            <span className='text-pmpurple mr-10 ml-2'>10k</span>
            <FaCommentAlt className='text-pmpurple text-2xl hover:text-hoverLike cursor-pointer'/>
            <span className='text-pmpurple mr-10 ml-2'>2256</span>
            <FaShareAlt className='text-pmpurple text-2xl cursor-pointer'/>
        </div>
    </>
  );
}
