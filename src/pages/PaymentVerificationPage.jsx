import { Navigate } from "react-router-dom";
import StepLayout from "../components/StepLayout";
import PaymentVerificationForm from "../components/PaymentVerificationForm";
import { useRegistration } from "../context/RegistrationContext";

export default function PaymentVerificationPage() {
  const { details, paymentAcknowledged } = useRegistration();

  // Guard: must have details + have acknowledged payment before reaching this step.
  if (!details) {
    return <Navigate to="/register" replace />;
  }
  if (!paymentAcknowledged) {
    return <Navigate to="/payment" replace />;
  }

  return (
    <StepLayout
      step={3}
      title="Payment Verification"
      subtitle="Enter your transaction details to complete registration."
    >
      <PaymentVerificationForm />
    </StepLayout>
  );
}
