import Navbar from "./Navbar";
import Footer from "./Footer";
import ProgressIndicator from "./ProgressIndicator";

export default function StepLayout({ step, title, subtitle, bare = false, children }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-navy-950/[0.03] via-white to-white">
      <Navbar />
      <ProgressIndicator currentStep={step} />

      <main className="flex-1 py-10 sm:py-14">
        {/* Intentionally not using the `container-page` utility here: its baked-in
            max-w-6xl is emitted later in the stylesheet than max-w-lg and would
            win the cascade, so the narrow column is built explicitly instead. */}
        <div className="mx-auto w-full max-w-lg px-4 sm:px-6 lg:px-8">
          {(title || subtitle) && (
            <div className="mb-7 text-center animate-fade-up">
              {title && (
                <h1 className="font-display text-xl sm:text-2xl font-bold text-navy-950 tracking-tight">
                  {title}
                </h1>
              )}
              {subtitle && <p className="mt-2 text-sm text-navy-900/55">{subtitle}</p>}
            </div>
          )}

          {bare ? (
            <div className="animate-fade-up">{children}</div>
          ) : (
            <div className="card-elevated p-5 sm:p-8 animate-fade-up">{children}</div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
