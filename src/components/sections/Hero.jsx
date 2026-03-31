import { motion } from "framer-motion";
import Button from "../ui/Button";
import personalInfo from "../../data/personalInfo";

const Hero = () => {
  return (
    <section id="hero" className="relative grid min-h-screen place-items-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0 bg-grain" />
      <div className="pointer-events-none absolute left-[-8%] top-[-16%] h-72 w-72 rounded-full bg-accentBlue/30 blur-[90px] animate-pulseGlow" />
      <div className="pointer-events-none absolute bottom-[-8%] right-[-4%] h-80 w-80 rounded-full bg-accentViolet/30 blur-[100px] animate-pulseGlow" />

      <div className="section-container relative grid-noise py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 inline-flex rounded-full border border-accentBlue/30 bg-accentBlue/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accentBlue">
            Portfolio 2026
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
            {personalInfo.name}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-textMuted sm:text-xl">{personalInfo.role}</p>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {personalInfo.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button as="a" href="#projects" variant="primary" size="lg">
              {personalInfo.ctas.primary}
            </Button>
            <Button as="a" href="#contact" variant="secondary" size="lg">
              {personalInfo.ctas.secondary}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
