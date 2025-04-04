import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function MyCarousel({ imgs }: { imgs?: string[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(0);
  // console.log(active);
  useEffect(() => {
    if (!api) {
      return
    }
 
    // setCount(api.scrollSnapList().length)
    // setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setActive(api.selectedScrollSnap());
      // setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api]);


  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, margin: 0}}>
        <Carousel style={{width: '100%', border: '1px solid #fff2', boxSizing: 'border-box', justifyContent: 'center'}} setApi={setApi} >
          <CarouselContent style={{ height: '20rem' }}>
            {
              (!imgs || imgs.length == 0) && <CarouselItem className="bases-1/3" style={{display: 'flex', justifyContent: 'center', padding: 0, margin: 0, width: '100%', height: '100%'}} >
              <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
                <span style={{fontSize: '3rem', color: 'grey', textAlign: 'center', padding: 0, textWrap: 'wrap'}}>Please add images</span>
              </div>
            </CarouselItem>
            }
            {
              imgs && imgs.map((imgSrc, index) => {
                return <CarouselItem className="bases-1/3" style={{display: 'flex', alignItems: 'center', width: '100%', boxSizing: 'border-box'}} key={`img_${index}`} >
                <img style={{ width: '100%', objectFit: 'contain', backgroundColor: '#0006' }} src={imgSrc} />
              </CarouselItem>
              })
            }
          </CarouselContent>
          <div className="showOnHover" style={{width: '100%', height: '100%', position: 'absolute', top: 0}}>
            <CarouselPrevious style={{left: '0.5rem', border: '1px solid #fff2'}} />
            <CarouselNext style={{right: '0.5rem', border: '1px solid #fff2'}} />
          </div>
        </Carousel>
        <div style={{marginTop: '0.5rem', gap: '0.5rem', display: 'flex'}}>
          {
            imgs?.map((imgSrc, index) => {
              return <div key={`imgprev_${index}`} style={{border: '1px solid #fff2'}}>
                <img onClick={() => api?.scrollTo(index)} style={{width: '4rem', height: '4rem', objectFit: 'cover', boxSizing: 'border-box', cursor: 'pointer', opacity: active == index ? 1: 0.5, filter: `blur(${active == index ? 0: 2}px)`}} src={imgSrc} />
              </div>
            })
          }
        </div>
      </div>
    </>
  );
}
