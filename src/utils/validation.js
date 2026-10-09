// Frontend-only validation helpers. All messages are friendly, inline copy —
// never use browser alert() for these.

export const isRequired = (value) => String(value ?? "").trim().length > 0;

export const isValidEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value ?? "").trim());

export const isValidIndianMobile = (value) =>
  /^[6-9]\d{9}$/.test(String(value ?? "").replace(/\D/g, "").slice(-10)) &&
  String(value ?? "").replace(/\D/g, "").length <= 12;

export const isValidPin = (value) => /^\d{6}$/.test(String(value ?? "").trim());

export const validateRegistrationForm = (values) => {
  const errors = {};

  if (!isRequired(values.studentName)) {
    errors.studentName = "Student name is required.";
  }

  if (!isRequired(values.parentName)) {
    errors.parentName = "Parent / guardian name is required.";
  }

  if (!isRequired(values.parentWhatsapp)) {
    errors.parentWhatsapp = "Parent WhatsApp number is required.";
  } else if (!isValidIndianMobile(values.parentWhatsapp)) {
    errors.parentWhatsapp = "Enter a valid 10-digit Indian mobile number.";
  }

  if (values.studentMobile && !isValidIndianMobile(values.studentMobile)) {
    errors.studentMobile = "Enter a valid 10-digit Indian mobile number.";
  }

  if (!isRequired(values.email)) {
    errors.email = "Email address is required.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!isRequired(values.currentClass)) {
    errors.currentClass = "Please select the current class.";
  }

  if (!isRequired(values.currentSchool)) {
    errors.currentSchool = "Current school name is required.";
  }

  if (!isRequired(values.district)) {
    errors.district = "District is required.";
  }

  if (!isRequired(values.city)) {
    errors.city = "City is required.";
  }

  if (!isRequired(values.pinCode)) {
    errors.pinCode = "PIN code is required.";
  } else if (!isValidPin(values.pinCode)) {
    errors.pinCode = "PIN code must be exactly 6 digits.";
  }

  return errors;
};

export const validatePaymentVerification = (values) => {
  const errors = {};

  if (!isRequired(values.utr)) {
    errors.utr = "UTR / transaction ID is required.";
  } else if (values.utr.trim().length < 6) {
    errors.utr = "Enter a valid UTR / transaction ID.";
  }

  if (!values.screenshot) {
    errors.screenshot = "Please upload your payment screenshot.";
  }

  return errors;
};

export const hasErrors = (errors) => Object.keys(errors).length > 0;
