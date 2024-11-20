"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
description: "I'm a computer engineering student at Khon Kaen University with an interest in web development. I'm a fast learner and eager to explore new technologies.",
  info: [
    {
      fieldName: "Name",
      fieldvalue: "Kritsada Mahanam",
    },
    {
      fieldName: "Email",
      fieldvalue: "Kritsada.ma@kkumail.com",
    },
    {
      fieldName: "Phone",
      fieldvalue: "(+66) 83 141 6963 ",
    },
    {
      fieldName: "Address",
      fieldvalue: "Khon Kaen,Thailand",
    },
    {
      fieldName: "Nationality",
      fieldvalue: "Thai",
    },
    {
      fieldName: "Date of Birth",
      fieldvalue: "July 30, 2003",
    },
  ],
};

const skills = {
  title: "Skills",
  description: "I have experience in web development using these technologies.",
  skillList: [
    {
      fieldName: "HTML",
      fieldvalue: <FaHtml5 />,
    },
    {
      fieldName: "CSS",
      fieldvalue: <FaCss3 />,
    },
    {
      fieldName: "JavaScript",
      fieldvalue: <FaJs />,
    },
    {
      fieldName: "React",
      fieldvalue: <FaReact />,
    },
    {
      fieldName: "Node.js",
      fieldvalue: <FaNodeJs />,
    },
    {
      fieldName: "MongoDB",
      fieldvalue: <SiMongodb />,
    },
    {
      fieldName: "Tailwind CSS",
      fieldvalue: <SiTailwindcss />,
    },
    {
      fieldName: "Next.js",
      fieldvalue: <SiNextdotjs />,
    },
  ],
};

const personSkills = {
  head: "Personal Skills",
  description: "I have strong soft skills that enable me to work effectively, adapt to challenges, and contribute to achieving goals.",
  items: [
      { duration: "01", title: "Teamwork", desc: "Collaborated with a team to achieve goals." },
      { duration: "02", title: "Communication", desc: "Collaborated through open communication." },
      { duration: "03", title: "Time Management", desc: "Met deadlines consistently." },
      { duration: "04", title: "Adaptability", desc: "Quickly adapted to new environments." },
      { duration: "05", title: "Attention to detail", desc: "Focused on details to deliver quality results." },
      
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh flex item-center justify-center py-12 xl:py-0]"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList
            className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
                gap-6"
          >
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="personSkills">Personal Skills</TabsTrigger>
          </TabsList>
          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* About me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((info, index) => {
                    return (
                      <li key={index} className="flex justify-center items-center xl:justify-start gap-4">
                        <span className="text-red-800">{info.fieldName}</span>
                        <span className="text-xl text-red-950">{info.fieldvalue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-black mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]"> 
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#fffdfd] rounded-xl flex justify-center items-center group">
                            <div className="text-8xl group-hover:text-red-900
                            transition-all decoration-300">
                              {skill.fieldvalue}
                            </div>
                            </TooltipTrigger>
                          <TooltipContent><p className="capitalize">{skill.fieldName}</p></TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>

              </div>
            </TabsContent>
            {/* personSkills */}
            <TabsContent value="personSkills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{personSkills.head}</h3>
                <p className="max-w-[600px]">{personSkills.description}</p>
                <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]"> 
                        {personSkills.items.map((item, index) => {
                            return (
                                <li key={index} className="bg-[#fffdfd] h-[184px] py-6 px-10 rounded-xl
                                flex flex-col justify-center items-center lg:items-start gap-1 text-red-800">
                                   <span className="text-xl text-black">{item.duration}</span> 
                                   <h3 className="text-2xl">{item.title}</h3>
                                   <div className="flex items-center gap-3">
                                    <p className="text-red-950">{item.desc}</p>
                                   </div>
                                   
                                </li>
                            );
                        })}
                    </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default About;
