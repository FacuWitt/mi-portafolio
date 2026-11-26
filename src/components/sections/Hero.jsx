import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import personalInfo from "../../data/personalInfo";
import projects from "../../data/projects";
import { toAssetUrl } from "../../utils/assetUrl";

// Posiciones del abanico de tarjetas (de izquierda a derecha)
const fan = [
  { rotate: -16, x: -330, y: 70 },
  { rotate: -8, x: -168, y: 18 },
  { rotate: 0, x: 0, y: 0 },
  { rotate: 8, x: 168, y: 18 },
  { rotate: 16, x: 330, y: 70 },
];

const Arrow = ({ className = "" }) => (
  <svg viewBox="0 0 120 50" fill="none" className={className} aria-hidden="true">
    <path d="M4 38C30 44 70 40 108 14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M94 10l15 3-5 14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Qué tanto se abre el abanico según el ancho de pantalla
const useFanSpread = () => {
  const get = () => (typeof window === "undefined" ? 0.62 : window.innerWidth < 640 ? 0.3 : window.innerWidth < 1024 ? 0.5 : 0.62);
  const [spread, setSpread] = useState(get);
  useEffect(() => {
    const onResize = () => setSpread(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return spread;
};

const Hero = ({ onOpenProject }) => {
  const reduce = useReducedMotion();
  const spread = useFanSpread();
  // La tarjeta central es MIND: el proyecto más fuerte queda en el centro del abanico
  const fanProjects = [projects[2], projects[1], projects[0], projects[3], projects[4]].filter(Boolean);

  return (
    <section id="hero" className="relative overflow-hidden pb-8 pt-24 sm:pt-28">
      <div className="section-container relative">
        <span className="crosshair left-2 top-2" />
        <span className="crosshair right-2 top-2" />
        <span className="crosshair bottom-[42%] left-2 hidden sm:block" />
        <span className="crosshair bottom-[42%] right-2 hidden sm:block" />

        <div className="flex items-end justify-between gap-6 px-1 pt-6">
          <p className="font-hand text-2xl leading-none text-inkSoft sm:text-3xl">hola, soy</p>
          <p className="hidden text-right text-sm font-medium text-inkSoft sm:block">{personalInfo.location}</p>
        </div>

        {/* Nombre con bloque bermellón detrás */}
        <div className="relative mt-3 select-none">
          <motion.div
            aria-hidden="true"
            className="absolute left-[54%] top-[-8%] h-[116%] w-[22%] origin-bottom bg-vermilion sm:w-[17%]"
            initial={reduce ? false : { scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <h1 className="relative font-display font-black uppercase leading-[0.84] tracking-[-0.02em] type-wide">
            <motion.span
              className="block text-[clamp(3.1rem,13.2vw,10.5rem)]"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              {personalInfo.firstName}
            </motion.span>
            <motion.span
              className="block text-right text-[clamp(3.1rem,13.2vw,10.5rem)]"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {personalInfo.lastName}
            </motion.span>
          </h1>

          <div className="pointer-events-none absolute bottom-[10%] left-[2%] hidden items-end gap-1 md:flex">
            <p className="font-hand text-[1.7rem] leading-tight text-cobalt">
              recién recibido de
              <br />
              Ingeniero en Sistemas
            </p>
            <Arrow className="mb-6 h-12 w-24 text-cobalt" />
          </div>
        </div>

        <div className="mt-8 grid gap-6 border-t-2 border-ink pt-6 md:grid-cols-[1fr_auto] md:items-start">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold">
              {personalInfo.role} <span className="text-inkSoft">y {personalInfo.focus.toLowerCase()}</span>
            </p>
            <p className="mt-3 text-xl leading-snug sm:text-2xl">{personalInfo.statement}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-vermilion"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="border-2 border-ink px-5 py-2.5 text-sm font-semibold transition hover:bg-ink hover:text-paper"
            >
              Escribime
            </a>
          </div>
        </div>
      </div>

      {/* Abanico de proyectos */}
      <div className="relative mx-auto mt-10 h-[260px] max-w-6xl sm:mt-14 sm:h-[330px]" aria-label="Proyectos destacados">
        <p className="absolute left-1/2 top-[86%] -translate-x-1/2 font-hand text-2xl text-inkSoft">
          tocá una tarjeta
        </p>
        {fanProjects.map((project, i) => {
          const pos = fan[i];
          return (
            <motion.button
              key={project.id}
              type="button"
              onClick={() => onOpenProject(project)}
              aria-label={`Ver ${project.title}`}
              className={`group absolute left-1/2 top-0 w-[124px] -ml-[62px] origin-bottom overflow-hidden rounded-[14px] border-[3px] border-ink text-left shadow-[0_18px_30px_-18px_rgba(28,27,26,0.55)] sm:w-[200px] sm:-ml-[100px] ${project.theme.bg} ${
                i === 2 ? "z-30" : i === 1 || i === 3 ? "z-20" : "z-10"
              }`}
              style={{ aspectRatio: "3 / 4" }}
              initial={reduce ? false : { rotate: 0, x: 0, y: 40, opacity: 0 }}
              animate={{ rotate: pos.rotate, x: `${pos.x * spread}px`, y: pos.y, opacity: 1 }}
              whileHover={reduce ? undefined : { y: pos.y - 18, transition: { duration: 0.2 } }}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="h-[62%] overflow-hidden border-b-[3px] border-ink bg-white">
                <img
                  src={toAssetUrl(project.cover)}
                  alt=""
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                />
              </div>
              <div className={`flex h-[38%] flex-col justify-between p-3 ${project.theme.text}`}>
                <p className="font-display text-base font-extrabold leading-none type-wide sm:text-lg">{project.shortTitle ?? project.title}</p>
                <p className={`text-[11px] leading-tight sm:text-xs ${project.theme.muted}`}>{project.year}</p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
