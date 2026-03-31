import { FiEye, FiGithub } from "react-icons/fi";
import Badge from "./Badge";
import { toAssetUrl } from "../../utils/assetUrl";

const sizeClasses = {
  large: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2",
  medium: "md:col-span-1",
};

const ProjectCard = ({ project, onOpenModal }) => {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-panel/80 p-5 shadow-panel transition duration-500 hover:-translate-y-1 hover:border-accentBlue/40 hover:shadow-neon ${
        sizeClasses[project.size] ?? ""
      }`}
    >
      <div className="absolute -top-16 right-2 h-32 w-32 rounded-full bg-accentBlue/20 blur-3xl transition duration-500 group-hover:bg-accentViolet/25" />
      <div className="mb-5 aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-black/30">
        {project.cover ? (
          <img
            src={toAssetUrl(project.cover)}
            alt={`Captura de ${project.title}`}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-slateDeep via-panelSoft to-panel text-3xl font-bold text-accentBlue">
            {project.mockup}
          </div>
        )}
      </div>

      <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-textMuted">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={`${project.id}-${tech}`}>{tech}</Badge>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-2 rounded-lg border border-accentBlue/30 bg-accentBlue/10 px-3 py-2 text-sm font-medium text-accentBlue transition hover:bg-accentBlue/20"
        >
          Ver más <FiEye />
        </button>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-sm font-medium text-textMain transition hover:border-accentViolet/40 hover:text-accentViolet"
        >
          Repo <FiGithub />
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
