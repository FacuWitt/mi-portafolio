const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-container flex flex-col items-center justify-between gap-3 text-center text-sm text-textMuted md:flex-row md:text-left">
        <p>© {new Date().getFullYear()} Facundo Witt. Todos los derechos reservados.</p>
        <p>Diseniado y desarrollado con React + Tailwind.</p>
      </div>
    </footer>
  );
};

export default Footer;
