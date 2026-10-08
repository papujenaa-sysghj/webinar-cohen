import { GraduationCap, Landmark, Quote } from "lucide-react";
import { webinarConfig } from "../config/webinarConfig";

export default function ChairmanSection() {
  const { chairman } = webinarConfig;

  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-900/10 to-transparent" />

      <div className="container-page">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
            Leadership
          </span>
          <h2 className="font-display mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight">
            Meet Our Chairman
          </h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-gold-400 to-gold-600" />
        </div>

        <div className="card-elevated mx-auto max-w-4xl overflow-hidden animate-fade-up">
          <div className="grid grid-cols-1 sm:grid-cols-[260px_1fr]">
            <div className="relative bg-gradient-to-br from-navy-900 to-navy-950 flex items-center justify-center p-8 sm:p-0">
              <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-10" />
              <div className="relative aspect-square w-36 sm:w-full sm:h-full overflow-hidden rounded-2xl sm:rounded-none ring-2 ring-gold-400/30 sm:ring-0 bg-navy-800 flex items-center justify-center">
                {chairman.photo ? (
                  <img
                    src={chairman.photo}
                    alt={chairman.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <GraduationCap className="h-14 w-14 text-white/25" strokeWidth={1.25} />
                )}
              </div>
            </div>

            <div className="p-7 sm:p-10 flex flex-col justify-center">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-950">
                {chairman.name}
              </h3>
              <p className="mt-1.5 text-sm font-semibold uppercase tracking-wide text-gold-600">
                Founder & Chairman
              </p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-navy-700/70">
                <Landmark className="h-4 w-4" /> {chairman.education}
              </p>

              <div className="relative mt-6 pl-5 border-l-2 border-gold-400/40">
                <Quote className="absolute -left-[11px] -top-1 h-5 w-5 text-gold-500 bg-white" />
                <p className="text-sm sm:text-[15px] leading-relaxed text-navy-900/80">
                  {chairman.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
