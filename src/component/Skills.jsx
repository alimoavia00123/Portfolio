import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, 
  FaGitAlt, FaWordpress 
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiGo, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
    { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
    { name: "Go", icon: <SiGo className="text-[#00ADD8]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#83CD29]" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Git", icon: <FaGitAlt className="text-[#F1502F]" /> },
    { name: "WordPress", icon: <FaWordpress className="text-[#21759B]" /> },
  ];

  return (
    <section 
      id="skills" 
      className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-[#38BDF8]">My</span> 
          <span className="text-[#34D399]"> Skills</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to craft modern, responsive, and optimized web experiences.
        </p>

        {/* ===== Equal-Size Skill Grid ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center w-32 h-32 bg-[#1E293B]/40 backdrop-blur-md 
                         rounded-xl p-5 hover:bg-[#1E293B]/70 hover:scale-110 
                         transition-all duration-300 shadow-md shadow-[#000]/30"
            >
              <div className="text-5xl mb-2 drop-shadow-[0_0_8px_#38BDF8]/50">
                {skill.icon}
              </div>
              <p className="text-gray-300 text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
