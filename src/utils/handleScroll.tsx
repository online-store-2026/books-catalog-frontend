import type { RefObject } from 'react';

interface ScrollParams {
  direction: 'left' | 'right';
  scrollRef: RefObject<HTMLDivElement | null>;
  amount?: number;
}

export const handleScroll = ({
  direction,
  scrollRef,
  amount,
}: ScrollParams): void => {
  if (scrollRef.current) {
    const step = amount || scrollRef.current.clientWidth;
    const scrollAmount = direction === 'left' ? -step : step;

    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }
};
