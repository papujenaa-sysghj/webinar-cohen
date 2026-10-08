const baseClasses =
  "w-full rounded-xl border bg-navy-900/[0.015] px-4 py-3 text-base text-navy-950 placeholder:text-navy-900/35 transition-all duration-150 focus:outline-none focus:ring-4 focus:bg-white";

export default function Input({ error, className = "", ...props }) {
  const stateClasses = error
    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
    : "border-navy-900/15 focus:border-navy-600 focus:ring-navy-600/10";

  return <input className={`${baseClasses} ${stateClasses} ${className}`} {...props} />;
}
