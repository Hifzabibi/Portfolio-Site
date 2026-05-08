import { ArrowDown, Mail } from "lucide-react";
import pick from "../assets/Hifza.png";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useSelector } from "react-redux";

export default function Hero() {
  const { darkMode } = useSelector((state) => state.theme);
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="grid md:grid-cols-2 items-center min-h-[80vh] gap-10"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="leading-none">
          <h1
            className={`text-[80px] md:text-[84px] font-bold mb-4 ${darkMode ? "text-white" : "text-black"}`}
          >
            Hifza
          </h1>

          <h1
            className={`text-[80px] md:text-[84px] font-extrabold mt-4 mb-4 ${darkMode ? "text-white" : "text-[#7C3AED]"}`}
          >
            Jadoon
          </h1>
        </div>
        <p className="text-[#7C3AED] tracking-widest mb-4">
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "React.js Builder",
                "Full Stack learning",
              ],
              autoStart: true,
              loop: true,
              delay: 70,
              deleteSpeed: 50,
            }}
          />
        </p>

        <p
          className={`mt-6 ${darkMode ? "text-gray-400" : "text-gray-500"} max-w-md leading-relaxed`}
        >
          Frontend Developer building responsive and high-performance web
          applications using React.js and Tailwind CSS. Focused on clean UI,
          accessibility and performance.
        </p>

        <div className="flex gap-4 mt-8">
          <button
            onClick={() => scrollTo("projects")}
            className="flex items-center gap-2 bg-[#7C3AED] text-white px-6 py-3 rounded-2xl hover:scale-105 transition duration-300 shadow-md cursor-expand"
          >
            See My Work <ArrowDown size={18} />
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 border border-[#7C3AED] px-6 py-3 rounded-2xl text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white transition duration-300 cursor-expand"
          >
            Contact Me <Mail size={18} />
          </button>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={pick}
          alt="Hifza Bibi"
          className="w-60 h-60 md:w-64 md:h-64 rounded-full shadow-2xl object-cover hover:scale-105 transition duration-500 ring-4 ring-[#7C3AED]/20"
        />
      </motion.div>
    </section>
  );
}
