import React from "react";
import aboutImg from "../Assets/mobileR.png";
import HTML from "../Assets/html.png";
import JAVA from "../Assets/javascript.png";
import REACTImg from "../Assets/react.png";
import TAILWIND from "../Assets/tailwind.png";
import SQL from "../Assets/sql.png";
import NODE from "../Assets/node.png";
import SPRING from "../Assets/spring.png";
import MONGO from "../Assets/mongo.png";

const About = () => {
  return (
    <div className=" pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16">
      <div className=" py-16 mb-6 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16 relative bg-black/40 max-w-[1300px] mx-auto rounded-xl">
        <div className=" p-7 mx-auto">
          <div>
            <h2 className=" text-3xl font-bold leading-tight gray-primary-color sm:text-4xl lg:text-5xl">
              Hello , I am <span className=" italic">Kalai</span>
            </h2>
            <p className=" max-w-lg mt-3 text-xl leading-relaxed text-gray-400 md:mt-8 ">
              I'm Kalai, a dedicated frontend development enthusiast based in
              jaffna. Ever since I can remember, I've been captivated by the
              world of frontend development, constantly seeking new ways to
              innovate and create.
            </p>
          </div>
          <img
            className=" flex md:absolute mx-auto bottom-[-40%] right-[20%] w-[240px] md:w-[300px] h-auto "
            src={aboutImg}
            alt=""
          />
        </div>
      </div>

      <div className=" bg-black/40 max-w-[1300px] mx-auto rounded-xl overflow-hidden">
        <div className=" px-6 py-10">
          <div className=" mx-auto max-w-5xl text-center">
            <h2 className=" block w-full gray-primary-color text-3xl sm:text-4xl">
              I Know Some Of The Technology's
            </h2>
            <p className=" mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
              Redesign Your Website
            </p>
          </div>

          <div className=" mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-10 sm:grid-cols-2 lg:grid-cols-2">
            <div className=" rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <h3 className=" text-xl italic text-gray-200">
                FrontEnd Developing
              </h3>
              <p className=" flex flex-col lg:flex lg:flex-row  md:flex md:flex-row items-center my-4 mb-0 font-normal text-gray-400  ">
                <img
                  src={REACTImg}
                  alt=""
                  className=" h-auto w-28 lg:w-28 md:w-[50px] m-3 "
                />
                <img
                  src={TAILWIND}
                  alt=""
                  className=" h-auto w-28 lg:w-28 md:w-[50px] m-3"
                />
                <img
                  src={HTML}
                  alt=""
                  className=" h-auto w-28 lg:w-28 md:w-[50px] m-3"
                />
                <img
                  src={JAVA}
                  alt=""
                  className=" h-auto w-28 lg:w-28 md:w-[50px] m-3"
                />
              </p>
            </div>
            <div className=" rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <h3 className=" text-xl italic text-gray-200">
                BackEnd Developing
              </h3>
              <p className=" flex flex-col lg:flex lg:flex-row  md:flex md:flex-row items-center my-4 mb-0 font-normal text-gray-400  ">
                <img
                  src={NODE}
                  alt=""
                  className=" h-auto w-28 lg:w-28 md:w-[50px] m-3 "
                />
                <img
                  src={SPRING}
                  alt=""
                  className=" h-auto w-28 lg:w-28 md:w-[50px] m-3"
                />
                <img
                  src={SQL}
                  alt=""
                  className=" h-auto w-28 lg:w-28 md:w-[50px] m-3"
                />
                <img
                  src={MONGO}
                  alt=""
                  className=" h-auto w-28 lg:w-28 md:w-[50px] m-3"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
