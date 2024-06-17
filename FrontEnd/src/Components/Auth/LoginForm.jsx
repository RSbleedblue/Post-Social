import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useState } from "react";
import logo from "../../assets/Logo/logo.png"
import { useAuth } from './AuthContext';


const LoginForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "", password: ""
    })
    const { login } = useAuth();

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))

    }
    const submitHandler = async (event) => {
        const base_url = import.meta.env.VITE_BASE_URL
        event.preventDefault();
        try{
            const res = await fetch(`${base_url}/api/users/login`,{
                method: 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify(formData),
            }); 
            if(!res.ok){
                throw new Error("Network response was not ok!");
            }
            const data = await res.json();
            console.log(data);
            const { token } = data.result;
            console.log(token);
            if(token){
                login(token);
                toast.success("Logged In");
                navigate("/");
            }
            else{
                throw new Error("Toke not found");
            }
        }
        catch(error){
            console.error("There was an error!", error);
            toast.error("Login failed");
        }
    }
    function handleCreateAccount(event) {
        event.preventDefault();
        console.log("Hitting");
        navigate("/signup");
    }

    return (
        <form onSubmit={submitHandler}
            className="flex flex-col w-full gap-y-4 mt-6">

            <label className='w-full'>
                <p className='text-[0.875rem] text-pmpurple mb-1 leading-[1.375rem]'>
                    Email Address<sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter email address"
                    name="email"
                    className='bg-random text-pmpurple rounded-[0.5rem]  w-full p-[12px]'
                />
            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-pmpurple mb-1 leading-[1.375rem]'>
                    Password<sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    name="password"
                    className='bg-random text-pmpurple rounded-[0.5rem]  w-full p-[12px]'
                />

                <span
                    className='absolute right-3 top-[38px] cursor-pointer text-richblack-900'
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ?

                        (<AiOutlineEyeInvisible fontSize={24} fill='#000' />) :

                        (<AiOutlineEye fontSize={24} fill='#000' />)}
                </span>

                <Link to="#">
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                        Forgot Password
                    </p>
                </Link>
            </label>

            <button className='bg-pmpurple text-secwhite rounded-[8px] font-medium px-[12px] py-[8px] mt-6'>
                Sign In
            </button>

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem]'>
                    OR
                </p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>

            <div className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
                border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 hover: cursor-pointer hover:scale-105' onClick={handleCreateAccount}>
                <span>{
                    <img src={logo} height={30} width={30} />
                }</span>
                <p className='text-pmpurple'>Create An Account</p>
            </div>

        </form>
    )
}

export default LoginForm