import React from "react";
import { 
  SiPython,
  SiJava,
  SiCsharp,
  SiJavascript,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiAndroid,
  SiDotnet,
  SiAngular,
  SiDjango,
  SiFastapi,
  SiUnity,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiFirebase,
  SiMicrosoftsqlserver,
  SiKotlin,
  SiWindows
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const Skills = ({ darkMode }) => {
  const skills = [
    { name: "Python", icon: <SiPython />, color: "text-blue-500" },
    { name: "Pandas", icon: <SiPandas />, color: "text-blue-600" },
    { name: "NumPy", icon: <SiNumpy />, color: "text-blue-400" },
    { name: "Scikit-learn", icon: <SiScikitlearn />, color: "text-orange-500" },
    { name: "Matplotlib", icon: "📊", color: "text-blue-500" },
    { name: "Scrapy", icon: "🕷️", color: "text-green-600" },
    { name: "SQL", icon: <FaDatabase />, color: "text-blue-500" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-600" },
    { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
    { name: "Kotlin", icon: <SiKotlin />, color: "text-purple-500" },
    { name: "MVVM", icon: "🏗️", color: "text-gray-700" },
    { name: "Java", icon: <SiJava />, color: "text-red-500" },
    { name: "Unity", icon: <SiUnity />, color: "text-gray-800" },
    { name: "C#", icon: <SiCsharp />, color: "text-green-600" },
    { name: "Django", icon: <SiDjango />, color: "text-green-700" },
    { name: "FastAPI", icon: <SiFastapi />, color: "text-teal-500" },
  ];

  return (
    <div id="skills" className="container mx-auto mt-12 px-4">
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Tech Stack
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">
          Here are my technical skills and expertise.
        </p>
      </div>

      <div 
        data-aos="fade-up" 
        className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 exsm:grid-cols-2 gap-5 mt-8"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center p-4 rounded-lg bg-white hover:shadow-md transition-all duration-200"
          >
            <div className={`text-3xl mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-200`}>
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-gray-600 text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;