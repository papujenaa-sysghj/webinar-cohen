import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Clock, Play, Sparkles, UsersRound, Volume2, VolumeX, Wifi } from "lucide-react";
import { webinarConfig } from "../config/webinarConfig";
import Button from "./ui/Button";

export default function HeroSection() {
  const { chairman, webinar, fee, currencySymbol } = webinarConfig;
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStartedWithAudio, setHasStartedWithAudio] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start playback muted initially to comply with browser autoplay
    video.muted = true;
    video.play().catch(() => { });
  }, []);

  const startPlayingWithAudio = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.muted = false;
    video.volume = 1;
    setIsMuted(false);
    setHasStartedWithAudio(true);
    video.play().catch(() => { });
  };

  const toggleMute = (e) => {
    e?.stopPropagation?.();
    const video = videoRef.current;
    if (!video) return;
    const nextState = !video.muted;
    video.muted = nextState;
    if (!nextState) {
      video.volume = 1;
    }
    setIsMuted(nextState);
  };

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
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-4 sm:px-5 py-2 text-sm sm:text-base font-bold tracking-wide text-gold-300 shadow-sm">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-gold-400" />
              Webinar That Can Change Your Life
            </span>

            <h1 className="font-display mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.14] text-white tracking-tight">
              Webinar by a Mentor Who Has Produced{" "}
              <span className="text-gradient-gold">2,500+ IITians</span> from Odisha
            </h1>

            <p className="mt-3 text-sm sm:text-base text-white/75 max-w-xl">
              How to Secure <span className="text-gold-300 font-semibold">95%+ in 10th Board Exams</span>
            </p>

            <div className="mt-6 flex flex-col items-center lg:items-start gap-1">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{chairman.name}</p>
              <p className="text-sm sm:text-base text-white/80">{chairman.designation}</p>
              <p className="text-base sm:text-lg lg:text-xl font-bold text-gold-300 mt-0.5">{chairman.education}</p>
            </div>

            <div className="mt-7 inline-flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white">
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

          {/* Hero Video Section */}
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in">
            <div className="relative w-full max-w-[270px] sm:max-w-[310px] md:max-w-[330px]">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold-500/25 via-gold-400/10 to-transparent blur-xl pointer-events-none" />
              <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[1.75rem] border border-gold-400/30 pointer-events-none" />

              <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-white/[0.08] to-white/0 p-2 sm:p-2.5 ring-1 ring-white/15 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.4rem] bg-black shadow-inner flex items-center justify-center group">
                  <video
                    ref={videoRef}
                    src={webinar.video || "/hero-video.mp4"}
                    autoPlay
                    muted
                    loop
                    controls
                    playsInline
                    preload="auto"
                    onVolumeChange={(e) => setIsMuted(e.target.muted)}
                    className="h-full w-full object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>

                  {isMuted && (
                    <button
                      type="button"
                      onClick={toggleMute}
                      className="absolute top-3 right-3 z-20 flex items-center gap-1.5 rounded-full bg-navy-950/85 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md border border-gold-400/50 hover:bg-gold-500 hover:text-navy-950 transition-all cursor-pointer animate-pulse-soft"
                    >
                      <VolumeX className="h-3.5 w-3.5 text-gold-400" />
                      <span>Unmute</span>
                    </button>
                  )}
                </div>

                <div className="mt-2.5 px-3 py-2 flex items-start justify-between gap-3 text-xs border-t border-gold-400/20 pt-2.5">
                  <div className="min-w-0 flex-1">
                    <p className="font-extrabold text-gold-400 text-base sm:text-lg leading-tight">
                      Mr. Jyoti Ranjan Tripathy
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-gold-300 mt-0.5 leading-tight">
                      (IIT KGP)
                    </p>
                    <p className="text-xs text-white/75 mt-1 leading-tight">
                      Founder & Chairman, Cohen International School
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="text-[11px] font-semibold text-gold-300 hover:text-gold-200 transition-colors flex items-center gap-1 shrink-0 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 hover:border-gold-400/40 cursor-pointer mt-0.5"
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="h-3 w-3" /> Unmute
                      </>
                    ) : (
                      <>
                        <Volume2 className="h-3 w-3" /> Mute
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
