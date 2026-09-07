// About.jsx

import {
  Download,
  Mail,
  Sparkles,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { motion } from "framer-motion";
import pick from "../assets/laptop.jpg";
import Section from "./common/Section";
import { profile } from "../data/portfolioData";

export default function About() {

  return (
    <Section id="about">

      {/* ===================== */}
      {/* BACKGROUND EFFECTS */}
      {/* ===================== */}

      {/* Purple Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          top-0
          left-0
          w-[350px]
          h-[350px]
          rounded-full
          bg-[#7C3AED]/20
          blur-[120px]
        "
      />

      {/* Floating Box */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute
          right-[5%]
          top-[15%]
          w-28
          h-28
          rounded-[30px]
          border
          border-[#7C3AED]/20
          bg-[#7C3AED]/10
          backdrop-blur-xl
        "
      />

      {/* Small Circle */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[10%]
          left-[45%]
          w-20
          h-20
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-400/10
        "
      />

      {/* ===================== */}
      {/* MAIN CONTENT */}
      {/* ===================== */}

      <div
        className="
          relative
          z-10
          grid
          md:grid-cols-2
          gap-20
          items-center
        "
      >

        {/* ===================== */}
        {/* LEFT SIDE IMAGE */}
        {/* ===================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -120,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 1,
          }}

          viewport={{ once: true }}

          className="
            relative
            flex
            flex-col
            items-center
          "
        >

          {/* IMAGE WRAPPER */}
          <motion.div

            whileHover={{
              scale: 1.02,
            }}

            className="
              group
              relative
              w-full
              h-[420px]
              md:h-[450px]
              rounded-[35px]
              overflow-hidden
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              shadow-[0_20px_80px_rgba(124,58,237,0.25)]
            "
          >

            {/* Rotating Border */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-5
                rounded-[30px]
                border
                border-dashed
                border-[#7C3AED]/30
                z-10
              "
            />

            {/* IMAGE */}
            <img
              src={pick}
              alt="Hifza"
              className="
                w-full
                h-full
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/50
                to-transparent
              "
            />

            {/* Floating Badge */}
            <motion.div

              animate={{
                y: [0, -12, 0],
              }}

              transition={{
                duration: 4,
                repeat: Infinity,
              }}

              className="
                absolute
                bottom-6
                left-6
                z-20
                px-5
                py-3
                rounded-2xl
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
              "
            >

              <p className="text-sm text-white">
                UI / UX Focused Developer
              </p>

            </motion.div>

          </motion.div>

          {/* ===================== */}
          {/* SOCIAL ICONS */}
          {/* ===================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative z-30 flex gap-6 px-8 py-5 rounded-2xl bg-[#111827]/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(124,58,237,0.2)] mt-[-35px]"
          >
            {[
              { icon: <FaInstagram size={20} />, href: profile.socialLinks.instagram },
              { icon: <FaLinkedin size={20} />, href: profile.socialLinks.linkedin },
              { icon: <FaGithub size={20} />, href: profile.socialLinks.github },
            ].map((item, index) => (

              <motion.a
                key={index}

                href={item.href}
                target="_blank"
                rel="noopener noreferrer"

                whileHover={{
                  scale: 1.2,
                  y: -5,
                }}

                whileTap={{
                  scale: 0.9,
                }}

                className="
                  text-[#7C3AED]
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                {item.icon}
              </motion.a>

            ))}

          </motion.div>

        </motion.div>

        {/* ===================== */}
        {/* RIGHT SIDE CONTENT */}
        {/* ===================== */}

        <motion.div

          initial={{
            opacity: 0,
            x: 120,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 1,
          }}

          viewport={{ once: true }}

          className="relative z-10"
        >

          {/* Badge */}
          <motion.div

            initial={{
              opacity: 0,
              y: -20,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.2,
            }}

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
              mb-8
            "
          >

            <Sparkles
              size={17}
              className="text-[#7C3AED]"
            />

            <span className="text-[#7C3AED] text-sm">
              About Me
            </span>

          </motion.div>

          {/* HEADING */}
          <motion.h2

            initial={{
              opacity: 0,
              y: 50,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.3,
            }}

            className="section-heading leading-tight mb-8 text-white"
          >

            Crafting
            <br />

            <span
              className="
                text-[#7C3AED]
                drop-shadow-[0_0_25px_rgba(124,58,237,0.5)]
              "
            >
              Digital
            </span>

            {" "}Experiences

          </motion.h2>

          {/* PARAGRAPH 1 */}
          <motion.p

            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.5,
            }}

            className="text-[17px] leading-relaxed mb-6 max-w-xl text-gray-400"
          >

            {profile.bio[0]}

          </motion.p>

          {/* PARAGRAPH 2 */}
          <motion.p

            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.7,
            }}

            className="text-[17px] leading-relaxed mb-10 max-w-xl text-gray-400"
          >

            {profile.bio[1]}

          </motion.p>

          {/* BUTTONS */}
          <motion.div

            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.9,
            }}

            className="
              flex
              flex-wrap
              gap-5
            "
          >

            {/* DOWNLOAD BUTTON */}
            <motion.a

              whileHover={{
                scale: 1.05,
                y: -4,
              }}

              whileTap={{
                scale: 0.95,
              }}

              href={profile.resume}
              download

              className="
                flex
                items-center
                gap-3
                px-7
                py-4
                rounded-2xl
                bg-[#7C3AED]
                text-white
                font-medium
                shadow-[0_10px_40px_rgba(124,58,237,0.35)]
              "
            >

              Download CV

              <Download size={18} />

            </motion.a>

            {/* CONTACT BUTTON */}
            <motion.button

              whileHover={{
                scale: 1.05,
                y: -4,
              }}

              whileTap={{
                scale: 0.95,
              }}

              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }

              className="
                flex
                items-center
                gap-3
                px-7
                py-4
                rounded-2xl
                border
                border-[#7C3AED]
                text-[#7C3AED]
                hover:bg-[#7C3AED]
                hover:text-white
                transition-all
                duration-300
              "
            >

              Contact Me

              <Mail size={18} />

            </motion.button>

          </motion.div>

        </motion.div>

      </div>
    </Section>
  );
}