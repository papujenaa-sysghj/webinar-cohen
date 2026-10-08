import { Navigate } from "react-router-dom";
import StepLayout from "../components/StepLayout";
import SuccessCard from "../components/SuccessCard";
import WhatsAppCommunityCard from "../components/WhatsAppCommunityCard";
import { useRegistration } from "../context/RegistrationContext";

export default function SuccessPage() {
  const { details, submitted, registrationId } = useRegistration();

  // Guard: only reachable after an actual submission.
  if (!details || !submitted) {
    return <Navigate to="/" replace />;
  }

  return (
    <StepLayout step={4} bare>
      <div className="flex flex-col gap-6">
        <SuccessCard details={details} registrationId={registrationId} />
        <WhatsAppCommunityCard />
      </div>
    </StepLayout>
  );
}
