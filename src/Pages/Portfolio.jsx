import React from "react";
import ProImg1 from "../Assets/proj1.png";
import ProImg2 from "../Assets/proj5.png";
import ProImg3 from "../Assets/proj3.png";
import ProImg4 from "../Assets/proj4.png";
import { AiFillChrome, AiFillGithub } from "react-icons/ai";

const Portfolio = () => {
  return (
    <div className=" pt-16 pb-10 sm:pt-16 lg:pb-16 h-[94vh]">
      <div className="  px-7 mx-auto grid gap-6 md:grid-cols-2">
        <div className=" mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
          <a
            href="https://velvety-tulumba-aad964.netlify.app"
            className=" group h-44 col-span-3 md:h-80"
          >
            <img
              src={ProImg1}
              alt=""
              className=" h-full w-full  object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg"
            />
          </a>
          <div className=" flex flex-col col-span-4 p-4 mx-auto my-auto">
            <h2 className=" text-gray-200 font-bold text-xl leading-10">
              Project #1
            </h2>
            <p className=" text-gray-400">
              We Build Our Templates For Speed In Mind, For Super-Fast Load
              Times So Your Customers never waver.
            </p>
          </div>
          <div className=" flex flex-row justify-between text-white gap-4 mx-auto pb-4">
            <a
              href="https://github.com/kalai-05/HairTheraphy"
              className=" flex flex-row justify-between text-white gap-4 mx-auto pb-4"
            >
              <AiFillGithub className=" w-[40px] h-auto cursor-pointer hover:scale-110 transition duration-200" />
            </a>
            <a
              href="https://velvety-tulumba-aad964.netlify.app"
              className=" flex flex-row justify-between text-white gap-4 mx-auto pb-4"
            >
              <AiFillChrome className=" w-[40px] h-auto cursor-pointer hover:scale-110 transition duration-200" />
            </a>
          </div>
        </div>

        <div className=" mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
          <a
            href="https://my-new-atdigital.netlify.app"
            className=" group h-44 col-span-3 md:h-80"
          >
            <img
              src={ProImg2}
              alt=""
              className=" h-full w-full  object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg"
            />
          </a>
          <div className=" flex flex-col col-span-4 p-4 mx-auto my-auto">
            <h2 className=" text-gray-200 font-bold text-xl leading-10">
              Project #2
            </h2>
            <p className=" text-gray-400">
              We Build Our Templates For Speed In Mind, For Super-Fast Load
              Times So Your Customers never waver.
            </p>
          </div>
          <div className=" flex flex-row justify-between text-white gap-4 mx-auto pb-4">
            <a
              href="https://github.com/kalai-05/AT_NEW"
              className=" flex flex-row justify-between text-white gap-4 mx-auto pb-4"
            >
              <AiFillGithub className=" w-[40px] h-auto cursor-pointer hover:scale-110 transition duration-200" />
            </a>
            <a
              href="https://my-new-atdigital.netlify.app"
              className=" flex flex-row justify-between text-white gap-4 mx-auto pb-4"
            >
              <AiFillChrome className=" w-[40px] h-auto cursor-pointer hover:scale-110 transition duration-200" />
            </a>
          </div>
        </div>
        <div className=" mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
          <a
            href="https://github.com/kalai-05/PCBOSS_Android_Application_FullStack"
            className=" group h-44 col-span-3 md:h-80"
          >
            <img
              src={ProImg3}
              alt=""
              className=" h-full w-full  object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg"
            />
          </a>
          <div className=" flex flex-col col-span-4 p-4 mx-auto my-auto">
            <h2 className=" text-gray-200 font-bold text-xl leading-10">
              Project #3
            </h2>
            <p className=" text-gray-400">
              We Build Our Templates For Speed In Mind, For Super-Fast Load
              Times So Your Customers never waver.
            </p>
          </div>
          <div className=" flex flex-row justify-between text-white gap-4 mx-auto pb-4">
            <a
              href="https://github.com/kalai-05/PCBOSS_Android_Application_FullStack"
              className=" flex flex-row justify-between text-white gap-4 mx-auto pb-4"
            >
              <AiFillGithub className=" w-[40px] h-auto cursor-pointer hover:scale-110 transition duration-200" />
            </a>
            <a
              href="https://github.com/kalai-05/PCBOSS_Android_Application_FullStack"
              className=" flex flex-row justify-between text-white gap-4 mx-auto pb-4"
            >
              <AiFillChrome className=" w-[40px] h-auto cursor-pointer hover:scale-110 transition duration-200" />
            </a>
          </div>
        </div>
        <div className=" mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
          <a
            href="https://github.com/kalai-05/Leavemanagement_React_FrontEnd"
            className=" group h-44 col-span-3 md:h-80"
          >
            <img
              src={ProImg4}
              alt=""
              className=" h-full w-full  object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg"
            />
          </a>
          <div className=" flex flex-col col-span-4 p-4 mx-auto my-auto">
            <h2 className=" text-gray-200 font-bold text-xl leading-10">
              Project #4
            </h2>
            <p className=" text-gray-400">
              We Build Our Templates For Speed In Mind, For Super-Fast Load
              Times So Your Customers never waver.
            </p>
          </div>
          <div className=" flex flex-row justify-between text-white gap-4 mx-auto pb-4">
            <a
              href="https://github.com/kalai-05/Leavemanagement_React_FrontEnd"
              className=" flex flex-row justify-between text-white gap-4 mx-auto pb-4"
            >
              <AiFillGithub className=" w-[40px] h-auto cursor-pointer hover:scale-110 transition duration-200" />
            </a>
            <a
              href="https://github.com/kalai-05/Leavemanagement_React_FrontEnd"
              className=" flex flex-row justify-between text-white gap-4 mx-auto pb-4"
            >
              <AiFillChrome className=" w-[40px] h-auto cursor-pointer hover:scale-110 transition duration-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
