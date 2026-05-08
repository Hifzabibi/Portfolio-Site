import { useSelector } from "react-redux";

export default function Footer() {
  const { darkMode } = useSelector((state) => state.theme);
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className={`w-full ${darkMode ? 'bg-[#0B1220] border-t border-gray-800' : 'bg-[#7C3AED] border-t border-[#7C3AED]'} mt-20`}>
      
      {/* INNER CONTENT */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-6">

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
        <ul className={`flex flex-wrap justify-center gap-6 text-sm ${darkMode ? 'text-gray-400' : 'text-white'}`}>
          {menuItems.map((item, i) => (
            <li
              key={i}
              onClick={() =>
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer transition"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* COPYRIGHT */}
        <p className={`${darkMode ? 'text-gray-400' : 'text-white'} text-sm`}>
          © 2025 Hifza Bibi.
        </p>
      </div>

    </footer>
  );
}