import { useState, useRef, useEffect } from 'react';
import bannerSm from './banner-mob.png';
import { handleScroll } from '@/utils/handleScroll';
import { ScrollButton } from '@/utils/ScrollButtons';

const BANNERS = [
  { id: 1, img: bannerSm, alt: 'Independence Day' },
  { id: 2, img: bannerSm, alt: 'New books' },
  { id: 3, img: bannerSm, alt: 'Recommendations' },
];

export const MainBanner = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const nextIndex = (activeIndex + 1) % BANNERS.length;

        const amount =
          nextIndex === 0 ?
            scrollRef.current.clientWidth * (BANNERS.length - 1)
          : scrollRef.current.clientWidth;

        handleScroll({
          direction: nextIndex === 0 ? 'left' : 'right',
          scrollRef,
          amount,
        });

        setActiveIndex(nextIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const onScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(
        scrollRef.current.scrollLeft / scrollRef.current.clientWidth,
      );
      if (index !== activeIndex) setActiveIndex(index);
    }
  };

  return (
    <section
      className="flex flex-col items-center
    w-full h-[352px] pt-0
    min-[640px]:h-[368px] min-[640px]:pt-[40px]
    min-[1200px]:h-[432px] min-[1200px]:pt-[65px]
    min-[1200px]:max-w-[1136px] min-[1200px]:mx-auto"
    >
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex w-full h-[320px] overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden 
        touch-action-pan-x"
        style={{ scrollbarWidth: 'none' }}
      >
        {BANNERS.map((banner) => (
          <div
            key={banner.id}
            className="
        w-full h-full flex-shrink-0 snap-center flex justify-center
      min-[640px]:px-[24px] min-[1200px]:px-[32px]
      "
          >
            <div
              className="flex items-center w-full h-full 
      gap-0 min-[640px]:gap-[8px] min-[1200px]:gap-[16px]
    "
            >
              <div className="hidden min-[640px]:flex w-[32px] h-[336px] min-[1200px]:h-[400px] items-center justify-center">
                <ScrollButton
                  scrollRef={scrollRef}
                  direction="left"
                />
              </div>
              <img
                src={banner.img}
                alt={banner.alt}
                className="
            object-cover
            w-full h-full min-[640px]:rounded-[24px]
          "
              />
              <div className="hidden min-[640px]:flex w-[32px] h-[336px] min-[1200px]:h-[400px] items-center justify-center">
                <ScrollButton
                  scrollRef={scrollRef}
                  direction="right"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-[8px] mt-[12px]">
        {BANNERS.map((_, index) => (
          <div
            key={index}
            className={`w-[40px] h-[2px] transition-all duration-300 ${
              index === activeIndex ? 'bg-foreground' : 'bg-border'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
