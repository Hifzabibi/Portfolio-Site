import { Moon, Sun, Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { useEffect, useState } from "react";

export default function Navbar() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = menuItems.map((m) => document.getElementById(m.id));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    sections.forEach((s) => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
  <nav className={`sticky top-0 w-full z-50 ${darkMode ? 'bg-[#0B1220] border-b border-gray-800' : 'bg-[#7C3AED] border-b border-[#7C3AED]'}`}>
      {/* FULL WIDTH BACKGROUND */}
      <div className="w-full">
        {/* CENTER CONTENT */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
          {/* LOGO */}
          <h1
            onClick={() =>
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" })
            }
              className={`text-lg md:text-xl font-extrabold cursor-pointer ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-purple-400' : 'text-white'}`}
          >
            HJ
          </h1>

          {/* MENU */}
            <ul className={`hidden md:flex gap-8 text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-white'}`}>
            {menuItems.map((item, i) => (
              <li
                key={i}
                onClick={() =>
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                  className={`relative cursor-pointer transition duration-300 group cursor-expand ${active === item.id ? (darkMode ? 'text-[#7C3AED]' : 'text-white') : (darkMode ? 'text-gray-400' : 'text-white')}`}
              >
                {item.name}
                  <span className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${active===item.id ? (darkMode ? 'w-full bg-[#7C3AED]' : 'w-full bg-white') : 'w-0 bg-[#7C3AED]'}`}></span>
              </li>
            ))}
          </ul>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="p-2 rounded-md hover:bg-white/5"
            >
                {open ? <X size={20} className={darkMode ? 'text-gray-400' : 'text-white'} /> : <Menu size={20} className={darkMode ? 'text-gray-400' : 'text-white'} />}
            </button>
          </div>

          {/* THEME TOGGLE */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full hover:bg-[#7C3AED]/10 transition duration-300 hover:scale-110"
          >
              {darkMode ? (
                <Sun size={22} className={darkMode ? 'text-gray-400' : 'text-white'} />
              ) : (
                <Moon size={22} className={darkMode ? 'text-gray-400' : 'text-white'} />
              )}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
          {open && (
              <div className={`md:hidden ${darkMode ? 'bg-[#071023]/80 border-t border-gray-800' : 'bg-[#7C3AED] border-t border-[#7C3AED]'}`}>
                <ul className="flex flex-col gap-4 px-6 py-4">
            {menuItems.map((item, i) => (
              <li
                key={i}
                onClick={() => {
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
                      className={`cursor-pointer py-2 ${active===item.id ? (darkMode ? 'text-[#7C3AED]' : 'text-white') : (darkMode ? 'text-gray-400' : 'text-white')}`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
