import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { webinarConfig } from "../config/webinarConfig";

const STORAGE_KEY = "cis-webinar-registration";

const defaultState = {
  details: null, // student & parent details (step 1)
  paymentAcknowledged: false, // user tapped "I Have Paid"
  verification: null, // { utr, screenshotName, screenshotDataUrl }
  submitted: false,
  registrationId: null,
};

function loadInitialState() {
  if (typeof window === "undefined") return defaultState;
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);
    return { ...defaultState, ...parsed };
  } catch {
    return defaultState;
  }
}

function persist(state) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // sessionStorage unavailable (e.g. private mode) — fail silently, state still works in-memory
  }
}

function generateRegistrationId() {
  const sequence = Math.floor(1000 + Math.random() * 9000);
  return `${webinarConfig.registrationIdPrefix}-${sequence}`;
}

const RegistrationContext = createContext(null);

export function RegistrationProvider({ children }) {
  const [state, setState] = useState(loadInitialState);

  const update = useCallback((patch) => {
    setState((prev) => {
      const next = { ...prev, ...patch };
      persist(next);
      return next;
    });
  }, []);

  const saveDetails = useCallback(
    (details) => update({ details }),
    [update]
  );

  const acknowledgePayment = useCallback(
    () => update({ paymentAcknowledged: true }),
    [update]
  );

  const submitRegistration = useCallback((verification) => {
    const registrationId = generateRegistrationId();
    update({ verification, submitted: true, registrationId });
    return registrationId;
  }, [update]);

  const resetRegistration = useCallback(() => {
    setState(defaultState);
    persist(defaultState);
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      saveDetails,
      acknowledgePayment,
      submitRegistration,
      resetRegistration,
    }),
    [state, saveDetails, acknowledgePayment, submitRegistration, resetRegistration]
  );

  return (
    <RegistrationContext.Provider value={value}>
      {children}
    </RegistrationContext.Provider>
  );
}

export function useRegistration() {
  const ctx = useContext(RegistrationContext);
  if (!ctx) {
    throw new Error("useRegistration must be used within a RegistrationProvider");
  }
  return ctx;
}
