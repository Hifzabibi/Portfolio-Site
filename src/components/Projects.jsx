import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Projects() {
  const { darkMode } = useSelector((state) => state.theme);

  const projects = [
    {
      id: "01",
      title: "Investment Calculator",
      tag: "React App",
      desc: "A smart investment calculator built with React for financial planning and growth tracking.",
      tech: ["React", "JavaScript", "CSS"],
      image: "/src/assets/investment.jpg",
      link: "https://github.com/Hifzabibi/Investment-calculator",
    },
    {
      id: "02",
      title: "Quranic Center Website",
      tag: "Frontend",
      desc: "Modern Islamic learning website using React and Tailwind CSS with responsive UI.",
      tech: ["React", "Tailwind CSS"],
      image: "/src/assets/quranic center.jpg",
      link: "https://github.com/Hifzabibi/QuranicCenter-website",
    },
    {
      id: "03",
      title: "Uplaw Website",
      tag: "API Integration",
      desc: "Law firm website with API integration, dynamic content, built using React & Tailwind.",
      tech: ["React", "Tailwind", "API"],
      image: "/src/assets/uplaw.jpg",
      link: "https://github.com/Hifzabibi/Uplaw-website",
    },
    {
      id: "04",
      title: "Uplaw Admin Dashboard",
      tag: "Dashboard / Redux Toolkit",
      desc: "Fully responsive admin dashboard built with React, Redux Toolkit, and custom hooks. Includes state management and reusable components",
      tech: ["React", "Redux-Tool", "Tailwind"],
      image: "/src/assets/dashboard.jpg",
      link: "https://github.com/Hifzabibi/uplaw-admin",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      {/* HEADER */}
      <h2
        className={`text-4xl md:text-5xl  text-center font-bold mb-12 ${darkMode ? "text-white" : "text-black"}`}
      >
        Featured <span className="text-[#7C3AED]">Projects</span>
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {visibleProjects.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 dark:bg-black/40 backdrop-blur-lg border border-gray-700 rounded-2xl overflow-hidden transition duration-300 shadow-sm"
          >
            {/* IMAGE */}
            <div className="h-[180px] w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col justify-between h-[250px]">
              {/* TOP */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700 dark:text-gray-500">
                  {item.id}
                </span>
                <span className="text-xs bg-[#7C3AED]/10 text-[#7C3AED] px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* TITLE */}
              <h3
                className={`text-xl font-semibold mt-2 ${darkMode ? "text-white" : "text-black"}`}
              >
                {item.title}
              </h3>

              {/* DESC */}
              <p
                className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-700"} mt-2`}
              >
                {item.desc}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs border border-gray-300 dark:border-gray-600 px-2 py-1 rounded-full text-gray-700 dark:text-gray-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINK */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7C3AED] text-sm mt-4 hover:underline cursor-expand"
              >
                View on GitHub →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-lg transition"
        >
          {showAll ? "Show Less" : "More Projects"}
        </button>
      </div>
    </section>
  );
}
