import React from "react";
import loginImg from "../../assets/Auth/signup.png";
import Template from "./Template";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-bgmain h-full">
      <Template
        title="Welcome Back"
        desc1="Connect to your friends, family and Celebs."
        desc2="Create content to future-proof your career."
        image={loginImg}
        formtype="login"
      />
    </div>
  );
};

export default Login;
