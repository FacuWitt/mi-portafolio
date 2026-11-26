import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import personalInfo from "../../data/personalInfo";
import projects from "../../data/projects";
import { toAssetUrl } from "../../utils/assetUrl";
import { scrollToElement } from "../../utils/scrollToSection";

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
  const get = () => (typeof window === "undefined" ? 0.76 : window.innerWidth < 640 ? 0.33 : window.innerWidth < 1024 ? 0.6 : 0.76);
  const [spread, setSpread] = useState(get);
  useEffect(() => {
    const onResize = () => setSpread(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return spread;
};

const Hero = () => {
  const reduce = useReducedMotion();
  const spread = useFanSpread();
  // Tarjeta bajo el mouse o con foco: pasa adelante para que se lea
  const [activeId, setActiveId] = useState(null);
  // La última tarjeta activa conserva su capa un instante mientras vuelve a su lugar
  const [returningId, setReturningId] = useState(null);
  // Hasta que termina la entrada del abanico se usa la animación de carga
  const [entered, setEntered] = useState(Boolean(reduce));
  const returnTimer = useRef(null);

  useEffect(() => {
    const t = window.setTimeout(() => setEntered(true), 1500);
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(returnTimer.current);
    };
  }, []);

  const activate = (id) => {
    window.clearTimeout(returnTimer.current);
    setReturningId(null);
    setActiveId(id);
  };

  const release = (id) => {
    setActiveId((current) => (current === id ? null : current));
    setReturningId(id);
    window.clearTimeout(returnTimer.current);
    returnTimer.current = window.setTimeout(() => setReturningId(null), 220);
  };

  // 48px extra para que la pestaña de la franja quede a la vista bajo la barra
  const goToProject = (id) => scrollToElement(document.getElementById(`proyecto-${id}`), 48);
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
          const isActive = activeId === project.id;
          const isDimmed = activeId !== null && !isActive;
          const baseZ = i === 2 ? 30 : i === 1 || i === 3 ? 20 : 10;
          const zIndex = isActive ? 50 : returningId === project.id ? 45 : baseZ;
          const ease = [0.22, 1, 0.36, 1];
          const transition = !entered
            ? { duration: 0.7, delay: 0.5 + i * 0.05, ease }
            : reduce
              ? { duration: 0 }
              : { duration: isActive ? 0.3 : 0.2, ease };
          return (
            <motion.button
              key={project.id}
              type="button"
              onClick={() => goToProject(project.id)}
              onMouseEnter={() => activate(project.id)}
              onMouseLeave={() => release(project.id)}
              onFocus={() => activate(project.id)}
              onBlur={() => release(project.id)}
              aria-label={`Ir al proyecto ${project.title}`}
              className={`group absolute left-1/2 top-0 w-[124px] -ml-[62px] origin-bottom overflow-hidden rounded-[14px] border-[3px] border-ink text-left sm:w-[200px] sm:-ml-[100px] ${project.theme.bg}`}
              style={{
                aspectRatio: "3 / 4",
                zIndex,
              }}
              initial={
                reduce
                  ? false
                  : { rotate: 0, x: 0, y: 40, opacity: 0, scale: 1, filter: "brightness(1) saturate(1) blur(0px)" }
              }
              animate={{
                // La activa se endereza un poco, sube, se agranda y gana sombra
                rotate: isActive ? pos.rotate * 0.4 : pos.rotate,
                x: `${pos.x * spread}px`,
                y: isActive ? pos.y - 28 : pos.y,
                scale: isActive ? 1.07 : 1,
                opacity: 1,
                // Las demás se apagan para que resalte la elegida
                filter: isDimmed
                  ? "brightness(0.9) saturate(0.85) blur(1.5px)"
                  : "brightness(1) saturate(1) blur(0px)",
                boxShadow: isActive
                  ? "0 34px 48px -20px rgba(28,27,26,0.6)"
                  : "0 18px 30px -18px rgba(28,27,26,0.55)",
              }}
              transition={transition}
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
