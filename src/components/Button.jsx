const sizeClasses = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export const Button = ({
  children,
  size = "md",
  variant = "primary",
  className = "",
  ...props
}) => {
  const resolvedSize = sizeClasses[size] ?? sizeClasses.md;

  const variantStyles =
    variant === "secondary"
      ? "bg-slate-900/80 text-slate-200 border border-slate-700 hover:bg-slate-800 hover:text-teal-300"
      : variant === "outline"
      ? "bg-transparent text-slate-200 border border-teal-500/40 hover:bg-teal-500/10 hover:text-teal-300"
      : "bg-teal-500 text-slate-950 font-bold border border-teal-400/40 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/30";

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed ${resolvedSize} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};