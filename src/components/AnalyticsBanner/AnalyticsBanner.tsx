import { useConsentContext } from "@/context/ConsentContext";
import { useEffect, useState } from "react";
import { LuThumbsUp } from "react-icons/lu";

export default function AnalyticsBanner() {
  const { hasConsent, setHasConsent } = useConsentContext();
  const [visible, setVisible] = useState(false);
  const [zIndex, setZIndex] = useState(-1);

  useEffect(() => {
    setVisible(hasConsent == undefined);
    setTimeout(() => {
      if (hasConsent === undefined) {
        setZIndex(100);
      } else {
        setZIndex(-1);
      }
    }, 500);
  }, [hasConsent]);


  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        left: 0,
        width: "100%",
        display: "flex",
        boxSizing: "border-box",
        justifyContent: "center",
        zIndex: zIndex,
      }}
      className={`floatIn ${visible && "emerge"}`}
    >
      <div
        style={{
          margin: "0.5rem",
          boxSizing: "border-box",
          width: "100%",
          maxWidth: "40rem",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#222f",
          padding: "0.5rem",
          borderRadius: "0.5rem",
          border: "1px solid #fff1",
          gap: "0.5rem",
        }}
        className={"ooshiny"}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ textAlign: "center" }}>
            I use cookies to collect anonymous data to <b>improve this site</b>{" "}
            <a href="/privacy" style={{ cursor: "pointer" }}>
              (privacy policy)
            </a>
          </span>
          {/* <span>
            You agree to 
          </span> */}
        </div>
        <div style={{ display: "flex", gap: "1rem", boxSizing: "border-box" }}>
          <button
            style={{ backgroundColor: "transparent", padding: 0 }}
            onClick={() => setHasConsent(false)}
          >
            No, thank you
          </button>
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#3b82f4",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
            }}
            onClick={() => setHasConsent(true)}
          >
            Absolutely <LuThumbsUp strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
