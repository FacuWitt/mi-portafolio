import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiMail } from "react-icons/fi";
import personalInfo from "../../data/personalInfo";
import Button from "../ui/Button";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const EMAIL_ADDRESS = "facu.witt@gmail.com";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [copyMessage, setCopyMessage] = useState("");
  const copyMessageTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (copyMessageTimeoutRef.current) {
        window.clearTimeout(copyMessageTimeoutRef.current);
      }
    };
  }, []);

  const copyEmailToClipboard = async (email) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
        return true;
      }

      const textArea = document.createElement("textarea");
      textArea.value = email;
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

  const handleEmailClick = async (event, href) => {
    event.preventDefault();

    const copied = await copyEmailToClipboard(EMAIL_ADDRESS);

    if (!copied) {
      setCopyMessage("No pude copiar el email automáticamente.");
      if (copyMessageTimeoutRef.current) {
        window.clearTimeout(copyMessageTimeoutRef.current);
      }
      copyMessageTimeoutRef.current = window.setTimeout(() => {
        setCopyMessage("");
      }, 3000);
      return;
    }

    setCopyMessage("Mi email fue copiado correctamente.");

    if (copyMessageTimeoutRef.current) {
      window.clearTimeout(copyMessageTimeoutRef.current);
    }

    copyMessageTimeoutRef.current = window.setTimeout(() => {
      setCopyMessage("");
      window.location.href = href;
    }, 3000);
  };

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
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Construyamos algo juntos!</h2>
            <p className="mt-4 max-w-2xl text-textMuted">
              Estoy disponible para colaborar en proyectos donde pueda aportar valor.
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
                  onClick={
                    link.href.startsWith("mailto")
                      ? (event) => handleEmailClick(event, link.href)
                      : undefined
                  }
                >
                  {link.label}
                  {link.href.startsWith("mailto") ? <FiMail /> : <FiExternalLink />}
                </Button>
              ))}
            </div>

            {copyMessage ? (
              <p className="mt-4 text-sm text-accentBlue" aria-live="polite">
                {copyMessage}
              </p>
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
