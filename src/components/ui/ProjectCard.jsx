import { toAssetUrl } from "../../utils/assetUrl";

// Franja de proyecto con pestaña de carpeta y captura pegada con cinta
const ProjectCard = ({ project, index, featured = false, onOpen }) => {
  const { theme } = project;
  const tabOffset = ["left-0", "left-[16%]", "left-[32%]", "left-[8%]", "left-[24%]"][index % 5];
  const tilt = index % 2 === 0 ? "rotate-[2deg]" : "-rotate-[2deg]";

  return (
    <article
      id={`proyecto-${project.id}`}
      tabIndex={-1}
      className={`relative outline-none ${index > 0 ? "-mt-3" : ""}`}
      style={{ zIndex: index + 1 }}
      aria-labelledby={`project-${project.id}`}
    >
      <div
        className={`relative ml-0 inline-flex h-9 items-center gap-2 px-5 text-xs font-semibold sm:absolute sm:-top-9 ${tabOffset} ${theme.bg} ${theme.text}`}
        style={{ clipPath: "polygon(0 100%, 10px 0, calc(100% - 10px) 0, 100% 100%)" }}
      >
        {project.kind} {project.year}
      </div>

      <div
        className={`grid gap-8 px-6 py-9 sm:px-10 sm:py-12 md:grid-cols-[1fr_1.05fr] md:items-center ${theme.bg} ${theme.text} ${
          featured ? "md:py-16" : ""
        }`}
      >
        <div>
          {project.award ? (
            <p className="mb-4 inline-block -rotate-1 bg-mustard px-3 py-1 font-hand text-xl leading-none text-ink">
              {project.award}
            </p>
          ) : null}
          <h3
            id={`project-${project.id}`}
            className={`font-display font-black leading-[0.9] type-wide ${
              featured ? "text-6xl sm:text-7xl" : "text-4xl sm:text-5xl"
            }`}
          >
            {project.title}
          </h3>
          <p className={`mt-3 text-lg font-semibold ${theme.muted}`}>{project.subtitle}</p>
          <p className="mt-5 max-w-[52ch] leading-relaxed">{project.description}</p>

          <ul className={`mt-5 flex flex-wrap gap-x-3 gap-y-1 text-sm ${theme.muted}`} aria-label="Tecnologías">
            {project.technologies.slice(0, featured ? 9 : 5).map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onOpen}
            className={`mt-8 px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${theme.button}`}
          >
            Ver proyecto
          </button>
        </div>

        <button
          type="button"
          onClick={onOpen}
          className={`relative mx-2 block ${tilt} bg-white p-2 text-left shadow-[0_20px_40px_-22px_rgba(0,0,0,0.7)] transition hover:rotate-0`}
          aria-label={`Abrir galería de ${project.title}`}
        >
          <span className="tape -top-3 left-6 -rotate-6" aria-hidden="true" />
          <span className="tape -top-3 right-6 rotate-6" aria-hidden="true" />
          <img
            src={toAssetUrl(project.cover)}
            alt={`Captura de ${project.title}`}
            className="aspect-[16/10] w-full object-cover object-top"
            loading="lazy"
          />
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
