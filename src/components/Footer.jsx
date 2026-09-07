import { ArrowUpRight } from "lucide-react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";

import { menuItems, profile } from "../data/portfolioData";

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="
        relative
        mt-24
        overflow-hidden
        border-t
        border-white/10
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#070B14]" />

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#7C3AED]/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          md:px-10
          py-14
        "
      >
        {/* TOP */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            justify-between
            items-center
            gap-10
            border-b
            border-white/10
            pb-10
          "
        >
          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            onClick={() => scrollTo("home")}
            className="cursor-pointer"
          >
            <h1
              className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-cyan-400"
            >
              HJ
            </h1>
          </motion.div>

          {/* MENU */}
          <ul
            className="
              flex
              flex-wrap
              justify-center
              gap-7
              text-sm
              md:text-base
            "
          >
            {menuItems.map((item, i) => (
              <motion.li
                key={i}
                whileHover={{
                  y: -3,
                }}
                onClick={() => scrollTo(item.id)}
                className="relative cursor-pointer text-gray-400 hover:text-white transition-all duration-300"
              >
                {item.name}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    w-0
                    h-[2px]
                    bg-[#7C3AED]
                    transition-all
                    duration-300
                    hover:w-full
                  "
                />
              </motion.li>
            ))}
          </ul>

          {/* SOCIAL ICONS */}
          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: <FaGithub size={18} />,
                link: profile.socialLinks.github,
              },
              {
                icon: <FaLinkedin size={18} />,
                link: profile.socialLinks.linkedin,
              },
              {
                icon: <FaInstagram size={18} />,
                link: profile.socialLinks.instagram,
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  y: -4,
                }}
                className="
        w-11
        h-11
        rounded-2xl
        flex
        items-center
        justify-center
        bg-white/10
        border
        border-white/10
        text-white
        backdrop-blur-xl
        hover:bg-[#7C3AED]
        transition-all
        duration-300
      "
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-5
            pt-8
          "
        >
          {/* COPYRIGHT */}
          <p
            className="text-sm tracking-wide text-gray-500"
          >
            © 2025 {profile.name} — Built with React.js & Tailwind CSS.
          </p>

          {/* BACK TO TOP */}
          <motion.button
            whileHover={{
              scale: 1.08,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => scrollTo("home")}
            className="
              flex
              items-center
              gap-2
              px-5
              py-3
              rounded-2xl
              bg-[#7C3AED]
              text-white
              font-medium
              shadow-[0_10px_40px_rgba(124,58,237,0.4)]
              hover:bg-[#6D28D9]
              transition-all
              duration-300
            "
          >
            Back To Top
            <ArrowUpRight size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
