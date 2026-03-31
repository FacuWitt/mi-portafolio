import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mi", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return ( 
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition duration-300 ${
        scrolled ? "bg-obsidian/75 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between">
        <a href="#hero" className="font-display text-lg font-bold tracking-tight text-white">
          Facundo <span className="text-accentBlue">Witt</span>
        </a>

        

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-textMuted transition hover:text-accentBlue"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg border border-white/15 p-2 text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {isOpen && (
        <nav className="section-container pb-4 md:hidden">
          <div className="glass-panel rounded-xl p-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-textMuted transition hover:bg-white/5 hover:text-accentBlue"
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
