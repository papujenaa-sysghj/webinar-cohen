import { GraduationCap } from "lucide-react";
import { webinarConfig } from "../config/webinarConfig";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-950 text-white/70">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="container-page py-10 sm:py-12 flex flex-col items-center gap-3 text-center">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gold-300">
          <GraduationCap className="h-5 w-5" />
        </span>
        <p className="text-sm font-semibold text-white">{webinarConfig.institution}</p>
        <p className="text-xs leading-relaxed max-w-md text-white/50">
          This is a frontend demonstration of the webinar registration experience.
          Payment details are collected for manual verification by the school team.
        </p>
        <p className="text-[11px] text-white/30 mt-2">
          © {new Date().getFullYear()} {webinarConfig.institution}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
