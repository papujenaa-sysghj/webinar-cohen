import { ScanLine } from "lucide-react";
import { webinarConfig } from "../config/webinarConfig";
import paymentQr from "../assets/payment-qr.png";

export default function QRCodeSection() {
  const { payment, fee, currencySymbol } = webinarConfig;

  return (
    <div className="card-elevated relative overflow-hidden p-5 sm:p-7 text-center animate-scale-in">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400" />

      <div className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/10 bg-navy-900/[0.03] px-3.5 py-1.5 text-xs font-semibold text-navy-900/70">
        <ScanLine className="h-3.5 w-3.5" /> Scan & Pay {currencySymbol}{fee}
      </div>

      <div className="mt-6 flex justify-center">
        <div className="relative">
          <div className="absolute -inset-2 rounded-[1.5rem] bg-gradient-to-br from-gold-400/20 to-transparent blur-md" />
          <div className="relative w-full max-w-[260px] overflow-hidden rounded-2xl border border-gold-400/20 bg-white p-2.5 ring-1 ring-navy-900/5 shadow-[0_8px_24px_-8px_rgba(11,31,63,0.18)]">
            <img
              src={paymentQr}
              alt={`Cohen International School UPI payment QR code — UPI ID ${payment.upiId}`}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-1.5">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy-900/40">UPI ID</p>
        <p className="text-base font-bold text-navy-950 break-all">{payment.upiId}</p>
        <p className="text-sm text-navy-900/55">{payment.payeeName}</p>
      </div>

      <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500/10 to-gold-400/10 px-4 py-2 text-sm font-bold text-gold-600 ring-1 ring-gold-500/20">
        Amount: {currencySymbol}{fee}
      </div>
    </div>
  );
}
