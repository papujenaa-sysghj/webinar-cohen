import { MessageCircle } from "lucide-react";
import { webinarConfig } from "../config/webinarConfig";
import Button from "./ui/Button";

export default function WhatsAppCommunityCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 via-green-600 to-emerald-700 p-6 sm:p-9 text-center text-white shadow-[0_24px_48px_-16px_rgba(5,120,60,0.4)] animate-fade-up">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.08]" />
      <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
        <MessageCircle className="h-8 w-8" strokeWidth={1.75} />
      </div>

      <h2 className="font-display relative mt-5 text-lg sm:text-xl font-bold tracking-tight">
        Join Our Official WhatsApp Community
      </h2>
      <p className="relative mt-2.5 text-sm text-white/85 max-w-md mx-auto leading-relaxed">
        Join the official Cohen International School webinar community to receive webinar
        updates, important announcements and event information.
      </p>

      <Button
        as="a"
        href={webinarConfig.whatsappCommunityUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="gold"
        size="lg"
        className="relative mt-6 w-full sm:w-auto"
      >
        <MessageCircle className="h-4 w-4" /> Join WhatsApp Community
      </Button>
    </div>
  );
}
