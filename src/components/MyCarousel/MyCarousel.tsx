import {
  Carousel,
  CarouselApi,
  CarouselContent,
  // CarouselNext,
  // CarouselPrevious,
  CarouselItem as CarouselItem,
} from "@/components/ui/carousel";
import { CarouselItem as CarouselItemType } from "@/Self";
import { useEffect, useState, useRef } from "react";
import YouTubeEmbed from "../YouTubeEmbed/YouTubeEmbed";
import { FaCirclePlay } from "react-icons/fa6";
import useAnalytics from "@/hooks/useAnalytics";

export default function MyCarousel({ imgs }: { imgs?: CarouselItemType[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(0);
    const { posthog } = useAnalytics()
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      const newIndex = api.selectedScrollSnap();
      setActive(newIndex);

      // Only track after initial render (avoid tracking the initial load)
      if (!isFirstRender.current && imgs && imgs[newIndex]) {
        posthog?.capture('carousel_slide_changed', {
          slide_index: newIndex,
          slide_type: imgs[newIndex].type,
          total_slides: imgs.length,
        });
      }
      isFirstRender.current = false;
    });
  }, [api, imgs, posthog]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 0,
          margin: 0,
        }}
      >
        <Carousel
          style={{
            width: "100%",
            border: "1px solid #fff2",
            boxSizing: "border-box",
            justifyContent: "center",
          }}
          setApi={setApi}
        >
          <CarouselContent style={{ height: "20rem" }}>
            {(!imgs || imgs.length === 0) && (
              <CarouselItem
                className="bases-1/3"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: 0,
                  margin: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                  }}
                >
                  <span
                    style={{
                      fontSize: "3rem",
                      color: "grey",
                      textAlign: "center",
                      padding: 0,
                      textWrap: "wrap",
                    }}
                  >
                    Please add images
                  </span>
                </div>
              </CarouselItem>
            )}
            {imgs &&
              imgs.map((item, index) => {
                // TODO: item type video is currently unsupported
                return (
                  <CarouselItem
                    className="bases-1/3"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      boxSizing: "border-box",
                      zIndex: 10,
                    }}
                    key={`img_${index}`}
                  >
                    {item.type === "image" && (
                      <img
                        style={{
                          width: "100%",
                          objectFit: "contain",
                          backgroundColor: "#0006",
                        }}
                        src={item.src}
                      />
                    )}
                    {item.type == "youtube" && (
                      <YouTubeEmbed
                        style={{
                          width: "100%",
                          objectFit: "contain",
                          backgroundColor: "#0006",
                        }}
                        videoID={item.src}
                      />
                    )}
                  </CarouselItem>
                );
              })}
          </CarouselContent>
          {/* <div
            className="showOnHover"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
            }}
          >
            <CarouselPrevious
              style={{ left: "0.5rem", border: "1px solid #fff2" }}
            />
            <CarouselNext
              style={{ right: "0.5rem", border: "1px solid #fff2" }}
            />
          </div> */}
        </Carousel>
        <div style={{ marginTop: "0.5rem", gap: "0.5rem", display: "flex" }}>
          {imgs?.map((item, index) => {
            const thumbnailSrc =
              item.type === "image" ? item.src : item.thumbnail;
            return (
              <div
                key={`imgprev_${index}`}
                style={{ border: "1px solid #fff2", position: "relative" }}
              >
                {(item.thumbnail && active) ? (
                  <FaCirclePlay
                    color="black"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 10,
                    }}
                    size="1.25rem"
                  />
                ) : null}
                <img
                  onClick={() => api?.scrollTo(index)}
                  style={{
                    width: "4rem",
                    height: "4rem",
                    objectFit: "cover",
                    boxSizing: "border-box",
                    cursor: "pointer",
                    opacity: active === index ? 1 : 0.5,
                    filter: `blur(${active === index ? 0 : 2}px)`,
                  }}
                  src={thumbnailSrc}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
