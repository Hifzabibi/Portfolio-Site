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
      link: "https://github.com/Hifzabibi/Investment-calculator",
    },
    {
      id: "02",
      title: "Quranic Center Website",
      tag: "Frontend",
      desc: "Modern Islamic learning website using React and Tailwind CSS with responsive UI.",
      tech: ["React", "Tailwind CSS"],
      link: "https://github.com/Hifzabibi/QuranicCenter-website",
    },
    {
      id: "03",
      title: "Uplaw Website",
      tag: "API Integration",
      desc: "Law firm website with API integration, dynamic content, built using React & Tailwind.",
      tech: ["React", "Tailwind", "API"],
      link: "https://github.com/Hifzabibi/Uplaw-website",
    },
    {
      id: "04",
      title: "Uplaw Admin Dashboard",
      tag: "Dashboard / Redux Toolkit",
      desc: "Fully responsive admin dashboard built with React, Redux Toolkit, and reusable components with clean state management.",
      tech: ["React", "Redux Toolkit", "Tailwind"],
      link: "https://github.com/Hifzabibi/uplaw-admin",
    },
    {
      id: "05",
      title: "Bootstrap Responsive Template",
      tag: "Bootstrap",
      desc: "Fully responsive website template designed using Bootstrap with modern layout and clean UI structure.",
      tech: ["HTML", "CSS", "Bootstrap"],
      link: "https://github.com/Hifzabibi/Bootstrap-Task",
    },
    {
      id: "06",
      title: "Netflix Clone",
      tag: "HTML / CSS",
      desc: "Fully responsive Netflix clone built using pure HTML and CSS with pixel-perfect layout design.",
      tech: ["HTML", "CSS", "Responsive Design"],
      link: "https://github.com/Hifzabibi/NetFlix-Clone",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      {/* HEADER */}
      <h2
        className={`text-4xl md:text-5xl text-center font-bold mb-12 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Featured <span className="text-[#7C3AED]">Projects</span>
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {visibleProjects.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ scale: 1.04 }}
            className="bg-white/5 dark:bg-black/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 transition duration-300 shadow-md"
          >
            {/* TOP ROW */}
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{item.id}</span>
              <span className="text-xs bg-[#7C3AED]/10 text-[#7C3AED] px-3 py-1 rounded-full">
                {item.tag}
              </span>
            </div>

            {/* TITLE */}
            <h3
              className={`text-xl font-semibold mt-4 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className={`text-sm mt-3 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {item.desc}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mt-4">
              {item.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs border border-gray-300 dark:border-gray-600 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400"
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
              className="inline-block text-[#7C3AED] text-sm mt-5 hover:underline"
            >
              View on GitHub →
            </a>
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