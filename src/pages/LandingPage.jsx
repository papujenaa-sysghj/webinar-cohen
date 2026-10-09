import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ChairmanSection from "../components/ChairmanSection";
import Button from "../components/ui/Button";
import { webinarConfig } from "../config/webinarConfig";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pb-20 sm:pb-0">
        <HeroSection />
        <ChairmanSection />
      </main>

      <Footer />

      {/* Sticky bottom CTA on mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-900/[0.06] bg-white/95 p-3 shadow-[0_-8px_24px_-8px_rgba(11,31,63,0.12)] backdrop-blur-md sm:hidden">
        <Button as={Link} to="/register" variant="gold" size="lg" className="w-full">
          Register Now — {webinarConfig.currencySymbol}{webinarConfig.fee}
        </Button>
      </div>
    </div>
  );
}
