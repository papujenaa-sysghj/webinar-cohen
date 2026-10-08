import StepLayout from "../components/StepLayout";
import RegistrationForm from "../components/RegistrationForm";

export default function RegisterPage() {
  return (
    <StepLayout
      step={1}
      title="Student & Parent Details"
      subtitle="Please fill in accurate details — this will be used for webinar access."
    >
      <RegistrationForm />
    </StepLayout>
  );
}
