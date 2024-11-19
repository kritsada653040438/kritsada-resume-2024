"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const educations = [
  {
    level: "Primary education",
    institution: "Banthum (Thumprachanukroh) School",
    description: "I studied in this school from grade 1 - grade 6",
    href: "http://www.banthum.ac.th/#",
  },
  {
    level: "Junior high school",
    institution: "Kanlayanawat School",
    description: "I studied in the SMTE Classroom Project at this school from grades 7 - Grades 9",
    href: "https://www.kw.ac.th/",
  },
  {
    level: "High school",
    institution: "Kanlayanawat School",
    description: "I studied in the SMTE Classroom Project at this school from grades 10 - grades 12",
    href: "https://www.kw.ac.th/",
  },
  {
    level: "Bachelor's degree",
    institution: "Khon Kean University",
    description: "3rd year of Computer Engineering from Khon Kaen University GPA: 3.54",
    href: "https://th.kku.ac.th/",
  },
];

const Education = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {educations.map((education, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-4xl font-extrabold text-red-800
                     group-hover:text-red-900 transition-all
                    duretion-500"
                  >
                    {education.level}
                  </div>
                  <Link
                    href={education.href}
                    target="_blank"
                    className="w-[70px] h-[70px] rounded-full bg-red-800
                    group-hover:bg-red-900 transition-all duration-500
                    flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-white text-4xl" />
                  </Link>
                </div>
                {/* institution */}
                <h2
                  className="text-[32px] font-bold leading-none text-black
                group-hover:text-red-900 transition-all duration-500"
                >
                  {education.institution}
                </h2>
                {/* description */}
                <p>{education.description}</p>
                {/* border */}
                <div className="border-b border-red-900 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
