import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f0f1a] via-[#121212] to-[#0a0a0a] text-white">
      {/* CENTER CONTAINER */}
      <div className="">
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
