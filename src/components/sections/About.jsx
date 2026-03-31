import { motion } from "framer-motion";
import { FiCpu, FiCode, FiPenTool } from "react-icons/fi";
import personalInfo from "../../data/personalInfo";
import Badge from "../ui/Badge";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const highlights = [
  { icon: FiCode, label: "Backend y Frontend" },
  { icon: FiCpu, label: "Algoritmia y Simulacion" },
  { icon: FiPenTool, label: "Diseño orientado a UX" },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-7 sm:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">Sobre mi</h2>
              <p className="mt-4 text-textMuted">{personalInfo.shortBio}</p>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                {personalInfo.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="rounded-2xl border border-white/10 bg-slateDeep/70 p-6">
              <h3 className="font-display text-xl font-semibold">Enfoque Profesional</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                <Badge className="border-accentBlue/35 bg-accentBlue/10 text-accentBlue">UTN FRC</Badge>
                <Badge className="border-accentViolet/35 bg-accentViolet/10 text-accentViolet">Fullstack</Badge>
                <Badge>Pensamiento sistemico</Badge>
              </div>
              <div className="mt-6 space-y-3">
                {highlights.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl border border-white/10 p-3">
                    <span className="rounded-lg bg-white/5 p-2 text-accentBlue">
                      <Icon />
                    </span>
                    <p className="text-sm text-slate-200">{label}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
