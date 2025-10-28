import React from 'react';
import codingPic from '/public/coding.jpg'; 

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white  py-16 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-[#38BDF8] mb-6">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Hi, I’m <span className="font-semibold text-white">Ali Moavia</span>, a passionate
            <span className="text-[#38BDF8] font-medium"> Web Developer</span> focused on
            building modern, responsive, and high-performance web applications.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mt-4">
            I work with both frontend and backend technologies — including
            <span className="text-[#34D399] font-medium">
              {' '}
              HTML, CSS, JavaScript, React.js, Tailwind CSS, Node.js, Express.js, Go, and MongoDB
            </span>.
            I love writing clean and efficient code, crafting smooth user experiences,
            and turning creative ideas into functional digital products.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mt-4">
            My goal is to deliver fast, secure, and scalable web solutions that help
            businesses grow and succeed online.
          </p>
        </div>
        
        {/* Left Side - Image */}
        <div className="md:w-96 ml-50 rounded-b-full h-96 flex justify-center">
          <img
            src={codingPic}
            alt="Web Developer at work"
            className="rounded-2xl shadow-lg opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-105"
          />
        </div>

        {/* Right Side - Text */}
      </div>
    </section>
  );
};

export default About;
