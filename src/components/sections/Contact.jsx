import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiCopy } from "react-icons/fi";
import personalInfo from "../../data/personalInfo";

const copyText = async (text) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "true");
    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(textArea);
    return copied;
  } catch {
    return false;
  }
};

const Contact = () => {
  const [status, setStatus] = useState("");
  const timeoutRef = useRef(null);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const handleCopy = async () => {
    const copied = await copyText(personalInfo.email);
    setStatus(copied ? "Email copiado" : "No se pudo copiar. Seleccioná el email y copialo a mano.");
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section id="contact" className="scroll-mt-16 py-20 sm:py-28">
      <div className="section-container">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -top-4 left-[8%] h-[calc(100%+2rem)] w-[18%] bg-vermilion sm:left-[30%] sm:w-[12%]"
          />
          <h2 className="relative font-display text-[clamp(2rem,9vw,7.5rem)] font-black uppercase leading-[0.88] type-wide">
            ¿Hablamos?
          </h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="max-w-[48ch] text-lg leading-relaxed">
              Si tenés un proyecto, un puesto o una idea en la que pueda sumar, escribime.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="break-all font-display text-2xl font-extrabold underline decoration-vermilion decoration-[3px] underline-offset-[6px] sm:text-3xl"
              >
                {personalInfo.email}
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 border-2 border-ink px-3 py-1.5 text-sm font-semibold transition hover:bg-ink hover:text-paper"
              >
                <FiCopy aria-hidden="true" /> Copiar
              </button>
            </div>
            <p className="mt-3 h-6 font-hand text-xl text-leaf" aria-live="polite">
              {status}
            </p>
          </div>

          <ul className="flex flex-wrap gap-3 md:justify-end">
            {personalInfo.socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-vermilion"
                >
                  {link.label} <FiArrowUpRight aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
