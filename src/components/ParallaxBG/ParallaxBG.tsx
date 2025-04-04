import { blue, orange } from "@/main";
import { useEffect, useState } from "react";

export default function ParallaxBG() {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const scrollPercentage = scrollY/1200;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        height: "100%",
        position: "absolute",
        zIndex: 0,
        backgroundColor: "#151515",
        overflow: 'hidden'
      }}
    >
      <div style={{
        backgroundImage: `
          radial-gradient(circle at -10% -10%, ${
            blue + "99"
          } 5%, transparent 30%),
          radial-gradient(circle at 130% 50%, ${
            orange + "99"
          } 5%, transparent 40%),
          radial-gradient(circle at -10% 110%, ${
            blue + "99"
          } 5%, transparent 30%)
          `,
        transform: `translateY(${240*(scrollPercentage)-120}px) scale(1.2)`,
        height: '100%',
        width: '100%'
        }}>

      </div>
    </div>
  );
}
// ${scrollPercentage*100}