const base =
  "relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.98]";

const variants = {
  primary:
    "bg-gradient-to-b from-navy-800 to-navy-900 text-white shadow-lg shadow-navy-900/25 hover:shadow-xl hover:shadow-navy-900/30 hover:-translate-y-0.5 hover:from-navy-700 hover:to-navy-800 focus-visible:ring-navy-700 focus-visible:ring-offset-white",
  gold:
    "bg-gradient-to-b from-gold-400 to-gold-600 text-navy-950 shadow-lg shadow-gold-500/35 hover:shadow-xl hover:shadow-gold-500/40 hover:-translate-y-0.5 hover:brightness-[1.04] focus-visible:ring-gold-500 focus-visible:ring-offset-white",
  outline:
    "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white focus-visible:ring-navy-700 focus-visible:ring-offset-white",
  ghost:
    "text-navy-700 hover:bg-navy-900/5 focus-visible:ring-navy-700 focus-visible:ring-offset-white",
};

const sizes = {
  md: "px-5 py-3 text-sm sm:text-base",
  lg: "px-6 py-4 text-base sm:text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "lg",
  className = "",
  as: Component = "button",
  loading = false,
  disabled = false,
  ...props
}) {
  return (
    <Component
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {children}
    </Component>
  );
}
