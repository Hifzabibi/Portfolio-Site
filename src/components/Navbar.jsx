import { Menu, X, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "../data/portfolioData";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = menuItems.map((m) => document.getElementById(m.id));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach((s) => s && obs.observe(s));

    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <>
      {/* TOP BLUR */}
      <div className="fixed top-0 left-0 w-full h-24 bg-[#7C3AED]/10 blur-3xl z-30 pointer-events-none" />

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="
          sticky
          top-0
          z-50
          w-full
          backdrop-blur-xl
          bg-[#0B1220]/80
          border-b
          border-white/10
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            md:px-10
            lg:px-12
            py-5
            flex
            items-center
            justify-between
          "
        >
          {/* LEFT LOGO */}
          <motion.h1
            whileHover={{
              scale: 1.08,
            }}
            onClick={() => scrollTo("home")}
            className="
              text-2xl
              font-black
              cursor-pointer
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-[#7C3AED]
              via-purple-400
              to-pink-500
              tracking-wider
            "
          >
            HJ
          </motion.h1>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10">
            {menuItems.map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ y: -2 }}
                onClick={() => scrollTo(item.id)}
                className={`
                  relative
                  text-[15px]
                  font-medium
                  cursor-pointer
                  transition-all
                  duration-300

                  ${
                    active === item.id
                      ? "text-[#A855F7]"
                      : "text-gray-300 hover:text-white"
                  }
                `}
              >
                {item.name}

                <span
                  className={`
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    rounded-full
                    bg-gradient-to-r
                    from-[#7C3AED]
                    to-pink-500
                    transition-all
                    duration-300

                    ${
                      active === item.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </motion.li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* HIRE BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => scrollTo("contact")}
              className="
                hidden
                md:flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-full
                bg-gradient-to-r
                from-[#7C3AED]
                to-purple-500
                text-white
                font-medium
                shadow-[0_0_25px_rgba(124,58,237,0.4)]
                hover:shadow-[0_0_35px_rgba(124,58,237,0.7)]
                transition-all
                duration-300
              "
            >
              <Briefcase size={18} />
              Hire Me
            </motion.button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="
                md:hidden
                p-2
                rounded-lg
                border
                border-white/10
                bg-white/5
                text-white
              "
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                md:hidden
                px-6
                pb-6
                bg-[#0B1220]/95
                backdrop-blur-xl
                border-t
                border-white/10
              "
            >
              <ul className="flex flex-col gap-5 pt-5">
                {menuItems.map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 6 }}
                    onClick={() => scrollTo(item.id)}
                    className={`
                      cursor-pointer
                      text-[15px]
                      transition-all
                      duration-300

                      ${
                        active === item.id
                          ? "text-[#A855F7]"
                          : "text-gray-300"
                      }
                    `}
                  >
                    {item.name}
                  </motion.li>
                ))}

                {/* MOBILE HIRE BUTTON */}
                <button
                  onClick={() => scrollTo("contact")}
                  className="
                    mt-3
                    flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    py-3
                    rounded-xl
                    bg-gradient-to-r
                    from-[#7C3AED]
                    to-purple-500
                    text-white
                    font-medium
                  "
                >
                  <Briefcase size={18} />
                  Hire Me
                </button>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}