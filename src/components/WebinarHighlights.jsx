import {
  UserRound,
  Landmark,
  BookOpenCheck,
  Sprout,
  PenSquare,
  Building2,
} from "lucide-react";
import { webinarConfig } from "../config/webinarConfig";

const ICONS = {
  UserRound,
  Landmark,
  BookOpenCheck,
  Sprout,
  PenSquare,
  Building2,
};

export default function WebinarHighlights() {
  return (
    <section className="relative bg-navy-950/[0.025] py-16 sm:py-24">
      <div className="container-page">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
            Agenda
          </span>
          <h2 className="font-display mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight">
            What This Webinar Covers
          </h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-gold-400 to-gold-600" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {webinarConfig.highlights.map((item, index) => {
            const Icon = ICONS[item.icon] ?? UserRound;
            return (
              <div
                key={item.title}
                className="group relative card-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-16px_rgba(11,31,63,0.22)] hover:border-gold-400/30 animate-fade-up"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <span className="absolute top-5 right-6 font-display text-3xl font-bold text-navy-900/[0.06] group-hover:text-gold-500/15 transition-colors duration-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-900 to-navy-800 text-white shadow-sm shadow-navy-900/20 group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-navy-950 transition-colors duration-300">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="relative mt-4 text-base font-bold text-navy-950">{item.title}</h3>
                <p className="relative mt-1.5 text-sm leading-relaxed text-navy-900/60">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
