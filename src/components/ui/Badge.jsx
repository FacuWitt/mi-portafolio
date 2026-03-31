const Badge = ({ children, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-textMuted ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
