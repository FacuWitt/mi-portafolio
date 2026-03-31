import { useEffect, useRef, useState } from "react";

const useScrollAnimation = (options = { threshold: 0.2, triggerOnce: true }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.triggerOnce) observer.unobserve(node);
        } else if (!options.triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold: options.threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options.threshold, options.triggerOnce]);

  return { ref, isVisible };
};

export default useScrollAnimation;
