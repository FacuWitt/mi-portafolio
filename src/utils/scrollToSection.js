const NAVBAR_OFFSET = 72;

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Desplazamiento rápido pero suave hasta un elemento, descontando la barra fija.
// Si el usuario prefiere menos movimiento, salta directo.
export const scrollToElement = (element, extraOffset = 0) => {
  if (!element) return;

  const targetY = element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET - extraOffset;
  const startY = window.scrollY;
  const distance = targetY - startY;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const finish = () => element.focus({ preventScroll: true });

  if (prefersReduced || Math.abs(distance) < 4) {
    window.scrollTo(0, targetY);
    finish();
    return;
  }

  // Entre 450 y 850 ms según la distancia: rápido, sin ser brusco
  const duration = Math.min(850, Math.max(450, Math.abs(distance) * 0.35));
  const start = performance.now();

  // El scroll suave nativo del html pelearía con esta animación
  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";

  const step = (now) => {
    const progress = Math.min(1, (now - start) / duration);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      root.style.scrollBehavior = previousBehavior;
      finish();
    }
  };

  requestAnimationFrame(step);
};
