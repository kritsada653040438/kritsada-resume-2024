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

const volunteers = [
  {
    num: "01",
    title: "CESCa19 (Computer Engineering Summer Camp)",
    desc: "This is my first Staff as Welfare and location management  department",
    stack: [{ name: "Unity" }, { name: "C#" },],
    img: "/assets/work/thump4.jpg",
    live: "",
    github: "https://github.com/kritsada653040438/Unity-pro.git",
  }
];

const Volunteer = () => {
  const [volunteer, setVolunteer] = useState(volunteers[0]);

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
                {volunteer.num}
              </div>
              {/* title */}
              <h2
                className="text-[42px] font-bold leading-none text-black
                    group-hover:text-red-800 transition-all duration-500 capitalize"
              >
                {volunteer.title}
              </h2>
              <p className="text-gray-500">{volunteer.desc}</p>
              
              {/* border */}
              <div className="border border-gray-500 "></div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {volunteers.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="h-[460px] relative group flex justify-center
                            items-center bg-pink-50"
                    >
                      {/* overlays */}
                      <div
                        className="absolute top-0 bottom-0 w-full h-full bg-black/10
                      z-10"
                      ></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={volunteer.img}
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
export default Volunteer;
