import { Link } from "react-router-dom";
import { webinarConfig } from "../config/webinarConfig";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 h-14 sm:h-16 w-full border-b border-navy-900/[0.06] bg-white/90 backdrop-blur-md">
      <div className="container-page flex h-full items-center justify-between">
        <Link to="/" className="flex items-center min-w-0 group" aria-label={webinarConfig.institution}>
          <img
            src={webinarConfig.logo || "/logo.png"}
            alt={webinarConfig.institution}
            className="h-8 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>
        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-gold-400/25 bg-gold-500/10 px-3 py-1 text-xs font-semibold text-gold-600">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse-soft" />
          Chairman's Webinar
        </span>
      </div>
    </header>
  );
}
