import { useRef, useState } from "react";
import { ImagePlus, RefreshCw, X } from "lucide-react";

const ACCEPTED_TYPES = ["image/jpeg", "image/jpg", "image/png"];
const MAX_SIZE_MB = 5;

export default function FileUpload({ value, onChange, error }) {
  const inputRef = useRef(null);
  const [localError, setLocalError] = useState("");

  const handleFile = (file) => {
    if (!file) return;

    if (!ACCEPTED_TYPES.includes(file.type)) {
      setLocalError("Only JPG or PNG images are supported.");
      return;
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setLocalError(`File must be smaller than ${MAX_SIZE_MB}MB.`);
      return;
    }

    setLocalError("");
    const reader = new FileReader();
    reader.onload = () => {
      onChange({
        file,
        name: file.name,
        dataUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e) => {
    const file = e.target.files?.[0];
    handleFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    handleFile(file);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    onChange(null);
    setLocalError("");
    if (inputRef.current) inputRef.current.value = "";
  };

  const displayError = error || localError;

  if (value?.dataUrl) {
    return (
      <div>
        <div className="relative overflow-hidden rounded-xl border border-navy-900/15 animate-scale-in">
          <img
            src={value.dataUrl}
            alt="Payment screenshot preview"
            className="max-h-72 w-full object-contain bg-navy-900/5"
          />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-navy-950/70 text-white backdrop-blur hover:bg-navy-950"
            aria-label="Remove screenshot"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-2 flex items-center justify-between gap-3">
          <p className="truncate text-xs text-navy-900/50">{value.name}</p>
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-navy-700 hover:text-navy-900"
          >
            <RefreshCw className="h-3.5 w-3.5" /> Replace
          </button>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/jpg,image/png"
          onChange={handleInputChange}
          className="hidden"
        />
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className={`flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-8 text-center transition-colors duration-150 ${
          displayError
            ? "border-red-300 bg-red-50/50"
            : "border-navy-900/20 bg-navy-900/[0.02] hover:border-navy-600 hover:bg-navy-900/5"
        }`}
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900/8 text-navy-900/60">
          <ImagePlus className="h-5 w-5" />
        </span>
        <span className="text-sm font-semibold text-navy-900">Tap to upload screenshot</span>
        <span className="text-xs text-navy-900/50">Supported formats: JPG, PNG · Max {MAX_SIZE_MB}MB</span>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png"
        onChange={handleInputChange}
        className="hidden"
      />
      {displayError && (
        <p className="mt-1.5 text-xs font-medium text-red-600 animate-fade-in">{displayError}</p>
      )}
    </div>
  );
}
