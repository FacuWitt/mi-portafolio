import { motion } from "framer-motion";
import { FiDatabase, FiLayers, FiSettings, FiServer } from "react-icons/fi";
import skills from "../../data/skills";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const iconByCategory = {
  Frontend: FiLayers,
  Backend: FiServer,
  "Data & DB": FiDatabase,
  "Tools & Gestion": FiSettings,
};

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Habilidades</h2>
          <p className="mt-3 text-textMuted">
            Tecnologias y herramientas que uso para construir productos funcionales, mantenibles y visualmente solidos.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {skills.map((group) => {
              const Icon = iconByCategory[group.category] ?? FiLayers;
              return (
                <article
                  key={group.category}
                  className="rounded-2xl border border-white/10 bg-panel/70 p-5 transition duration-300 hover:border-accentViolet/35 hover:shadow-neon"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-lg bg-accentBlue/10 p-2 text-accentBlue">
                      <Icon />
                    </span>
                    <h3 className="font-display text-xl font-semibold">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={`${group.category}-${item}`}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
