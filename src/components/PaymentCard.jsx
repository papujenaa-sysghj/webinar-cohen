import { useNavigate, Link } from "react-router-dom";
import { ScanLine, CreditCard, Camera, ShieldCheck, Pencil } from "lucide-react";
import { webinarConfig } from "../config/webinarConfig";
import Button from "./ui/Button";
import QRCodeSection from "./QRCodeSection";
import { useRegistration } from "../context/RegistrationContext";

const PAY_STEPS = [
  { icon: ScanLine, label: "Scan the QR code" },
  { icon: CreditCard, label: "Pay using any UPI app" },
  { icon: Camera, label: "Save the payment screenshot" },
];

export default function PaymentCard() {
  const navigate = useNavigate();
  const { details, acknowledgePayment } = useRegistration();
  const { fee, currencySymbol } = webinarConfig;

  const handlePaid = () => {
    acknowledgePayment();
    navigate("/payment-verification");
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Registration summary */}
      <div className="card-surface flex items-center justify-between gap-4 p-4 sm:p-5">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-navy-900/40">
            Registering
          </p>
          <p className="mt-0.5 truncate text-sm sm:text-base font-bold text-navy-950">
            {details?.studentName || "Student"}
          </p>
          {details?.currentClass && (
            <p className="text-xs sm:text-sm text-navy-900/55 truncate">
              {details.currentClass}{details?.currentSchool ? ` · ${details.currentSchool}` : ""}
            </p>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <div className="text-right">
            <p className="text-xs font-medium uppercase tracking-wide text-navy-900/40">Amount</p>
            <p className="mt-0.5 text-lg font-bold text-navy-950">
              {currencySymbol}{fee}
            </p>
          </div>
          <Link
            to="/register"
            className="inline-flex items-center gap-1 rounded-lg border border-navy-900/10 px-2.5 py-1.5 text-xs font-semibold text-navy-700 transition-colors hover:border-navy-900/20 hover:bg-navy-900/5"
          >
            <Pencil className="h-3 w-3" /> Edit
          </Link>
        </div>
      </div>

      {/* How to pay */}
      <div className="card-surface p-4 sm:p-5">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-navy-900/40">
          How to Pay
        </p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {PAY_STEPS.map(({ icon: Icon, label }, index) => (
            <div key={label} className="flex flex-col items-center text-center gap-1.5">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900/[0.05] text-navy-800">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold-500 text-[10px] font-bold text-navy-950">
                  {index + 1}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-medium leading-tight text-navy-900/65">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <QRCodeSection />

      <div className="flex items-start gap-2.5 rounded-xl border border-navy-900/[0.06] bg-navy-900/[0.025] p-4 text-sm text-navy-900/70">
        <ShieldCheck className="h-5 w-5 shrink-0 mt-0.5 text-navy-900/40" />
        <p>
          Please complete the {currencySymbol}{fee} payment and keep your payment screenshot
          ready — you'll need it on the next step.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 pt-1">
        <p className="text-sm font-medium text-navy-900/70">Payment completed? Continue below.</p>
        <Button onClick={handlePaid} variant="primary" size="lg" className="w-full">
          I Have Paid
        </Button>
      </div>
    </div>
  );
}
