import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const featuredQuote = {
  text: "La mejor forma de predecir el futuro es inventarlo.",
  author: "Alan Kay",
};

const Quote = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="quote" className="pb-20 sm:pb-28">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative glass-panel rounded-3xl p-10  sm:px-10 border-none"
        >
          <blockquote className="relative border-l-2 border-white/30 pl-6 sm:pl-8">
            <p className="font-quote text-3xl font-medium leading-relaxed text-textMain/95 sm:text-4xl">
              "{featuredQuote.text}"
            </p>
            <footer className="font-quote mt-5 text-right text-base italic tracking-wide text-textMuted sm:text-lg">
              - {featuredQuote.author}
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default Quote;
