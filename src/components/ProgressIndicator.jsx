import { Check } from "lucide-react";

const STEPS = ["Details", "Payment", "Verification", "Complete"];

export default function ProgressIndicator({ currentStep }) {
  return (
    <div className="w-full bg-white/85 backdrop-blur-md border-b border-navy-900/[0.06] sticky top-14 sm:top-16 z-30">
      <div className="container-page py-3 sm:py-4">
        <div className="flex items-center">
          {STEPS.map((step, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;
            const isLast = index === STEPS.length - 1;

            return (
              <div key={step} className={`flex items-center ${isLast ? "" : "flex-1"}`}>
                <div className="flex flex-col items-center gap-1.5 shrink-0">
                  <div
                    className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                      isCompleted
                        ? "bg-gradient-to-br from-navy-800 to-navy-900 text-white"
                        : isCurrent
                        ? "bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 ring-4 ring-gold-500/20 scale-110"
                        : "bg-navy-900/[0.06] text-navy-900/35"
                    }`}
                  >
                    {isCompleted ? <Check className="h-4 w-4" /> : stepNumber}
                  </div>
                  <span
                    className={`hidden sm:block text-[11px] font-medium tracking-wide uppercase whitespace-nowrap ${
                      isCurrent ? "text-navy-900" : "text-navy-900/40"
                    }`}
                  >
                    {step}
                  </span>
                </div>
                {!isLast && (
                  <div
                    className={`h-0.5 flex-1 mx-1.5 sm:mx-2 rounded-full transition-colors duration-300 ${
                      isCompleted ? "bg-navy-900" : "bg-navy-900/10"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
        <p className="mt-1.5 text-center text-[11px] font-medium uppercase tracking-wide text-navy-900/50 sm:hidden">
          Step {currentStep} of {STEPS.length} · {STEPS[currentStep - 1]}
        </p>
      </div>
    </div>
  );
}
