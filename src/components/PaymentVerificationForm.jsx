import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Loader2 } from "lucide-react";
import FormField from "./ui/FormField";
import Input from "./ui/Input";
import Button from "./ui/Button";
import FileUpload from "./FileUpload";
import { useRegistration } from "../context/RegistrationContext";
import { validatePaymentVerification, hasErrors } from "../utils/validation";

export default function PaymentVerificationForm() {
  const navigate = useNavigate();
  const { submitRegistration } = useRegistration();
  const [utr, setUtr] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = { utr, screenshot };
    const fieldErrors = validatePaymentVerification(values);
    setErrors(fieldErrors);

    if (hasErrors(fieldErrors)) return;

    setSubmitting(true);

    // Mock submission — no backend. Simulate brief processing delay.
    setTimeout(() => {
      submitRegistration({
        utr: utr.trim(),
        screenshotName: screenshot?.name ?? null,
        screenshotDataUrl: screenshot?.dataUrl ?? null,
      });
      setSubmitting(false);
      navigate("/success");
    }, 1600);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <FormField
        label="UTR / Transaction ID"
        required
        htmlFor="utr"
        error={errors.utr}
        hint="Enter the UTR / transaction ID shown in your UPI payment receipt."
      >
        <Input
          id="utr"
          name="utr"
          placeholder="e.g. 325917283461"
          value={utr}
          onChange={(e) => {
            setUtr(e.target.value);
            if (errors.utr) setErrors((prev) => ({ ...prev, utr: undefined }));
          }}
          error={errors.utr}
        />
      </FormField>

      <FormField label="Payment Screenshot" required error={errors.screenshot}>
        <FileUpload
          value={screenshot}
          onChange={(val) => {
            setScreenshot(val);
            if (errors.screenshot) setErrors((prev) => ({ ...prev, screenshot: undefined }));
          }}
          error={errors.screenshot}
        />
      </FormField>

      <Button type="submit" variant="primary" size="lg" className="mt-2 w-full" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Submitting Registration...
          </>
        ) : (
          <>
            <CheckCircle2 className="h-4 w-4" /> Submit Registration
          </>
        )}
      </Button>
    </form>
  );
}
