import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Layers3 } from "lucide-react";

import { FaGithub } from "react-icons/fa";
import Section from "./common/Section";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <Section id="projects">
      {/* BACKGROUND EFFECTS */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
      absolute
      top-10
      left-10
      w-[300px]
      h-[300px]
      rounded-full
      bg-[#7C3AED]/20
      blur-3xl
    "
      />

      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
      absolute
      right-10
      bottom-10
      w-40
      h-40
      rounded-[40px]
      border
      border-[#7C3AED]/20
      bg-[#7C3AED]/10
      backdrop-blur-xl
    "
      />

      {/* MAIN CONTAINER */}
      <div className="relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div
            className="
          inline-flex
          items-center
          gap-2
          px-5
          py-2
          rounded-full
          bg-[#7C3AED]/10
          border
          border-[#7C3AED]/20
          mb-6
        "
          >
            <Sparkles size={18} className="text-[#7C3AED]" />

            <span className="text-[#7C3AED] text-sm">My Creative Work</span>
          </div>

          <h2 className="section-heading text-white">
            Featured{" "}
            <span
              className="
            text-[#7C3AED]
            drop-shadow-[0_0_30px_rgba(124,58,237,0.5)]
          "
            >
              Projects
            </span>
          </h2>

          <p
            className="
          max-w-2xl
          mx-auto
          mt-6
          text-gray-400
          leading-relaxed
        "
          >
            Real-world projects built with modern technologies, beautiful UI and
            smooth user experiences.
          </p>
        </motion.div>

        {/* PROJECTS GRID */}
        <div
          className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
      "
        >
          {visibleProjects.map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            transition-all
            duration-500
            hover:border-[#7C3AED]/40
            hover:shadow-[0_20px_80px_rgba(124,58,237,0.25)]
          "
            >
              <div
                className="relative z-10 mb-5 overflow-hidden rounded-2xl cursor-pointer"
                onClick={() =>
                  item.preview && window.open(item.preview, "_blank")
                }
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Glow */}
              <div
                className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition
              duration-700
              bg-gradient-to-br
              from-[#7C3AED]/10
              via-transparent
              to-cyan-400/10
            "
              />

              {/* Floating Icon */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
              absolute
              top-5
              right-5
              w-12
              h-12
              rounded-2xl
              bg-[#7C3AED]/10
              border
              border-[#7C3AED]/20
              flex
              items-center
              justify-center
            "
              >
                <Layers3 size={20} className="text-[#7C3AED]" />
              </motion.div>

              {/* CONTENT */}
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span
                    className="
                  text-4xl
                  font-black
                  text-white/10
                "
                  >
                    {item.id}
                  </span>

                  <span
                    className="
                  text-xs
                  bg-[#7C3AED]/15
                  border
                  border-[#7C3AED]/20
                  text-[#7C3AED]
                  px-4
                  py-2
                  rounded-full
                "
                  >
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold mt-5 text-white transition duration-300 group-hover:text-[#7C3AED]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-sm text-gray-400">
                  {item.desc}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {item.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="
                    text-xs
                    px-3
                    py-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-gray-300
                  "
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex items-center gap-3 mt-7">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </motion.a>

                  {item.preview && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={item.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-[#7C3AED]/40 px-4 py-3 rounded-2xl text-sm text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Preview
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => setShowAll(!showAll)}
            className="
          px-8
          py-4
          rounded-2xl
          bg-[#7C3AED]
          hover:bg-[#6D28D9]
          text-white
          font-semibold
          shadow-[0_10px_40px_rgba(124,58,237,0.35)]
          transition-all
          duration-300
        "
          >
            {showAll ? "Show Less Projects" : "View More Projects"}
          </motion.button>
        </motion.div>
      </div>
    </Section>
  );
}
