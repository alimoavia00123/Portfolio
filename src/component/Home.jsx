import React from 'react';
import { FaFacebookF, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white min-h-screen flex items-center justify-center px-10 md:px-20 relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        
        {/* ===== Left Side (Intro Text) ===== */}
        <div className="text-center md:text-left md:w-1/2 space-y-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-[#38BDF8]">
            Hi, I'm <span className="text-[#34D399]">Ali</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Web Developer & SEO Specialist
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-md">
            I design and develop professional, modern, and responsive websites optimized
            for performance and SEO.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#38BDF8] text-[#0F172A] font-semibold rounded-xl hover:bg-[#34D399] transition-all">
            View My Work
          </button>
        </div>

        {/* ===== Right Side (Image + Social Icons) ===== */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center relative">
          <div className="relative flex items-center space-x-6">

            {/* --- Glassy Blur Photo --- */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#38BDF8]/30 blur-3xl rounded-full scale-125"></div>
              <img
                src="/pic2.jpg"
                alt="Ali"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full opacity-70 backdrop-blur-lg hover:opacity-100 hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* --- Vertical Line + Social Icons (NOW ON RIGHT SIDE) --- */}
            <div className="flex flex-col items-center space-y-5">
              <div className="h-16 w-0.5 bg-yellow-600"></div>

              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF className="text-2xl text-white hover:text-[#34D399] transition-all cursor-pointer" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer">
                <FaTwitter className="text-2xl text-white hover:text-[#34D399] transition-all cursor-pointer" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub className="text-2xl text-white hover:text-[#34D399] transition-all cursor-pointer" />
              </a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer">
                <FaWhatsapp className="text-2xl text-white hover:text-[#34D399] transition-all cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;