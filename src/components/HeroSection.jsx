import { Link } from "react-router-dom";
import { CalendarDays, Clock, GraduationCap, Sparkles, UsersRound, Wifi } from "lucide-react";
import { webinarConfig } from "../config/webinarConfig";
import Button from "./ui/Button";

export default function HeroSection() {
  const { chairman, webinar, fee, currencySymbol } = webinarConfig;

  return (
    <section className="relative overflow-hidden bg-navy-950">
      {/* Layered background treatment */}
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.15]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/98 to-navy-900" />
      <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-navy-600/40 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/3 -left-20 h-72 w-72 rounded-full bg-gold-500/15 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-navy-500/20 blur-[90px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="container-page relative z-10 py-12 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-up">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-gold-500/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-gold-300">
              <Sparkles className="h-3.5 w-3.5" />
              Exclusive Chairman's Webinar
            </span>

            <h1 className="font-display mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.12] text-white tracking-tight">
              An Exclusive Webinar with the Chairman of{" "}
              <span className="text-gradient-gold">Cohen International School</span>
            </h1>

            <div className="mt-6 flex flex-col items-center lg:items-start gap-1">
              <p className="text-lg sm:text-xl font-semibold text-white">{chairman.name}</p>
              <p className="text-sm sm:text-base text-white/65">{chairman.designation}</p>
              <p className="text-sm sm:text-base font-medium text-gold-300">{chairman.education}</p>
            </div>

            <div className="mt-7 inline-flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white/75">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-gold-400" /> {webinar.date}
              </span>
              <span className="hidden sm:block h-4 w-px bg-white/15" />
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold-400" /> {webinar.time}
              </span>
            </div>

            <div className="mt-9 flex flex-col items-center lg:items-start gap-5">
              <Button as={Link} to="/register" variant="gold" size="lg" className="w-full sm:w-auto">
                Register Now — {currencySymbol}{fee}
              </Button>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs sm:text-sm text-white/55">
                <span className="inline-flex items-center gap-1.5">
                  <Wifi className="h-4 w-4" /> {webinar.mode}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <UsersRound className="h-4 w-4" /> Limited Registrations
                </span>
                <span>Parent & Student Orientation</span>
              </div>
            </div>
          </div>

          {/* Chairman photo card */}
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in">
            <div className="relative w-full max-w-[19rem] sm:max-w-sm animate-float">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold-500/25 via-gold-400/10 to-transparent blur-xl" />
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.75rem] border border-gold-400/30" />

              <div className="relative rounded-[1.75rem] bg-gradient-to-b from-white/[0.08] to-white/0 p-2 ring-1 ring-white/10">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
                  {chairman.photo ? (
                    <img
                      src={chairman.photo}
                      alt={chairman.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2.5 text-white/35">
                      <GraduationCap className="h-16 w-16" strokeWidth={1.25} />
                      <span className="text-xs tracking-wide">Chairman Photo</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating credential badge — kept within the wrapper's own box so it
                  can't overlap the stacked content below on narrow screens */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[88%] rounded-xl border border-navy-900/5 bg-white px-4 py-3 text-center shadow-[0_16px_40px_-12px_rgba(11,31,63,0.35)]">
                <p className="text-xs font-bold text-navy-950 truncate">{chairman.name}</p>
                <p className="mt-0.5 text-[11px] font-medium text-gold-600">
                  Founder & Chairman
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
