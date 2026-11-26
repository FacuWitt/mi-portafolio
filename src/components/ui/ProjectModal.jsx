import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiGithub, FiX } from "react-icons/fi";
import { toAssetUrl } from "../../utils/assetUrl";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const reduce = useReducedMotion();
  const closeRef = useRef(null);
  const images = useMemo(() => {
    if (!project) return [];
    if (project.gallery?.length) return project.gallery;
    return project.cover ? [project.cover] : [];
  }, [project]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setActiveIndex(0);
  }, [isOpen, project?.id]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (!images.length) return;
      if (event.key === "ArrowRight") setActiveIndex((c) => (c + 1) % images.length);
      if (event.key === "ArrowLeft") setActiveIndex((c) => (c - 1 + images.length) % images.length);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [images.length, isOpen, onClose]);

  if (!isOpen || !project) return null;

  const canNavigate = images.length > 1;
  const goPrev = () => setActiveIndex((c) => (c - 1 + images.length) % images.length);
  const goNext = () => setActiveIndex((c) => (c + 1) % images.length);

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-ink/70 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle de ${project.title}`}
      onClick={onClose}
    >
      <div
        className="relative grid max-h-[92vh] w-full max-w-6xl overflow-hidden border-[3px] border-ink bg-paper lg:h-[78vh] lg:grid-cols-[1.35fr_1fr]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="absolute right-3 top-3 z-10 border-2 border-ink bg-paper p-1.5 transition hover:bg-ink hover:text-paper"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <FiX />
        </button>

        <div className="relative flex min-h-[38vh] flex-col bg-paperDeep">
          <div className="relative flex flex-1 items-center justify-center overflow-hidden p-4 sm:p-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={`${project.id}-${activeIndex}`}
                src={toAssetUrl(images[activeIndex])}
                alt={`Imagen ${activeIndex + 1} de ${images.length} de ${project.title}`}
                className="max-h-[34vh] w-full object-contain lg:max-h-[62vh]"
                initial={reduce ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: -12 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
          </div>

          {canNavigate && (
            <div className="flex items-center justify-between border-t-2 border-ink px-4 py-2.5">
              <button
                type="button"
                className="border-2 border-ink p-1.5 transition hover:bg-ink hover:text-paper"
                onClick={goPrev}
                aria-label="Imagen anterior"
              >
                <FiChevronLeft />
              </button>
              <p className="text-sm font-semibold tabular-nums">
                {activeIndex + 1} de {images.length}
              </p>
              <button
                type="button"
                className="border-2 border-ink p-1.5 transition hover:bg-ink hover:text-paper"
                onClick={goNext}
                aria-label="Imagen siguiente"
              >
                <FiChevronRight />
              </button>
            </div>
          )}
        </div>

        <div className="overflow-y-auto border-t-[3px] border-ink p-6 sm:p-8 lg:border-l-[3px] lg:border-t-0">
          <p className="text-sm font-semibold text-inkSoft">
            {project.kind} {project.year}
          </p>
          <h3 className="mt-1 pr-10 font-display text-4xl font-black leading-none type-wide">{project.title}</h3>
          <p className="mt-2 font-semibold">{project.subtitle}</p>
          {project.award ? (
            <p className="mt-4 inline-block -rotate-1 bg-mustard px-3 py-1 font-hand text-xl leading-none">
              {project.award}
            </p>
          ) : null}

          <p className="mt-5 leading-relaxed text-ink/90">{project.longDescription || project.description}</p>

          {project.highlights?.length ? (
            <ul className="mt-6 space-y-3 text-[15px] leading-relaxed">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[9px] h-2 w-2 shrink-0 bg-vermilion" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologías">
            {project.technologies.map((tech) => (
              <li key={tech} className="border border-ink/30 bg-white/60 px-2.5 py-1 text-xs font-medium">
                {tech}
              </li>
            ))}
          </ul>

          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition hover:bg-vermilion"
            >
              {project.repoUrl.includes("github") ? "Ver repositorio" : "Ver documentación"} <FiGithub />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
