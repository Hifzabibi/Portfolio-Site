// Hero.jsx

import {
  ArrowDown,
  Mail,
  Sparkles,
} from "lucide-react";

import pick from "../assets/Hifza.jpeg";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Section from "./common/Section";
import { profile } from "../data/portfolioData";

export default function Hero() {
  const scrollTo = (id) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <Section id="home" className="min-h-[90vh]">
      {/* ========================= */}
      {/* ANIMATED BACKGROUND */}
      {/* ========================= */}

      {/* Purple Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          top-10
          left-10
          w-[280px]
          h-[280px]
          rounded-full
          bg-[#7C3AED]/20
          blur-3xl
        "
      />

      {/* Floating Box */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          right-[5%]
          top-[20%]
          w-32
          h-32
          rounded-[35px]
          border
          border-[#7C3AED]/20
          bg-[#7C3AED]/10
          backdrop-blur-xl
        "
      />

      {/* Floating Circle */}
      <motion.div
        animate={{
          y: [0, 35, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[10%]
          left-[45%]
          w-24
          h-24
          rounded-full
          bg-cyan-400/10
          border
          border-cyan-400/20
        "
      />

      {/* Small Floating Dots */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          top-[25%]
          left-[35%]
          flex
          gap-3
        "
      >
        <div className="w-3 h-3 rounded-full bg-[#7C3AED]" />
        <div className="w-3 h-3 rounded-full bg-pink-400" />
        <div className="w-3 h-3 rounded-full bg-cyan-400" />
      </motion.div>

      <div className="relative z-10 grid md:grid-cols-2 items-center gap-16">

      {/* ========================= */}
      {/* LEFT SIDE */}
      {/* ========================= */}

      <motion.div
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
       className="relative z-10 md:pl-10 lg:pl-16"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
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
            size={18}
            className="text-[#7C3AED]"
          />

          <span className="text-sm text-[#7C3AED]">
            {profile.role}
          </span>
        </motion.div>

        {/* Heading */}
        <div className="leading-none">

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[70px] md:text-[90px] font-black tracking-tight text-white"
          >
            {profile.name.split(" ")[0]}
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="
              text-[70px]
              md:text-[90px]
              font-black
              tracking-tight
              text-[#7C3AED]
              drop-shadow-[0_0_30px_rgba(124,58,237,0.5)]
            "
          >
            {profile.name.split(" ")[1]}
          </motion.h1>
        </div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="
            mt-6
            text-[18px]
            tracking-[4px]
            text-[#7C3AED]
            font-semibold
          "
        >
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "React.js Expert",
                "Modern UI Designer",
                "Full Stack Learner",
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </motion.div>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 max-w-lg leading-relaxed text-[17px] text-gray-400"
        >
          {profile.bio[0]}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-5 mt-10"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("projects")}
            className="
              group
              flex
              items-center
              gap-3
              bg-[#7C3AED]
              px-7
              py-4
              rounded-2xl
              text-white
              font-medium
              shadow-[0_10px_40px_rgba(124,58,237,0.4)]
            "
          >
            See My Work

            <ArrowDown
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-y-1
              "
            />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("contact")}
            className="
              flex
              items-center
              gap-3
              border
              border-[#7C3AED]
              px-7
              py-4
              rounded-2xl
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

      {/* ========================= */}
      {/* RIGHT SIDE IMAGE */}
      {/* ========================= */}

      <motion.div
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="
          relative
          flex
          justify-center
          items-center
        "
      >
        {/* Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            w-[320px]
            h-[320px]
            rounded-full
            border-[2px]
            border-dashed
            border-[#7C3AED]/40
          "
        />

        {/* Glow */}
        <div
          className="
            absolute
            w-[260px]
            h-[260px]
            rounded-full
            bg-[#7C3AED]/20
            blur-3xl
          "
        />

        {/* Image */}
        <motion.img
          whileHover={{
            scale: 1.05,
            rotate: 2,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
          }}
          src={pick}
          alt="Hifza Bibi"
          className="
            relative
            z-10
            w-64
            h-64
            md:w-72
            md:h-72
            object-cover
            rounded-full
            border-4
            border-[#7C3AED]/30
            shadow-[0_20px_80px_rgba(124,58,237,0.45)]
          "
        />

        {/* Floating Mini Card */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-5
            right-0
            px-5
            py-3
            rounded-2xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
          "
        >
          <p className="text-sm text-gray-300">
            React.js Developer
          </p>
        </motion.div>
      </motion.div>
      </div>
    </Section>
  );
}