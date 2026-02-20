import { useRef } from 'react';
import { ProductCard } from '@/components/ProductCard';
import type { Book } from '@/types/Book';
import { ScrollButton } from '@/components/BooksSection/ScrollButtons';
import { cn } from '@/lib/utils';
import { TYPOGRAPHY } from '@/constants/typography';

interface Props {
  title: string;
  books: Book[];
}

export const BooksSection = ({ title, books = [] }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    // Початок координат та поточна позиція прокрутки
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;

    // Змінюємо курсор на "затиснуту руку"
    scrollRef.current.style.cursor = 'grabbing';
    scrollRef.current.style.userSelect = 'none'; // щоб не виділявся текст
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'pointer';
  };

  const handleMouseUp = () => {
    isDragging.current = true; // короткочасно залишаємо true для блокування кліків (опційно)
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'pointer';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // швидкість прокрутки (2 — коефіцієнт)
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section
      className="
    flex flex-col
    mt-[56px] pl-[16px] gap-[24px]
    md:mt-[56px] md:pl-[24px]
    lg:mt-[80px] lg:w-[1136px] lg:mx-auto lg:pl-0
    lg:overflow-x-auto
  "
    >
      <div
        className="
      flex flex-row justify-between items-center w-full max-w-[1136px]
      pr-[16px]
      md:pr-[24px]
      lg:pr-0
    "
      >
        <h2
          className={cn(
            TYPOGRAPHY.h2,
            'text-foreground md:text-[32px] md:leading-[41px]',
          )}
        >
          {title}
        </h2>

        <div className="flex gap-[16px]">
          <ScrollButton
            scrollRef={scrollRef}
            direction="left"
          />
          <ScrollButton
            scrollRef={scrollRef}
            direction="right"
          />
        </div>
      </div>

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          cursor: 'pointer',
        }}
        className="
        flex flex-row w-full scroll-smooth
        [&::-webkit-scrollbar]:hidden overflow-x-auto gap-[16px] 
        h-[400px] md:h-[506px] lg:h-[571px] lg:overflow-x-auto
      "
      >
        {books.map((book, index) => (
          <ProductCard
            key={`${book.id}-${index}`}
            book={book}
          />
        ))}
      </div>
    </section>
  );
};
