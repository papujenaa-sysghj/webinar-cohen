import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FormField from "./ui/FormField";
import Input from "./ui/Input";
import Select from "./ui/Select";
import Button from "./ui/Button";
import { useRegistration } from "../context/RegistrationContext";
import { validateRegistrationForm, hasErrors } from "../utils/validation";

const CLASS_OPTIONS = [
  "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12",
];

const DISTRICT_OPTIONS = [
  "Khordha", "Cuttack", "Puri", "Ganjam", "Sambalpur", "Balasore",
  "Mayurbhanj", "Jajpur", "Angul", "Other",
];

const emptyForm = {
  studentName: "",
  parentName: "",
  parentWhatsapp: "",
  studentMobile: "",
  email: "",
  currentClass: "",
  interestedGrade: "",
  district: "",
  city: "",
  pinCode: "",
};

export default function RegistrationForm() {
  const navigate = useNavigate();
  const { saveDetails, details } = useRegistration();
  const [form, setForm] = useState(details ?? emptyForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validateRegistrationForm(form);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fieldErrors = validateRegistrationForm(form);
    setErrors(fieldErrors);
    setTouched(
      Object.keys(emptyForm).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );

    if (hasErrors(fieldErrors)) {
      const firstErrorField = Object.keys(fieldErrors)[0];
      document
        .querySelector(`[name="${firstErrorField}"]`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    saveDetails(form);
    navigate("/payment");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <FormField label="Student Name" required htmlFor="studentName" error={errors.studentName}>
        <Input
          id="studentName"
          name="studentName"
          placeholder="Enter student's full name"
          value={form.studentName}
          onChange={handleChange("studentName")}
          onBlur={handleBlur("studentName")}
          error={errors.studentName}
        />
      </FormField>

      <FormField label="Parent / Guardian Name" required htmlFor="parentName" error={errors.parentName}>
        <Input
          id="parentName"
          name="parentName"
          placeholder="Enter parent / guardian name"
          value={form.parentName}
          onChange={handleChange("parentName")}
          onBlur={handleBlur("parentName")}
          error={errors.parentName}
        />
      </FormField>

      <FormField
        label="Parent WhatsApp Number"
        required
        htmlFor="parentWhatsapp"
        error={errors.parentWhatsapp}
        hint="We'll use this number for webinar updates."
      >
        <Input
          id="parentWhatsapp"
          name="parentWhatsapp"
          type="tel"
          inputMode="numeric"
          placeholder="10-digit mobile number"
          value={form.parentWhatsapp}
          onChange={handleChange("parentWhatsapp")}
          onBlur={handleBlur("parentWhatsapp")}
          error={errors.parentWhatsapp}
        />
      </FormField>

      <FormField
        label="Student Mobile Number"
        htmlFor="studentMobile"
        error={errors.studentMobile}
      >
        <Input
          id="studentMobile"
          name="studentMobile"
          type="tel"
          inputMode="numeric"
          placeholder="10-digit mobile number (optional)"
          value={form.studentMobile}
          onChange={handleChange("studentMobile")}
          onBlur={handleBlur("studentMobile")}
          error={errors.studentMobile}
        />
      </FormField>

      <FormField label="Email Address" required htmlFor="email" error={errors.email}>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange("email")}
          onBlur={handleBlur("email")}
          error={errors.email}
        />
      </FormField>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Current Class" required htmlFor="currentClass" error={errors.currentClass}>
          <Select
            id="currentClass"
            name="currentClass"
            value={form.currentClass}
            onChange={handleChange("currentClass")}
            onBlur={handleBlur("currentClass")}
            error={errors.currentClass}
          >
            <option value="">Select class</option>
            {CLASS_OPTIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Select>
        </FormField>

        <FormField label="Interested Grade" required htmlFor="interestedGrade" error={errors.interestedGrade}>
          <Select
            id="interestedGrade"
            name="interestedGrade"
            value={form.interestedGrade}
            onChange={handleChange("interestedGrade")}
            onBlur={handleBlur("interestedGrade")}
            error={errors.interestedGrade}
          >
            <option value="">Select grade</option>
            {CLASS_OPTIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Select>
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="District" required htmlFor="district" error={errors.district}>
          <Select
            id="district"
            name="district"
            value={form.district}
            onChange={handleChange("district")}
            onBlur={handleBlur("district")}
            error={errors.district}
          >
            <option value="">Select district</option>
            {DISTRICT_OPTIONS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </Select>
        </FormField>

        <FormField label="City" required htmlFor="city" error={errors.city}>
          <Input
            id="city"
            name="city"
            placeholder="Enter city"
            value={form.city}
            onChange={handleChange("city")}
            onBlur={handleBlur("city")}
            error={errors.city}
          />
        </FormField>
      </div>

      <FormField label="PIN Code" required htmlFor="pinCode" error={errors.pinCode}>
        <Input
          id="pinCode"
          name="pinCode"
          inputMode="numeric"
          maxLength={6}
          placeholder="6-digit PIN code"
          value={form.pinCode}
          onChange={handleChange("pinCode")}
          onBlur={handleBlur("pinCode")}
          error={errors.pinCode}
        />
      </FormField>

      <Button type="submit" variant="primary" size="lg" className="mt-2 w-full">
        Continue to Payment <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
}
