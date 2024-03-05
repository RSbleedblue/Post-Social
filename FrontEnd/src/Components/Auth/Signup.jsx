import React from 'react'
import signup from "../../assets/Auth/signup.png"
import Template from './Template'
import login_img from "../../assets/Logo/naruto.png";
import mountain_img from "../../assets/Logo/mountain.jpg"

const Signup = ({setIsLoggedIn}) => {
    return (
        <Template
          title="Join the millions creating content with Instahub"
          desc1="create content for today, tomorrow, and beyond."
          desc2="Content Creation to future-proof your career."
          image={login_img}
          frame={mountain_img}
          formtype="signup"
          setIsLoggedIn={setIsLoggedIn}
        />
      )
}

export default Signup       