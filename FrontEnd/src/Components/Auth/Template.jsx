import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import logo from "../../assets/Logo/logo.png"
import { FaTable } from 'react-icons/fa'

const Template = ({title, desc1, desc2, image, frame, formtype, setIsLoggedIn}) => {
    return (
        <div className='flex justify-between  max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 '>
    
            <div className='w-11/12 max-w-[450px] ' >
                <h1
                className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]' 
                >
                    {title}
                </h1>
    
                <p className='text-[1.125rem] leading[1.625rem] mt-4' >
                    <span className='text-richblack-100'>{desc1}</span>
                    <br/>
                    <span className='text-blue-100 italic'>{desc2}</span>
                </p>
    
                {formtype === "signup" ? 
                (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
                (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
    
                {/* <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                    <p className='text-richblack-700 font-medium leading[1.375rem]'>
                        OR
                    </p>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                </div>
    
                <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
                border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
                    <span>{
                        <img src = {logo}  height = {30} width={30}/>
                        }</span>
                    <p className='text-pmpurple'>Create An Account</p>
                </button> */}
    
            </div>
    
            <div className='relative w-11/12 max-w-[550px]'>
                <img src={frame}
                    alt="Frame"
                    width={500}
                    height={400}
                    loading="lazy"
                    className='absolute -top-4 right-4 rounded-full mt-10'
                />
                <img src={image}
                    alt="Sign Up"
                    width={500}
                    height={400}
                    loading="lazy"
                    className='absolute -top-4 right-4 rounded-full mt-10'
                    />    
            </div>
    
        </div>
      )
}

export default Template