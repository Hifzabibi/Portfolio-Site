import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function Experience() {
  const { darkMode } = useSelector((state) => state.theme);

  const experiences = [
    {
      year: "Nov 2025 - Present",
      role: "Frontend Developer",
      company: "Robotics-World",
      desc: "Working on responsive UI, live web projects, dashboard development, and API integrations for real-world applications.",
      current: true,
    },
    {
      year: "2025",
      role: "Intern",
      company: "Urraan (Codematics Inc in Abbottabad)",
      desc: "Completed internship program where I worked on React components, UI improvements, and frontend development tasks using HTML, CSS, and React.",
    },
    {
      year: "Sep 2024 - Dec 2024",
      role: "Frontend Intern",
      company: "STEM Wizards Academia",
      desc: "Worked for 3 months using React, HTML, and CSS. Built UI components and contributed to frontend tasks and small projects.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-[80px] md:text-6xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Experience
        </motion.h2>

        <div className="relative pl-6 border-l border-gray-700">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="mb-10 relative"
            >
              <span
                className={`absolute -left-5 top-1 w-3 h-3 rounded-full ${
                  exp.current ? "bg-[#7C3AED] shadow-lg" : "bg-gray-500"
                }`}
              />

              <div className="pl-4">
                <div className="flex items-center gap-3">
                  <h3
                    className={`text-lg font-semibold ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {exp.company}
                  </h3>

                  {exp.current && (
                    <span className="text-xs bg-[#7C3AED] px-2 py-1 rounded-full text-white">
                      Current
                    </span>
                  )}
                </div>

                <p
                  className={`text-sm mt-1 ${
                    darkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {exp.role} •{" "}
                  <span
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {exp.year}
                  </span>
                </p>

                <p
                  className={`mt-2 max-w-2xl ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}