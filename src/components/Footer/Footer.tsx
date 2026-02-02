import useAnalytics from "@/hooks/useAnalytics";
import { sleep } from "@/tools";
import { StateMapObj } from "@/types";
import { Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { useLocation } from "react-router";

const email = "Junda.yin1@gmail.com";
export default function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log("Current URL Path:", currentPath);
  const containingDiv = useRef<HTMLDivElement>(null);
  const animated = useRef(false);
  const [stateMap, setStateMap] = useState<StateMapObj>({});
    const { posthog } = useAnalytics();

  const emerge = (key: string) => {
    return stateMap[key] ? "emerge" : "";
  };

  useEffect(() => {
    if (!containingDiv.current) {
      return;
    }

    async function AnimateDisplay() {
      if (animated.current) {
        return;
      }
      animated.current = true;
      const stateMapLocalObj: StateMapObj = {};
      const showKey = (key: string) => {
        stateMapLocalObj[key] = true;
        setStateMap({ ...stateMapLocalObj });
      };

      showKey("container");
      await sleep(100);
      showKey("like");
      await sleep(200);
      showKey("reach");
      await sleep(400);
      showKey("email");
      await sleep(100);
      showKey("linkedin");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            AnimateDisplay();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.6, rootMargin: '-10% 0px' }
    );
    observer.observe(containingDiv.current);

    return () => {
      observer.disconnect();
    };
  }, [containingDiv]);

  const [copied, setCopied] = useState(0);
  const TimeoutRef = useRef<NodeJS.Timeout>(undefined);

  function CopyEmail() {
    clearTimeout(TimeoutRef.current);
    setCopied(0);
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(1);
        posthog?.capture('email_copied', {
          email: email,
          success: true,
        });
        ResetAfterTimeout();
      })
      .catch(() => {
        setCopied(-1);
        posthog?.capture('email_copied', {
          email: email,
          success: false,
        });
        ResetAfterTimeout();
      });
  }

  function handleLinkedInClick() {
    posthog?.capture('linkedin_clicked', {
      linkedin_url: 'https://www.linkedin.com/in/junda-yin/',
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
        padding: "0rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          backgroundColor: "#222a",
          border: "1px solid #fff1",
          borderRadius: "1rem",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
        }}
        ref={containingDiv}
        className={`emergeFromBlur ${emerge("container")}`}
      >
        <span
          style={{
            fontSize: "2.5rem",
            fontWeight: "698",
            marginBottom: "-0.5rem",
            textAlign: "center",
          }}
          className={`emergeFromBlur ${emerge("like")}`}
        >
          Like what you see?
        </span>
        <span
          style={{ fontSize: "1.5rem", fontWeight: "300", textAlign: "center" }}
          className={`emergeFromBlur ${emerge("reach")}`}
        >
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
            className={`borderGlowOnHover animateWidth emergeFromBlur ${emerge(
              "email"
            )}`}
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
            <span style={{ fontSize: "1.25rem", userSelect: 'none' }}>
              {copied == 0 ? "Junda.yin1@gmail.com" : ""}
              {copied == 1 ? "Copied!" : ""}
              {copied == -1 ? "Copy Error" : ""}
            </span>
            <Copy size="1.5rem" strokeWidth={2} />
          </div>

          <a
            className={`borderGlowOnHover emergeFromBlur ${emerge("linkedin")}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              borderRadius: "1rem",
              padding: "0.5rem 1rem",
            }}
            href="https://www.linkedin.com/in/junda-yin/"
            target="_blank"
            onClick={handleLinkedInClick}
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
      <div style={{ height: "30vh" }} />
      <span style={{ color: "#fff9", fontSize: "1rem", zIndex: 0 }}>
        Junda Yin © {new Date().getFullYear()}. All rights reserved.
      </span>
      <a href='/privacy' style={{ color: "#fff9", fontSize: "1rem", zIndex: 0, cursor: 'pointer' }}>
        Privacy Policy
      </a>
      <div style={{ height: "10vh" }} />
    </div>
  );
}
