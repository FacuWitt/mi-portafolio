import clsx from "clsx";

const variants = {
  primary:
    "bg-gradient-to-r from-accentBlue to-accentViolet text-slate-950 shadow-neon hover:scale-[1.02] hover:brightness-110",
  secondary:
    "border border-white/20 bg-white/5 text-textMain hover:border-accentBlue/60 hover:bg-accentBlue/10",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-base",
  lg: "px-6 py-3 text-base",
};

const Button = ({
  as: Component = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={clsx(
        "inline-flex items-center justify-center rounded-xl font-semibold transition duration-300",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
