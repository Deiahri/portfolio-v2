import { Copy } from "lucide-react";
import { useRef, useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const email = "Junda.yin1@gmail.com";
export default function Footer() {
  const [copied, setCopied] = useState(0);
  const TimeoutRef = useRef<NodeJS.Timeout>(undefined);

  function CopyEmail() {
    clearTimeout(TimeoutRef.current);
    setCopied(0);
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(1);
        ResetAfterTimeout();
      })
      .catch(() => {
        setCopied(-1);
        ResetAfterTimeout();
      });
  }

  function ResetAfterTimeout() {
    TimeoutRef.current = setTimeout(() => {
      setCopied(0);
    }, 1000);
  }

  return (
    <div
      style={{
        width: "100%",
        padding: "5rem 3rem 10rem 3rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#4446",
          backdropFilter: "blur(10px)",
          borderRadius: "1rem",
          padding: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{ fontSize: "3rem", fontWeight: "900", marginBottom: "-1rem" }}
        >
          Like what you see?
        </span>
        <span style={{ fontSize: "1.8rem", fontWeight: "300" }}>
          Reach out via Email or LinkedIn
        </span>
        <div
          style={{
            display: "flex",
            gap: 0,
            flexDirection: "column",
            marginTop: "1rem",
            alignItems: "center",
          }}
        >
          <div
            onClick={CopyEmail}
            className="borderGlowOnHover animateWidth"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
              borderRadius: "1rem",
              padding: "0.5rem 1rem",
            }}
          >
            <TfiEmail size="2rem" />
            <span style={{ fontSize: "1.25rem" }}>
              {copied == 0 ? "Junda.yin1@gmail.com" : ""}
              {copied == 1 ? "Copied!" : ""}
              {copied == -1 ? "Copy Error" : ""}
            </span>
            <Copy size="1.5rem" strokeWidth={2} />
          </div>
          <a
            className="borderGlowOnHover"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              borderRadius: "1rem",
              padding: "0.5rem 1rem",
            }}
            href="https://www.linkedin.com/in/junda-yin-0b162615b/"
            target="_blank"
          >
            <BsLinkedin size="2rem" />
            <span
              style={{
                fontSize: "1.25rem",
                color: "white",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Junda Yin
            </span>
            <FaArrowRight size="1rem" />
          </a>
        </div>
      </div>
    </div>
  );
}
