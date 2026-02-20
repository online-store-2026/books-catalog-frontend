import { useState, useEffect, useRef } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { ProductCardSkeleton } from '@/components/ProductCard/ProductCardSkeleton';
import { getPaperBooks } from '@/services/booksAPI';
import type { Book } from '@/types/Book';
import { ScrollButton } from '@/utils/ScrollButtons';
import { cn } from '@/lib/utils';
import { TYPOGRAPHY } from '@/constants/typography';

interface Props {
  title: string;
}

export const BooksSection = ({ title }: Props) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getPaperBooks()
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
          min-[640px]:pr-[24px]
          min-[1200px]:pr-0
        "
      >
        <h2
          className={cn(
            TYPOGRAPHY.h2,
            'text-foreground min-[640px]:text-[32px] min-[640px]:leading-[41px]',
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
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        className="
          flex flex-row w-full scroll-smooth
          [&::-webkit-scrollbar]:hidden
          overflow-x-auto gap-[16px] h-[400px]
          min-[640px]:h-[506px]
          min-[1200px]:h-[571px]
          min-[1200px]:overflow-x-auto
        "
      >
        {isLoading ?
          Array(4)
            .fill(null)
            .map((_, i) => <ProductCardSkeleton key={i} />)
        : books.map((book, index) => (
            <ProductCard
              key={`${book.id}-${index}`}
              book={book}
            />
          ))
        }
      </div>
    </section>
  );
};
