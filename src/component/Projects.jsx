import React from "react";

const projects = [
  {
    id: 1,
    title: "SEO Landing Page",
    description: "A modern SEO-optimized landing page built with React & Tailwind.",
    img: "/public/seo.jpg", // apni image ka path yahan do
    live: "https://your-live-link.com", // live link
    github: "",
  },
  {
    id: 2,
    title: "E-commerce",
    description: "A modern showcasing web development and SEO skills.",
    img: "/public/e.jpg", // apni image ka path yahan do
    live: "https://your-live-link.com",
    github: "",
  },
  {
    id: 3,
    title: "Client Project",
    description: "Custom website developed for a client using React and responsive UI.",
    img: "/public/bu.jpg", 
    live: "https://danaalkuwait.omline",
    github: "",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-linear-to-r from-[#0F172A] to-[#1E293B] text-white py-20 px-6 md:px-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-[#38BDF8]">My</span> <span className="text-[#34D399]">Projects</span>
      </h2>

      <div className=" gap-15 flex justify-center place-items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1E293B]/60 w-max-2xl w-[350px] h-[420px]  rounded-2xl shadow-lg overflow-hidden
                       hover:scale-105 hover:bg-[#1E293B]/80 transition-all duration-300
                       flex justify-center flex-col"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-sky-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>
              </div>
              <div className="flex justify-between text-sm">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-sky-400 hover:text-sky-300"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-green-400 hover:text-green-300"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
