import { ChevronDown } from "lucide-react";

const baseClasses =
  "w-full appearance-none rounded-xl border bg-navy-900/[0.015] px-4 py-3 text-base text-navy-950 transition-all duration-150 focus:outline-none focus:ring-4 focus:bg-white";

export default function Select({ error, className = "", children, ...props }) {
  const stateClasses = error
    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
    : "border-navy-900/15 focus:border-navy-600 focus:ring-navy-600/10";

  return (
    <div className="relative">
      <select className={`${baseClasses} ${stateClasses} pr-10 ${className}`} {...props}>
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-navy-900/40"
        aria-hidden="true"
      />
    </div>
  );
}
