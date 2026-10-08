import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import { webinarConfig } from "../config/webinarConfig";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 h-14 sm:h-16 w-full border-b border-navy-900/[0.06] bg-white/85 backdrop-blur-md">
      <div className="container-page flex h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 min-w-0">
          <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-navy-800 to-navy-950 text-white shadow-sm shadow-navy-900/20">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="truncate text-sm sm:text-base font-bold text-navy-950 tracking-tight">
            {webinarConfig.institution}
          </span>
        </Link>
        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-gold-400/25 bg-gold-500/10 px-3 py-1 text-xs font-semibold text-gold-600">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse-soft" />
          Chairman's Webinar
        </span>
      </div>
    </header>
  );
}
