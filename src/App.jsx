import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import { useSelector } from "react-redux";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

function App() {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <div
      className={`min-h-screen w-full transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-[#0f0f1a] via-[#121212] to-[#0a0a0a] text-white"
          : "bg-white text-black"
      }`}
    >
      {/* CENTER CONTAINER */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Cursor />
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
