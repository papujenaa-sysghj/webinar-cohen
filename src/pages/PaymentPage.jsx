import { Navigate } from "react-router-dom";
import StepLayout from "../components/StepLayout";
import PaymentCard from "../components/PaymentCard";
import { useRegistration } from "../context/RegistrationContext";

export default function PaymentPage() {
  const { details } = useRegistration();

  // Guard: don't allow jumping to payment without completing details first.
  if (!details) {
    return <Navigate to="/register" replace />;
  }

  return (
    <StepLayout
      step={2}
      title="Complete Your Registration"
      subtitle="Scan, pay, and you're one step from securing your seat."
      bare
    >
      <PaymentCard />
    </StepLayout>
  );
}
