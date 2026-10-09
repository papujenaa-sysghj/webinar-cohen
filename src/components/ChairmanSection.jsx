import { Award, CheckCircle2, GraduationCap, Landmark, Quote, Sparkles, Trophy } from "lucide-react";
import { webinarConfig } from "../config/webinarConfig";

export default function ChairmanSection() {
  const { chairman } = webinarConfig;

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/50 to-white py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-900/10 to-transparent" />

      <div className="container-page">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-gold-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold-600">
            <Sparkles className="h-3.5 w-3.5" /> Leadership & Vision
          </span>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight">
            Meet the Mentor Behind <span className="text-gradient-gold">2,500+ IITians</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-gold-400 to-gold-600" />
        </div>

        <div className="card-elevated mx-auto max-w-4xl overflow-hidden border border-navy-900/10 shadow-xl animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
            {/* Left Column: Brand Emblem & Key Metrics */}
            <div className="relative bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 p-8 flex flex-col items-center justify-between text-center text-white">
              <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-10" />

              <div className="relative z-10 flex flex-col items-center w-full">
                <div className="relative aspect-square w-32 sm:w-36 overflow-hidden rounded-2xl ring-2 ring-gold-400/40 shadow-xl bg-black flex items-center justify-center">
                  {chairman.photo ? (
                    <img
                      src={chairman.photo}
                      alt={chairman.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <video
                      src="/hero-video.mp4#t=1.5"
                      className="h-full w-full object-cover pointer-events-none"
                      playsInline
                      preload="auto"
                      muted
                    />
                  )}
                </div>
                <p className="mt-3.5 text-sm sm:text-base font-extrabold tracking-wider text-gold-400 uppercase drop-shadow-sm">
                  {chairman.name}
                </p>
                <p className="text-xs text-white/70 font-medium mt-0.5">Founder & Chairman</p>
              </div>

              {/* Stat Highlights */}
              <div className="relative z-10 mt-6 w-full space-y-3">
                <div className="rounded-xl border border-gold-500/30 bg-gradient-to-r from-gold-500/15 via-white/5 to-gold-500/15 p-3 shadow-lg">
                  <p className="font-display text-2xl sm:text-3xl font-black text-gradient-gold inline-block animate-pulse-glow">
                    2,500+
                  </p>
                  <p className="text-xs text-white/85 font-semibold tracking-wide mt-0.5">IITians Mentored</p>
                </div>
                <div className="rounded-xl border border-gold-500/30 bg-gradient-to-r from-gold-500/15 via-white/5 to-gold-500/15 p-3 shadow-lg">
                  <p className="font-display text-xl sm:text-2xl font-black text-gradient-gold inline-block animate-pulse-glow [animation-delay:1.25s]">
                    IIT Kharagpur
                  </p>
                  <p className="text-xs text-white/85 font-semibold tracking-wide mt-0.5">Mechanical Engineer</p>
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Mentorship Message */}
            <div className="p-7 sm:p-10 flex flex-col justify-center bg-white">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-gold-500/15 px-2.5 py-0.5 text-xs font-bold text-gold-700">
                  Founder & Chairman
                </span>
                <span className="rounded-md bg-navy-900/5 px-2.5 py-0.5 text-xs font-medium text-navy-800">
                  Vidwan Classes & Cohen International School
                </span>
              </div>

              <h3 className="font-display mt-2 text-2xl sm:text-3xl font-bold text-navy-950">
                {chairman.name}
              </h3>

              <p className="mt-1.5 inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-navy-800">
                <Landmark className="h-4.5 w-4.5 text-gold-600 shrink-0" /> {chairman.education}
              </p>

              <div className="relative mt-5 pl-5 border-l-2 border-gold-400/50">
                <Quote className="absolute -left-[11px] -top-1 h-5 w-5 text-gold-500 bg-white" />
                <p className="text-sm sm:text-[15px] leading-relaxed text-navy-900/85 italic">
                  "Having mentored thousands of students to top ranks in IIT-JEE and Medical entrances across Odisha, I believe mastering <strong className="font-semibold text-navy-950 not-italic">Case-Based & Analytical Questions</strong> is the key to scoring <strong className="font-semibold text-navy-950 not-italic">95%+ in 10th Boards</strong>. In this webinar, I will share the exact frameworks students need to solve them with speed and confidence."
                </p>
              </div>

              {/* Key takeaways list */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-5 border-t border-navy-900/5 text-xs text-navy-900/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span className="font-medium text-navy-950">Mastering Case-Based Board Questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>IIT-JEE & NEET Foundation Roadmap</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Interactive Q&A with Parents</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Guidance on Residential Discipline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
