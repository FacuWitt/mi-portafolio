import personalInfo from "../../data/personalInfo";
import { toAssetUrl } from "../../utils/assetUrl";

const About = () => {
  const { now } = personalInfo;

  return (
    <section id="about" className="scroll-mt-16 py-20 sm:py-28">
      <div className="section-container">
        <div className="grid gap-12 md:grid-cols-[260px_1fr] md:gap-16">
          <div className="relative mx-auto w-[220px] md:mx-0 md:mt-10 md:w-full">
            <figure className="photo-frame relative -rotate-3">
              <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-[-4deg]" aria-hidden="true" />
              <img
                src={toAssetUrl(personalInfo.photo)}
                alt="Facundo Witt"
                className="aspect-square w-full object-cover grayscale-[15%]"
                loading="lazy"
              />
              <figcaption className="absolute bottom-2 left-0 right-0 text-center font-hand text-xl text-inkSoft">
                Córdoba, 2026
              </figcaption>
            </figure>
          </div>

          <div>
            <h2 className="font-display text-4xl font-black leading-none type-wide sm:text-5xl">Sobre mí</h2>
            <div className="mt-8 max-w-[62ch] space-y-5 text-[17px] leading-relaxed text-ink/90">
              {personalInfo.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-8 flex flex-wrap gap-3" aria-label="En qué me enfoco">
              {personalInfo.tags.map((tag, i) => (
                <li
                  key={tag.label}
                  className={`washi px-4 py-1.5 text-sm font-semibold ${tag.color}`}
                  style={{ transform: `rotate(${[-1.5, 1, -0.5, 1.5][i % 4]}deg)` }}
                >
                  {tag.label}
                </li>
              ))}
            </ul>

            <aside className="relative mt-12 max-w-xl rotate-[0.6deg] bg-mustard/90 p-6 shadow-[0_10px_24px_-16px_rgba(28,27,26,0.6)]">
              <span className="tape tape--blue -top-3 right-8 rotate-[6deg]" aria-hidden="true" />
              <p className="font-hand text-3xl leading-none">ahora</p>
              <p className="mt-3 font-display text-xl font-extrabold">
                {now.place} <span className="font-semibold">· {now.area}</span>
              </p>
              <p className="text-sm font-medium text-ink/70">{now.since}</p>
              <p className="mt-3 leading-relaxed">{now.text}</p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
