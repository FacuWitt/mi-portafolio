import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Quote from "./components/sections/Quote";
import ProjectModal from "./components/ui/ProjectModal";

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects onOpenProject={setSelectedProject} />
        <Skills />
        <Contact />
        <Quote />
      </main>
      <Footer />

      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
