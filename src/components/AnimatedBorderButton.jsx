export const AnimatedBorderButton = ({
  children,
  onClick,
  className = "",
  size = "md",
  ...props
}) => {
  const sizeClass =
    size === "sm"
      ? "px-5 py-2.5 text-xs"
      : size === "lg"
      ? "px-8 py-4 text-base"
      : "px-6 py-3 text-sm";

  return (
    <button
      onClick={onClick}
      className={`relative bg-slate-900/60 border border-slate-800 text-slate-100 hover:border-teal-500/50 hover:text-teal-300 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 font-semibold rounded-full overflow-visible group cursor-pointer ${sizeClass} ${className}`}
      {...props}
    >
      {/* Animated SVG Border on Hover */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none rounded-full"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="#14b8a6"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};