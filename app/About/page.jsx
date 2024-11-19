"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description: "I am a full stack developer.",
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
      fieldvalue: "Khon Kaen, Thailand",
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
  description: "I have experience in web development.",
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
  description: "Personal skills are abilities like communication, adaptability, teamwork, and problem-solving that enable effective interaction, task management, and achieving goals professionally.",
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
            <TabsContent value="about" className="w-full">
              About me
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              skills
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
                                <li key={index} className="bg-[#f3f3f3] h-[184px] py-6 px-10 rounded-xl
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
