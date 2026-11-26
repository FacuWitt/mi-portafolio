import skills from "../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-16 py-20 sm:py-28">
      <div className="section-container">
        <h2 className="font-display text-4xl font-black leading-none type-wide sm:text-5xl">Habilidades</h2>

        <dl className="mt-12 border-t-2 border-ink">
          {skills.map((group) => (
            <div
              key={group.category}
              className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[220px_1fr] sm:items-baseline sm:gap-6"
            >
              <dt className="font-hand text-[1.7rem] leading-none text-cobalt">{group.category}</dt>
              <dd className="text-[17px] leading-relaxed">{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Skills;
