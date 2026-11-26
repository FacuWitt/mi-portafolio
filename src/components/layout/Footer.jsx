const Footer = () => {
  return (
    <footer className="border-t-2 border-ink py-8">
      <div className="section-container flex flex-col justify-between gap-2 text-sm text-inkSoft sm:flex-row">
        <p>© {new Date().getFullYear()} Facundo Witt</p>
        <p>Hecho en Córdoba con React y Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;
