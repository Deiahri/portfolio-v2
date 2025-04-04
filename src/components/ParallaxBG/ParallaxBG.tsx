import { blue, orange } from "@/shared";

const depths = {
  1: 240,
  2: 900,
};
export default function ParallaxBG() {
  // const [scrollY, setScrollY] = useState(window.scrollY);

  
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };
    
  //   window.addEventListener("scroll", handleScroll);
    
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  
  const depth1 = depths[1];
  // const depth2 = depths[2];
  const scrollPercentage = 0;
  // const scrollPercentage = scrollY / 1200;
  
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
          backgroundImage: `
          radial-gradient(circle at -10% -10%, ${
            blue + "99"
          } 5%, transparent 30%),
          radial-gradient(circle at calc(60vw + 100vh) 40%, ${
            orange + "99"
          } 5%, transparent 30%),
          radial-gradient(circle at -60vh 110%, ${
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
