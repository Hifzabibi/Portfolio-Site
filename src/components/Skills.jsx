import { motion } from "framer-motion";
import {
  Sparkles,
  Code2,
  Layers3,
} from "lucide-react";
import Section from "./common/Section";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <Section id="skills">
      {/* ========================= */}
      {/* BACKGROUND EFFECTS */}
      {/* ========================= */}

      {/* Glow 1 */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute
          top-10
          left-[-100px]
          w-[300px]
          h-[300px]
          rounded-full
          bg-[#7C3AED]/20
          blur-3xl
        "
      />

      {/* Glow 2 */}
      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-10
          right-[-80px]
          w-[260px]
          h-[260px]
          rounded-full
          bg-cyan-400/10
          blur-3xl
        "
      />

      {/* Floating Box */}
      <motion.div
        animate={{
          rotate: [0, 10, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
        className="
          absolute
          top-[20%]
          right-[10%]
          w-28
          h-28
          rounded-[30px]
          border
          border-[#7C3AED]/20
          bg-[#7C3AED]/10
          backdrop-blur-xl
        "
      />

      {/* ========================= */}
      {/* HEADING */}
      {/* ========================= */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-10"
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
          <Sparkles size={16} className="text-[#7C3AED]" />

          <span className="text-sm text-[#7C3AED]">
            My Technologies
          </span>
        </div>

        <h2
          className="section-heading text-white"
        >
          My{" "}
          <span
            className="
              text-[#7C3AED]
              drop-shadow-[0_0_30px_rgba(124,58,237,0.5)]
            "
          >
            Skills
          </span>
        </h2>

        <p
          className="
            mt-5
            text-gray-400
            max-w-2xl
            mx-auto
            leading-relaxed
          "
        >
          Technologies and modern frontend tools
          I use to build responsive, scalable and
          high-performance web applications.
        </p>
      </motion.div>

      {/* ========================= */}
      {/* MAIN SKILLS */}
      {/* ========================= */}

      <div
        className="
          relative
          z-10
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-5
          gap-8
          place-items-center
          mb-20
        "
      >
        {skills.mainSkills.map((skill, index) => (
          <motion.div
            key={index}
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
              duration: 0.6,
              delay: index * 0.06,
            }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            className="
              group
              relative
              w-full
              max-w-[170px]
            "
          >
            {/* CARD */}
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                flex
                flex-col
                items-center
                gap-4
                transition-all
                duration-500
                group-hover:border-[#7C3AED]/40
                group-hover:shadow-[0_10px_40px_rgba(124,58,237,0.25)]
              "
            >
              {/* TOP GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-b
                  from-[#7C3AED]/10
                  to-transparent
                "
              />

              {/* ICON */}
              <motion.div
                whileHover={{
                  rotate: 8,
                }}
                className="
                  w-20
                  h-20
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  bg-[#7C3AED]/10
                  border
                  border-[#7C3AED]/20
                "
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className={`
                    w-12
                    h-12
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-110
                    ${
                      skill.dark
                        ? "invert brightness-200"
                        : ""
                    }
                  `}
                />
              </motion.div>

              {/* NAME */}
              <p
                className="
                  text-sm
                  font-medium
                  transition
                  duration-300
                  group-hover:text-[#7C3AED]
                "
              >
                {skill.name}
              </p>

              {/* HOVER LINE */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  w-0
                  bg-[#7C3AED]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ========================= */}
      {/* OTHER SKILLS */}
      {/* ========================= */}

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          relative
          z-10
        "
      >
        {/* BOX */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[35px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-8
            md:p-10
          "
        >
          {/* Background Blur */}
          <div
            className="
              absolute
              top-0
              right-0
              w-52
              h-52
              bg-[#7C3AED]/10
              rounded-full
              blur-3xl
            "
          />

          {/* Heading */}
          <div className="relative z-10 text-center mb-8">
            <div className="flex justify-center mb-4">
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-[#7C3AED]/10
                  border
                  border-[#7C3AED]/20
                  flex
                  items-center
                  justify-center
                "
              >
                <Layers3
                  size={24}
                  className="text-[#7C3AED]"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2">
              Additional Technologies
            </h3>

            <p className="text-gray-400 text-sm">
              Tools & technologies I use regularly
            </p>
          </div>

          {/* TAGS */}
          <div
            className="
              relative
              z-10
              flex
              flex-wrap
              justify-center
              gap-4
            "
          >
            {skills.otherSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                }}
                className="
                  px-5
                  py-3
                  rounded-full
                  border
                  border-white/10
                  bg-black/20
                  backdrop-blur-xl
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  hover:border-[#7C3AED]
                  hover:text-[#7C3AED]
                  hover:shadow-[0_5px_25px_rgba(124,58,237,0.25)]
                  cursor-pointer
                "
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ========================= */}
      {/* BOTTOM DECORATION */}
      {/* ========================= */}

      <motion.div
        animate={{
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-20
          left-[10%]
          hidden
          md:flex
          items-center
          gap-3
          opacity-30
        "
      >
        <Code2
          size={20}
          className="text-[#7C3AED]"
        />

        <div className="w-24 h-[1px] bg-[#7C3AED]" />
      </motion.div>
    </Section>
  );
}