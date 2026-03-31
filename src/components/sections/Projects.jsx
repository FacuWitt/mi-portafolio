import { useState } from "react";
import { motion } from "framer-motion";
import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="py-20 sm:py-28">
        <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Proyectos Destacados</h2>
          <p className="mt-3 max-w-3xl text-textMuted">
            Seleccion de trabajos con foco en backend robusto, arquitectura y experiencias frontend dinamicas.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3 auto-rows-[minmax(240px,auto)]">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpenModal={setSelectedProject} />
            ))}
          </div>
        </motion.div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default Projects;
