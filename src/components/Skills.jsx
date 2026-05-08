import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function Skills() {
    const { darkMode } = useSelector((state) => state.theme);
  const mainSkills = [
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },

    { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },

    // ✅ GitHub FIX (invert added)
    { 
      name: "GitHub", 
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      dark: true 
    },

    { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  ];

  const otherSkills = [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Node.js",
    "Git",
    "GitHub",
    "VS Code",
    "REST APIs",
    "React Router",
    "React Hooks",
    "Responsive Design",
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12">
      
      {/* HEADING */}
      <div className="text-center mb-16">
        <h2 className={`text-5xl md:text-6xl font-extrabold mt-4 mb-4 ${darkMode ? "text-white" : "text-black"}`}>
          My <span className="text-[#7C3AED]">Skills</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-400 mt-3">
          Technologies & tools I work with
        </p>
      </div>

      {/* MAIN SKILLS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center mb-16">
        {mainSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-gray-700 group-hover:border-[#7C3AED] group-hover:scale-110 transition duration-300">
              <img
                src={skill.img}
                alt={skill.name}
                className={`w-10 h-10 ${skill.dark ? "invert brightness-200" : ""}`}
              />
            </div>

            <p className="text-sm group-hover:text-[#7C3AED] transition">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ALL TECHNOLOGIES */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-6 text-[#7C3AED]">
          All Technologies
        </h3>

        <div className="flex flex-wrap justify-center gap-3">
          {otherSkills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm border border-gray-600 rounded-full hover:border-[#7C3AED] hover:text-[#7C3AED] transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}