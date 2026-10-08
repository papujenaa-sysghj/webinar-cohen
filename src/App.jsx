import { Routes, Route } from "react-router-dom";
import { RegistrationProvider } from "./context/RegistrationContext";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import PaymentPage from "./pages/PaymentPage";
import PaymentVerificationPage from "./pages/PaymentVerificationPage";
import SuccessPage from "./pages/SuccessPage";

export default function App() {
  return (
    <RegistrationProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment-verification" element={<PaymentVerificationPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </RegistrationProvider>
  );
}
