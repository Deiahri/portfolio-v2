import { blue, orange } from "@/shared";
import { useEffect, useRef, useState } from "react";

const depths = {
  1: 1000,
  2: 900,
};
export default function ParallaxBG() {
  // const chaseValRef = useRef(window.scrollY);
  const [scrollY, setScrollY] = useState(window.scrollY);

  // const scrollY = scrollYRef.current;

  // const setScrollY = (v: number) => {
  //   scrollYRef.current = v;
  // }

  useEffect(() => {
    // let ticking = false;

    const handleScroll = () => {
      // if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          // ticking = false;
        });
        // ticking = true;
      // }
    };
    
    window.addEventListener("scroll", handleScroll);
    // setInterval(() => {
    //   const chaseVal = chaseValRef.current;
    //   const currentVal = scrollYRef.current;
    //   chaseValRef.current = chaseVal + ((currentVal - chaseVal) * 0.25);
    // }, 100);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const depth1 = depths[1];
  const scrollPercentage = scrollY / 1200;

  console.log(scrollPercentage);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        height: "100%",
        position: "absolute",
        zIndex: 0,
        backgroundColor: "#151515",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          // willChange: 'transform',
          // transition: 'transform 100ms ease-out',
          backgroundImage: `
          radial-gradient(circle at -10% 0%, ${
            blue + "99"
          } 5%, transparent 30%),
          radial-gradient(circle at calc(60vw + 100vh) 40%, ${
            orange + "99"
          } 5%, transparent 30%),
          radial-gradient(circle at -30vh 65%, ${
            blue + "99"
          } 5%, transparent 30%)
          `,
          transform: `translateY(${
            depth1 * scrollPercentage - depth1 / 2
          }px) scale(1.2)`,
          height: "100%",
          width: "100%",
        }}
      >
        {/* <div
          style={{
            transform: `translateY(${depth2 * scrollPercentage - depth2 / 2})`,
            // width: '5rem',
            zIndex: 0,
            position: "absolute",
            top: "20%",
            left: "15%",
            rotate: "48deg",
            opacity: "1",
            width: "10rem",
          }}
        >
          <img
            src="/shapes/3.png"
            style={{
              zIndex: 0,
              position: "relative"
            }}
          />
        </div> */}
      </div>
    </div>
  );
}
// ${scrollPercentage*100}
