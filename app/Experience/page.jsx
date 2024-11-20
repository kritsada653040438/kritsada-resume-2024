"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsGithub } from "react-icons/bs";

import WorkSliderBtns from "@/components/WorkSlideBtns";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Image from "next/image";
import Link from "next/link";

const projrects = [
  {
    num: "01",
    title: "game 2D Developer",
    desc: "This is my first project in the Advanced Computer course, where I took on the responsibility of designing the game's map and developing the movement mechanics for the main character.",
    stack: [{ name: "Unity" }, { name: "C#" },],
    img: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/kritsada653040438/Unity-pro.git",
  },
  {
    num: "02",
    title: "Learning full-stack programming",
    desc: "This Web Application Development course allowed me to take on the dual responsibility of Frontend development (UI), and Backend development (database system).",
    stack: [{ name: "Html" }, { name: "CSS" }, { name: "Javascript" }, { name: "MongoDB" }, { name: "React" }, { name: "Node.js" }],
    img: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/kritsada653040438/Kritsada-4386-webapp-labs.git",
  },
  {
    num: "03",
    title: "random food Web Developer",
    desc: "In this Web Application Development course project, I was responsible for the Frontend development of the entire website, co-developing the Backend, and collaborating on UX/UI design",
    stack: [{ name: "Html" }, { name: "CSS" }, { name: "Javascript" }, { name: "Next.js"} , { name: "MongoDB" }],
    img: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/kritsada653040438/Webapp-Project-DishXDash.git",
  },
  {
    num: "04",
    title: "Learning Assembly Programming Language",
    desc: "This is my first experience learning Assembly language, using Linux (Ubuntu) as the operating system and compiling code with YASM.",
    stack: [{ name: "Assembly" }, { name: " Linux (Ubuntu)" }, { name: " YASM" }],
    img: "/assets/work/thumb5.png",
    live: "",
    github:"https://drive.google.com/drive/folders/1Vdd57QvDCO0Xc2XY14AvUFzk7W44yaK4?usp=drive_link",
  },
];

const Experience = () => {
  const [project, setProject] = useState(projrects[0]);

  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.activeIndex;
    setProject(projrects[currentSlide]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center xl:px-0 py-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
            xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* title */}
              <h2
                className="text-[42px] font-bold leading-none text-black
                    group-hover:text-red-800 transition-all duration-500 capitalize"
              >
                {project.title}
              </h2>
              <p className="text-gray-500">{project.desc}</p>
              {/* stack */}
              <ul className="flex gap-3">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-red-900 ">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-gray-500 "></div>
              {/* button*/}
              <div className="flex item-center">
                <Link href={project.github} target="blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[100px] h-[35px] rounded-full
                                flex justify-center items-center group"
                      >
                        <BsGithub
                          className="text-black text-5xl
                                    group-hover:text-red-900"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-red-800">Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[450px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projrects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="h-[460px] relative group flex justify-center
                            items-center bg-primary"
                    >
                      {/* overlays */}
                      <div
                        className="absolute top-0 bottom-0 w-full h-full 
                      z-10"
                      ></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={item.img}
                          layout="fill"
                          objectFit="object-cover"
                          alt=""
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slide button */}
              <WorkSliderBtns
                containerStyles="flex gap-5 absolute right-0 bottom-[calc(50%_-_22px)] 
              xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-red-800 hover:bg-red-900 text-white text-[22px]  w-[44px]
              h-[44px] flex justify-center items-center transition-all duration-500"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Experience;
