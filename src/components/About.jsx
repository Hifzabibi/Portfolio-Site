import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import pick from "../assets/laptop.jpg";
import cvFile from "../assets/Hifza Bibi.pdf";
import { useSelector } from "react-redux";

export default function About() {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <section id="about" className="py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center"
        >
          {/* IMAGE CONTAINER */}
          <div className="w-full h-[400px] md:h-[350px] rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src={pick}
              alt="Hifza"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 bg-white dark:bg-black px-8 py-4 rounded-xl shadow-xl mt-[-30px]">
            <a href="#" className="text-[#7C3AED] hover:scale-110 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-[#7C3AED] hover:scale-110 transition">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-[#7C3AED] hover:scale-110 transition">
              <FaGithub size={20} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE (UNCHANGED UI) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className={`text-5xl md:text-6xl font-extrabold mt-4 mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            About <span className="text-[#7C3AED]">Me</span>
          </h2>

          <p
            className={`${
              darkMode ? "text-gray-400" : "text-gray-500"
            } leading-relaxed mb-6`}
          >
            I am a passionate Frontend Developer specializing in React.js. I
            build responsive, scalable, and high-performance web applications
            with modern UI/UX principles.
            I offer complete digital services for clients, specializing in the creation of stylish, modern websites and powerful web services — blending intuitive design with cutting-edge functionality to deliver seamless user experiences.
          </p>

          <p
            className={`${
              darkMode ? "text-gray-400" : "text-gray-500"
            } leading-relaxed mb-8`}
          >
            My focus is on writing clean code, optimizing performance, and
            delivering smooth digital experiences.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href={cvFile}
              download
              className="flex items-center gap-2 bg-[#7C3AED] text-white px-6 py-3 rounded-2xl hover:scale-105 transition duration-300"
            >
              Download CV <Download size={18} />
            </a>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 border border-[#7C3AED] px-6 py-3 rounded-2xl text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white transition duration-300"
            >
              Contact Me <Mail size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
