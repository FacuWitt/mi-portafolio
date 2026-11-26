import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

const Projects = ({ onOpenProject }) => {
  return (
    <section id="projects" className="scroll-mt-16 py-20 sm:py-28">
      <div className="section-container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-black leading-none type-wide sm:text-5xl">Proyectos</h2>
          <p className="font-hand text-2xl text-inkSoft">todos hechos en equipo</p>
        </div>

        <div className="mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              featured={index === 0}
              onOpen={() => onOpenProject(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
