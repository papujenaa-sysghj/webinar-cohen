export default function FormField({ label, required, error, htmlFor, children, hint }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={htmlFor} className="text-sm font-medium text-navy-900">
          {label}
          {required && <span className="ml-1 text-red-600">*</span>}
        </label>
      )}
      {children}
      {hint && !error && <p className="text-xs text-navy-700/60">{hint}</p>}
      {error && (
        <p className="flex items-center gap-1 text-xs font-medium text-red-600 animate-fade-in">
          {error}
        </p>
      )}
    </div>
  );
}
