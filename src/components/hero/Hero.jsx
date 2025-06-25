import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import cvphoto from "/public/static/images/cvphoto.jpg"

const Hero = () => {
  return (
    <div id="home" className="bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px] flex sm:flex-col-reverse sm:pt-0">
        <div className="left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className="text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm Büşra Doyran
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Software Engineer",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-purple-600 text-4xl font-bold sm:text-3xl"
            />
            <p className="text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]">
              I'm a curious and motivated developer with a strong interest in machine learning, deep learning, and data science. While I've built full-stack web applications, my passion lies in working with data — uncovering patterns, building intelligent systems, and solving real-world problems with algorithms. I especially enjoy working on projects involving web mining, recommendation systems, and computer vision. I'm eager to continue growing in the field of ML and contribute to impactful, data-driven technologies.
            </p>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className="flex gap-5"
            >
              <li>
                <a href="https://www.github.com/busradoyran" target="_blank">
                  <AiFillGithub className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 hover:text-purple-600 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/b%C3%BC%C5%9Fra-doyran-831825226/"
                  target="_blank"
                >
                  <FaLinkedinIn className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 hover:text-purple-600 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:busradoyran@gmail.com"
                  target="_top"
                >
                  <SiGmail className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 hover:text-purple-600 transition-all" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-1/2 w-1/2 flex items-center sm:items-end rounded-full">
            <img
              className="h-full w-full object-fit md:m-auto sm:m-0 rounded-full"
              src={cvphoto}
              alt="mine"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
