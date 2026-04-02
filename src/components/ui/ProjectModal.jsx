import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import Badge from "./Badge";
import { toAssetUrl } from "../../utils/assetUrl";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const images = useMemo(() => {
    if (!project) return [];
    if (project.gallery?.length) return project.gallery;
    return project.cover ? [project.cover] : [];
  }, [project]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setActiveIndex(0);
    }
  }, [isOpen, project?.id]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (!images.length) return;
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % images.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + images.length) % images.length);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [images.length, isOpen, onClose]);

  if (!isOpen || !project) return null;

  const canNavigate = images.length > 1;

  const goPrev = () => {
    if (!images.length) return;
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const goNext = () => {
    if (!images.length) return;
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const imageVariants = {
    initial: { opacity: 0, x: 50, scale: 1.01, filter: "blur(3px)"},
    animate: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)"},
    exit: { opacity: 0, x: -10, scale: 0.99, filter: "blur(3px)"},
  };

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-black/75 p-2 sm:p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle de ${project.title}`}
      onClick={onClose}
    >
      <div
        className="relative h-[64vh] w-full max-w-7xl overflow-hidden rounded-2xl border border-white/15 bg-slateDeep shadow-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-4 top-4 z-10 rounded-lg border border-white/20 bg-black/40 p-2 text-white transition hover:border-accentBlue/60"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <FiX />
        </button>

        <div className="grid h-full gap-4 lg:grid-cols-[1fr_0.65fr]">
          <div className="relative bg-black/40 p-2 sm:p-4">
            {images.length ? (
              <div className="flex h-[30vh] w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/50 sm:h-[20vh] lg:h-full">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={`${project.id}-${activeIndex}-${images[activeIndex]}`}
                    src={toAssetUrl(images[activeIndex])}
                    alt={`Captura ${activeIndex + 1} de ${project.title}`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-xl border border-white/10 text-6xl font-bold text-accentBlue">
                {project.mockup}
              </div>
            )}

            {canNavigate && (
              <>
                <button
                  type="button"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-2 text-white transition hover:border-accentBlue/60"
                  onClick={goPrev}
                  aria-label="Imagen anterior"
                >
                  <FiChevronLeft />
                </button>
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-2 text-white transition  hover:border-accentBlue/60"
                  onClick={goNext}
                  aria-label="Imagen siguiente"
                >
                  <FiChevronRight />
                </button>
              </>
            )}

            {canNavigate && (
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                {images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      index === activeIndex ? "bg-accentBlue" : "bg-white/35"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="h-full overflow-y-auto p-5 sm:p-8">
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-textMuted sm:text-base">
              {project.longDescription || project.description}
            </p>

            {project.highlights?.length ? (
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accentViolet" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={`${project.id}-${tech}`}>{tech}</Badge>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-sm font-medium text-textMain transition hover:border-accentViolet/40 hover:text-accentViolet"
              >
                Repositorio <FiGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
