import type { RefObject } from 'react';

interface ScrollButtonsProps {
  scrollRef: RefObject<HTMLDivElement | null>;
  amount?: number;
  direction: 'left' | 'right';
}

export const ScrollButton = ({
  scrollRef,
  amount,
  direction,
}: ScrollButtonsProps) => {
  const handleScroll = () => {
    if (scrollRef.current) {
      const step = amount || scrollRef.current.clientWidth;
      const scrollAmount = direction === 'left' ? -step : step;

      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="w-[40px] h-[40px] flex items-center justify-center border border-border rounded-full hover:bg-accent transition-colors flex-shrink-0"
      aria-label={`Scroll ${direction}`}
    >
      <span className="text-[20px]">{direction === 'left' ? '←' : '→'}</span>
    </button>
  );
};
