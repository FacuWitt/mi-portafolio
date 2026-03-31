import { motion } from "framer-motion";
import { FiExternalLink, FiMail } from "react-icons/fi";
import personalInfo from "../../data/personalInfo";
import Button from "../ui/Button";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-slateDeep/70 p-8 sm:p-12"
        >
          <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-accentBlue/20 blur-3xl" />
          <div className="absolute -left-8 bottom-0 h-36 w-36 rounded-full bg-accentViolet/20 blur-3xl" />

          <div className="relative">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Construyamos algo excelente</h2>
            <p className="mt-4 max-w-2xl text-textMuted">
              Estoy disponible para colaborar en proyectos, roles de desarrollo o propuestas donde pueda aportar valor tecnico y criterio de producto.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {personalInfo.socialLinks.map((link) => (
                <Button
                  key={link.label}
                  as="a"
                  href={link.href}
                  variant="secondary"
                  className="gap-2"
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noreferrer"}
                >
                  {link.label}
                  {link.href.startsWith("mailto") ? <FiMail /> : <FiExternalLink />}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
