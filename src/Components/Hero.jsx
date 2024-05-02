import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import leftImg from "../Assets/notebookL.png";
import centerImg from "../Assets/centerImg.png";
import profileImg from "../Assets/profilepicB.png";

const Hero = () => {
  return (
    <div className=" relative pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-18 overflow-hidden h-[92vh] ">
      <div className=" px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
        <div className=" max-w-xl mx-auto text-center">
          <h1 className=" text-4xl font-bold sm:text-6xl gray-primary-color">
            {" "}
            I'am A Frontend Developer
          </h1>
          <p className=" mt-5 text-base text-white sm:text-xl">
            Do You Need Help In Frontend Development ? Dont Hesitate To Contact
            Me!
          </p>

          <div>
            <a
              href="https://kalai.tiiny.site"
              className=" shadow-2xl bg-primary-color inline-flex items-center px-6 py-4 mt-8 mx-4 font-semibold text-white border rounded-lg transition-all duration-200 hover:scale-110"
              
            >
              Download CV
            </a>
            <a
              href="/portfolio"
              className=" inline-flex items-center px-6 py-4 mt-8 font-semibold text-white border rounded-lg transition-all duration-200 hover:scale-110 "
              
            >
              My Projects
            </a>
          </div>

          <div className=" flex flex-row justify-between text-white p-8 max-w-[500px] mx-auto">
            <a
              href="https://www.linkedin.com/in/kandasamy-kalaiyarasan-4b89131b3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4CxS%2F4%2FqR4eC7VRdC9z4xA%3D%3D"
              className=" transition-all duration-200 hover:scale-110 cursor-pointer"
            >
              <AiFillLinkedin className=" w-[70px] h-auto" />
            </a>
            <a
              href="https://github.com/kalai-05"
              className=" transition-all duration-200 hover:scale-110 cursor-pointer"
            >
              <AiFillGithub className=" w-[70px] h-auto" />
            </a>
            <a
              href="https://web.facebook.com/kandy.kandy.509"
              className=" transition-all duration-200 hover:scale-110 cursor-pointer"
            >
              <AiFillFacebook className=" w-[70px] h-auto" />
            </a>
          </div>
        </div>
      </div>

      <div className=" relative bottom-0 z-10 flex mx-auto justify-center">
        <img
          className=" left-[-20px] top-[-20px] sm:left-20 sm:top-[-200px] hidden lg:flex absolute block w-auto h-[150px] sm:h-[400px]"
          src={leftImg}
          alt=""
        />
        <img
          className=" absolute sm:relative w-auto bottom-[-110px] right-[-70px] hidden lg:flex  sm:bottom-0 sm:right-0 h-[100px] sm:h-[300px]"
          src={centerImg}
          alt=""
        />
        <img
          className=" lg:right-[-20px] top-[-20px] sm:right-20 sm:top-[-200px] absolute block w-auto h-[250px] sm:h-[400px] rounded-xl"
          src={profileImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
