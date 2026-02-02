import { useNavigate } from "react-router";
import Button from "../components/Button/Button";
import { useEffect, useRef } from "react";
import useAnalytics from "@/hooks/useAnalytics";

export default function Page404() {
    const navigate = useNavigate();
      const { posthog } = useAnalytics()
    const hasTracked = useRef(false);

    useEffect(() => {
      if (!hasTracked.current) {
        hasTracked.current = true;
        posthog?.capture('page_not_found', {
          attempted_url: window.location.href,
          attempted_pathname: window.location.pathname,
        });
      }
    }, [posthog]);

    const handleReturnHome = () => {
      posthog?.capture('return_home_clicked', {
        from_url: window.location.href,
      });
      navigate('/');
    };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        width: "100vw",
        height: "100%",
        minHeight: "100vh",
        position: 'relative',
        zIndex: 1
      }}
    >
        <span style={{fontSize: '2rem'}}>Uh oh</span>
        <span style={{}}>That page doesn't exist</span>
        <Button style={{padding: '0.8rem 2rem', marginTop: '1rem'}} onClick={handleReturnHome}>Return Home</Button>
    </main>
  );
}
