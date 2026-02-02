import React, { createContext, useContext, useEffect, useState } from "react";

interface ConsentContextType {
  hasConsent: boolean | undefined;
  setHasConsent: (value: boolean | undefined) => void;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export const ConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasConsent, setHasConsentState] = useState<boolean | undefined>(undefined);

  const setHasConsent = (value: boolean | undefined) => {
    setHasConsentState(value);
    if (value !== undefined) {
      localStorage.setItem("_allowedAnalytics", value.toString());
    } else {
      localStorage.removeItem("_allowedAnalytics");
    }
  };

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem("_allowedAnalytics");
      if (consent === "true") {
        setHasConsentState(true);
      } else if (consent === "false") {
        setHasConsentState(false);
      } else {
        setHasConsentState(undefined);
      }
    };

    checkConsent();

    const interval = setInterval(() => {
      checkConsent();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ConsentContext.Provider value={{ hasConsent, setHasConsent }}>
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsentContext = (): ConsentContextType => {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsentContext must be used within a ConsentProvider");
  }
  return context;
};