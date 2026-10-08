import { CheckCircle2, Clock3 } from "lucide-react";
import { webinarConfig } from "../config/webinarConfig";

export default function SuccessCard({ details, registrationId }) {
  const { fee, currencySymbol } = webinarConfig;

  return (
    <div className="card-elevated relative overflow-hidden p-6 sm:p-9 text-center animate-fade-up">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400" />

      <div className="relative mx-auto flex h-20 w-20 items-center justify-center animate-scale-in">
        <div className="absolute inset-0 rounded-full bg-green-100 animate-pulse-soft" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-50 to-emerald-100 ring-4 ring-green-50">
          <CheckCircle2 className="h-9 w-9 text-green-600" strokeWidth={1.75} />
        </div>
      </div>

      <h1 className="font-display mt-6 text-xl sm:text-2xl font-bold text-navy-950 tracking-tight">
        Registration Submitted Successfully!
      </h1>
      <p className="mt-2 text-sm sm:text-[15px] text-navy-900/55 max-w-md mx-auto">
        Your registration and payment details have been submitted for verification.
      </p>

      <div className="mt-7 divide-y divide-navy-900/[0.06] rounded-xl border border-navy-900/[0.08] bg-navy-900/[0.015] text-left overflow-hidden">
        <Row label="Student Name" value={details?.studentName} />
        <Row label="Parent Name" value={details?.parentName} />
        <Row label="Registration ID" value={registrationId} emphasize />
        <Row label="Webinar Fee" value={`${currencySymbol}${fee}`} />
        <Row
          label="Payment Status"
          value={
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">
              <Clock3 className="h-3.5 w-3.5" /> Pending Verification
            </span>
          }
        />
      </div>

      <p className="mt-5 text-xs sm:text-sm text-navy-900/50 max-w-md mx-auto">
        Your payment will be verified by the Cohen International School team.
      </p>
    </div>
  );
}

function Row({ label, value, emphasize }) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
      <span className="text-navy-900/50">{label}</span>
      <span className={`text-right ${emphasize ? "font-bold text-navy-950" : "font-medium text-navy-900"}`}>
        {value || "—"}
      </span>
    </div>
  );
}
