import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Habilidades", href: "#skills" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-rule bg-paper/90 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5" aria-label="Facundo Witt, ir al inicio">
          <span className="grid h-8 w-8 place-items-center bg-vermilion font-display text-sm font-black text-paper type-wide">
            FW
          </span>
          <span className="hidden font-display text-[15px] font-semibold sm:inline">Facundo Witt</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-inkSoft transition hover:text-ink">
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border-2 border-ink px-4 py-1.5 text-sm font-semibold transition hover:bg-ink hover:text-paper"
          >
            Contacto
          </a>
        </nav>

        <button
          type="button"
          className="border-2 border-ink p-1.5 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {isOpen && (
        <nav className="section-container pb-4 md:hidden" aria-label="Principal móvil">
          <div className="border-2 border-ink bg-paper">
            {[...navItems, { label: "Contacto", href: "#contact" }].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block border-b border-rule px-4 py-3 text-sm font-medium last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
